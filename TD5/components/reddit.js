/** @jsx React.DOM */
var MenuNavigation = React.createClass({
    render: function() {
        var creationElemt = function(elemtTexte){
            return <li>{elemtTexte.data.display_name}</li>
        };
        return (
        <div className="navigation">
                <div className="header">Navigation</div>
                    <ul>{this.props.elmts.map(creationElemt)}</ul>
        </div>
        );
    }
});

var Application = React.createClass({

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
            <div>
                <h1>{this.state.titre}</h1>
                <MenuNavigation
                    elmts={this.state.ElmtNavigations}/>
            </div>
        );
    }
});
React.renderComponent(<Application />,document.body);
