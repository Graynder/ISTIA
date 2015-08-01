/*Model*/
var todos = [
    {
        todo:'todo 1',
        completed: false
    },
    {
        todo:'todo 2',
        completed:true
    }
];

/******************************************************************************/

/*Controller*/

//chargement des datas
window.onload = function() {
    generateView();
};

//Ajout d'une todo
function addTodo(e){

    if (e.charCode === 13) {
        var newTodo = document.getElementById('new-todo').value;
        todos.unshift({todo:newTodo,completed:false});
        generateView();
        document.getElementById('new-todo').value = "";
    }
};

//Suppression de la todo
function deleteTodo(id) {

    todos.splice(id,1);
    generateView();
};

/******************************************************************************/

/*View*/
function generateView() {

    var i = todos.length;
    var listTodo = document.getElementById('todo-list');

    var strTodos = "";

    todos.forEach(function (item, index, array) {

        strTodos += '<li data-id='
                    + index
                    + ' class='
                    + (item.completed?'completed':'')
                    + '><div class="view"><input class="toggle" type="checkbox"'
                    + (item.completed?'checked':'')
                    + '><label>'
                    + item.todo
                    + '</label><button class="destroy" onclick="deleteTodo('
                    + index
                    + ')"></button></div></li> ';
    });

    listTodo.innerHTML = strTodos;
};
