/** @jsx React.DOM */
var MenuNavigation = React.createClass({displayName: "MenuNavigation",
    render: function() {
        return (
            React.createElement("div", {className: "navigation"}, 
                React.createElement("div", {className: "header"}, "Catégories"), 
                React.createElement("ul", null, 
                    React.createElement("li", null, " Test1 "), 
                    React.createElement("li", null, " Test2 "), 
                    React.createElement("li", null, " Test3 ")
                )
            )
        );
    }
});
var Application = React.createClass({displayName: "Application",

    getInitialState: function() {
        return ({
            titre: "Choisissez une catégorie"
        });
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, this.state.titre), 
                React.createElement(MenuNavigation, null)
            )
        );
    }
});
React.renderComponent(React.createElement(Application, null),document.body);
