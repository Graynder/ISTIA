/** @jsx React.DOM */
var MenuNavigation = React.createClass({displayName: "MenuNavigation",
    render: function() {
        var creationElemt = function(elemtTexte){
            return React.createElement("li", null, elemtTexte.data.display_name)
        };
        return (
        React.createElement("div", {className: "navigation"}, 
                React.createElement("div", {className: "header"}, "Navigation"), 
                    React.createElement("ul", null, this.props.elmts.map(creationElemt))
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
