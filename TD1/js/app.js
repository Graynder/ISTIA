
    function addTask(e){

    if (e.charCode === 13) {
        var newTodo = document.getElementById('new-todo').value.toString();
        generateView(newTodo);
    }
};

function generateView(newTask) {
    var todos = document.getElementById('todo-list');
    var i = todos.childElementCount + 1;

    var todo =  '<li data-id='
                + i
                +' class=""><div class="view"><input class="toggle" type="checkbox" ><label>'
                + newTask
                +'</label><button class="destroy"></button></div></li> ';

    todos.innerHTML = todo + todos.innerHTML;

};
