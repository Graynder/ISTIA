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

   componentDidMount: function() {
        var _this = this;
        var nomfct= "fn" ;
        var script = document.createElement("script");
        script.src = "http://www.reddit.com/reddits.json?jsonp=" + nomfct;
        window[nomfct] = function(jsonData) {
            _this.setState({
                ElmtNavigations: jsonData.data.children
            });
            delete window[nomfct];
        };
        document.head.appendChild(script);
    },
    getInitialState: function() {
        return ({
            ElmtNavigations: [],
            titre: "Choisissez une catégorie"
        });
    },
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, this.state.titre), 
                React.createElement(Navigation, {
                    elmts: this.state.ElmtNavigations})
            )
        );
    }
});
React.renderComponent(React.createElement(Application, null),document.body);
