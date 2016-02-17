/** @jsx React.DOM */
var ElmtNavigation = React.createClass({

    render: function() {
        return (
            <li>
                {this.props.elmt.data.display_name}
            </li>
        );
    }
});

var MenuNavigation = React.createClass({

    render: function() {
        var _this = this;

        var elmts = this.props.elmts.map(function(elmt) {
            return (
                <ElmtNavigation key={elmt.data.id}
                    elmt={elmt}/>
            );
        });

        return (
            <div className="navigation">
                <div className="header">Navigation</div>
                <ul>
                    {elmts}
                </ul>
            </div>
        );
    }

});

var Application = React.createClass({
    componentDidMount: function() {
        var _this = this;
        var nomfct = "fn";
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
            ElmtsSignet: [],
            titre: "Choisissez une rubrique"
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
