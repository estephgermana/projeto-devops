const apiUrl = 'http://localhost:3000/items';

if (document.querySelector('#item-list')) {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const list = document.querySelector('#item-list');
            list.innerHTML = ''; 
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.name;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Excluir';
                deleteButton.addEventListener('click', () => deleteItem(item.id));

                li.appendChild(deleteButton);
                list.appendChild(li);
            });
        });
}

function deleteItem(itemId) {
    fetch(`http://localhost:3000/items/${itemId}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
        alert('Item excluído com sucesso!');
        window.location.reload(); 
    });
}
