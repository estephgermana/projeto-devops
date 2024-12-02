const apiUrl = 'http://localhost:3000/items';

const form = document.getElementById('add-item-form');
const itemNameInput = document.getElementById('item-name');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const itemName = itemNameInput.value;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: itemName }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Item adicionado com sucesso!');
        itemNameInput.value = ''; 
    })
    .catch(error => {
        alert('Erro ao adicionar item');
        console.error(error);
    });
});
