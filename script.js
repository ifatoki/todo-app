const addButton = document.getElementById('add-to-list')

addButton.addEventListener('click', function() {
    let newTodo = document.getElementById('input-box').value;
    addNewTodo(newTodo);
    document.getElementById('input-box').value = '';
});

function addNewTodo(newTodo) {
    let list = document.createElement('li');
    list.innerHTML = newTodo;
    document.getElementById('display-list').appendChild(list);
    
    // let node = document.createTextNode(newTodo);
    // list.appendChild(node);
    // const display = document.getElementById('display-list');
    // display.appendChild(list);
}
