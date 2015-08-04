/******************************************************************************/
/**Model**/
/******************************************************************************/
var todos = []; // format JSON

/******************************************************************************/
/**Controller**/
/******************************************************************************/

//chargement des datas via localStorage
window.onload = function() {

    for (var i = 0; i < localStorage.length; i++) {
        todos.push(JSON.parse(localStorage[i]));
    }

    generateView();
};

//Ajout d'une todo
function addTodo(e){

    if (e.charCode === 13) {
        var newTodo = document.getElementById('new-todo').value;
        if (newTodo !=="") {
            todos.unshift({todo:newTodo,completed:false});
            generateView();
            document.getElementById('new-todo').value = "";
        }
    }
}

//Suppression de la todo
function deleteTodo(id) {

    todos.splice(id,1);
    generateView();
}

//Change le status de completed
function changeCompleted(id) {

    todos[id].completed = !todos[id].completed;
    generateView();
}

//Savegarde dans localStorage les todos
function saveTodo() {

    localStorage.clear();

    todos.forEach(function (item,index) {
        localStorage.setItem(index,JSON.stringify(item));
    });
}

function dragStart(event,id) {

    event.dataTransfer.setData("Id", id);
    event.dataTransfer.effectAllowed = 'move';

}

function dragOver(event){

	event.preventDefault();
	return false;
}

function dragDrop(event){

	var todo = event.dataTransfer.getData('Id');
    deleteTodo(todo);

}

/******************************************************************************/
/**View**/
/******************************************************************************/

//Genere la vue en fonction du modele à la suite d'un tick du controller
function generateView() {

    var i = todos.length;
    var listTodo = document.getElementById('todo-list');

    var strTodos = "";

    todos.forEach(function (item, index, array) {

        strTodos += '<li data-id=' + index + ' class='+ (item.completed?'completed':'')+ '>';
        strTodos += '<div class="view">';
        strTodos +='<input class="toggle" type="checkbox" onclick="changeCompleted('+ index +')"' + (item.completed?'checked':'') + '>';
        strTodos +='<label  draggable="true"  ondragstart="dragStart(event,'+ index +')">'+ item.todo + '</label>';
        strTodos +='<button class="destroy" onclick="deleteTodo('+ index+ ')"></button>';
        strTodos +='</div></li> ';
    });

    listTodo.innerHTML = strTodos;
}
