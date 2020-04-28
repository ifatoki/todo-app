const addButton = document.getElementById('add-to-list')

addButton.addEventListener('click', function() {
    let newTodo = document.getElementById('input-box').value;
     if (newTodo === '') {
        alert('Write something😉');
    } else {
        addNewTodo(newTodo);
    }
    document.getElementById('input-box').value = '';
});

function addNewTodo(newTodo) {
    let list = document.createElement('li');
    let spanElement = document.createElement('span');
    let icon = document.createElement('i');
    
    list.innerHTML = newTodo;

    icon.classList.add('fa-trash-alt');
    spanElement.append(icon);

    document.getElementById('display-list').appendChild(list, spanElement);
}

// edit = () => {

// }

// trash = () => {
//   
// }
