const addButton = document.getElementById('add-to-list')





addButton.addEventListener('click', function() {
    const newTodo = document.getElementById('input-box').value;

    console.log(newTodo);
    
    let a = document.createElement('li')
    let node = document.createTextNode(newTodo);
    a.appendChild(node);

    const display = document.getElementById('display-list');


    display.appendChild(a);
});

// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
// var element = document.getElementById("div1");
// element.appendChild(para);