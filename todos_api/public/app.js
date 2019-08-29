//alert can be use to check if js file connected alert("hi from app js")

//to fetch date and wait untill dom is ready
$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)

    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    });

    $('.list').on('click', 'li', function(){
        updateTodo($(this));
    })

    $('.list').on('click', 'span', function(event){
        event.stopPropagation();
        removeTodo($(this).parent());
    })
});

function addTodos(todos) {
    //add todos to page
    todos.forEach(function(todo){
        addTodos(todo);
    });
}

function addTodo(todo){
    var newTodo = $('<li class="task">' + todo.name + ' <span>X</span></li>')
    newTodo.data('id', todo._id);
    newTodo.data('comleted', todo.completed);
    if(todo.completed){
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}

function createTodo(){
    //send post request to create todo
    var userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err); 
    })
}

function updateTodo(todo){
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone}
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(function(updatedTodo){
        todo.toggleClass('done');
        todo.data('completed', isDone);
    })
    .catch(function(err){
        console.log(err);
    })
}

function removeTodo(todo){
    var clickedId = todo.data('id');
    var deleteUrl = '/api/todos/' + clickedId;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(function(data){
        todo.remove();
    })
    .catch(function(err){
        console.log(err); 
    })
}