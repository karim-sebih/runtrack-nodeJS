// routes.js
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid'); 

// Chemin vers le fichier de données
const dataPath = path.join(__dirname, 'data.json');

// Lire les données du fichier
const readData = async () => {
    try {
        const data = await fs.readFile(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return { tasks: [] };
    }
};

// Écrire dans le fichier
const writeData = async (data) => {
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
};

// Gestionnaire des routes
const handleRoutes = async (req, res) => {
    const { url, method } = req;
    
    // Récupérer toutes les tâches - GET /tasks
    if (url === '/tasks' && method === 'GET') {
        const data = await readData();
        res.writeHead(200);
        res.end(JSON.stringify(data.tasks));
        return;
    }

    // Créer une nouvelle tâche - POST /tasks
    if (url === '/tasks' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', async () => {
            try {
                const newTask = JSON.parse(body);
                if (!newTask.title || !newTask.description) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: 'Title and description are required' }));
                    return;
                }
                
                const data = await readData();
                const task = {
                    id: uuidv4(),
                    title: newTask.title,
                    description: newTask.description,
                    status: newTask.status || 'pending'
                };
                
                data.tasks.push(task);
                await writeData(data);
                
                res.writeHead(201);
                res.end(JSON.stringify(task));
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
        return;
    }

    // Mettre à jour une tâche - PUT /tasks/:id
    if (url.startsWith('/tasks/') && method === 'PUT') {
        const id = url.split('/')[2];
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', async () => {
            try {
                const updatedTask = JSON.parse(body);
                const data = await readData();
                const taskIndex = data.tasks.findIndex(task => task.id === id);
                
                if (taskIndex === -1) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: 'Task not found' }));
                    return;
                }
                
                data.tasks[taskIndex] = {
                    ...data.tasks[taskIndex],
                    title: updatedTask.title || data.tasks[taskIndex].title,
                    description: updatedTask.description || data.tasks[taskIndex].description,
                    status: updatedTask.status || data.tasks[taskIndex].status
                };
                
                await writeData(data);
                res.writeHead(200);
                res.end(JSON.stringify(data.tasks[taskIndex]));
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
        return;
    }

    // Supprimer une tâche - DELETE /tasks/:id
    if (url.startsWith('/tasks/') && method === 'DELETE') {
        const id = url.split('/')[2];
        const data = await readData();
        const taskIndex = data.tasks.findIndex(task => task.id === id);
        
        if (taskIndex === -1) {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Task not found' }));
            return;
        }
        
        data.tasks.splice(taskIndex, 1);
        await writeData(data);
        res.writeHead(204);
        res.end();
        return;
    }

    // Route non trouvée
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
};

module.exports = { handleRoutes };