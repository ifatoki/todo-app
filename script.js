const addButton = document.getElementById('add-to-list')

addButton.addEventListener('click', function() {
    addNewTodo();
});

function addNewTodo() {
    const newTodo = document.getElementById('input-box').value;
    let list = document.createElement('li')
    let node = document.createTextNode(newTodo);
    list.appendChild(node);
    const display = document.getElementById('display-list');

    display.appendChild(list);
}
