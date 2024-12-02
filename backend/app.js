const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let items = []; 

app.get('/items', (req, res) => {
    res.json(items);
});


app.post('/items', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Nome do item é obrigatório' });
    }
    const newItem = { id: items.length + 1, name };
    items.push(newItem);
    res.status(201).json({ message: 'Item adicionado com sucesso', item: newItem });
});

app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    const itemToDelete = items.find(item => item.id === parseInt(id));

    if (!itemToDelete) {
        return res.status(404).json({ error: 'Item não encontrado' });
    }

    items = items.filter(item => item.id !== parseInt(id));
    res.status(200).json({ message: 'Item excluído com sucesso', item: itemToDelete });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
