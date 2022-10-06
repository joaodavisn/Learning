var userId = 0000;

function createIdComponent (id) {
    var idComponent = document.createElement('h3');
    idComponent.id = id + 'id';
    idComponent.className = 'id';
    idComponent.innerHTML = 'Id:'  + id;
    return idComponent;
}

function createDataComponent (name, age) {
    var dataComponent = document.createElement('h3');
    dataComponent.className = 'data';
    dataComponent.innerHTML = 'Name: ' + name + ', Age: ' + age;
    return dataComponent;
}

function createRemoveButton (id) {
    var button = document.createElement('button');
    button.innerHTML = 'Remove User';
    button.className = 'removeBtn';
    button.onclick = function () {
        remove(id);
    };
    return button;
}

function add () {
    if (document.getElementById('Name').value === '' || document.getElementById('Age').value === '') {
        window.alert('Please fill all the fields');
        return;
    }

    if (document.getElementById('Age').value < 0 || document.getElementById('Age').value > 100) {
        window.alert('Age must be between 0 and 100');
        return;
    }
    var name = document.getElementById('Name').value;
    var age = document.getElementById('Age').value;

    var div = document.createElement('div');

    div.id = 'container_' + userId;

    div.className = 'borderpad';
    
    document.body.appendChild(div);
    div.appendChild(createDataComponent(name, age));
    div.appendChild(createIdComponent(userId));
    div.appendChild(createRemoveButton(userId));

    userId ++;
}

function remove (id) {
    var div = document.getElementById('container_' + id);
    document.body.removeChild(div);
}

function clearAll () {
    var divs = document.getElementsByClassName('borderpad');
    while (divs.length > 0) {
        document.body.removeChild(divs[0]);
    }
    userId = 0;
}
