/** @jsx React.DOM */

var ElmtNavigation = React.createClass({

    onClick: function() {
        console.log('ElmtNavigation');
        console.log(this.props.elmt);

        this.props.elmtSelectionne(this.props.elmt);
    },
    render: function() {
        return (
            <li onClick={this.onClick}>
                {this.props.elmt.data.display_name}
            </li>
        );
    }

});

var MenuNavigation = React.createClass({
    setSelectedItem: function(elmt) {
        console.log('MenuNavigation');
        console.log(elmt);
        this.props.elmtSelectionne(elmt);
    },

    render: function() {
        var _this = this;

        var elmts = this.props.elmts.map(function(elmt) {
            return (
                <ElmtNavigation key={elmt.data.id}
                    elmt={elmt}
                    elmtSelectionne={_this.setSelectedItem}/>
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
        var nomfct = "fn" ;
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
                    elmts={this.state.ElmtNavigations}
                    elmtSelectionne={this.setSelectedItem} />
            </div>
        );
    },

    setSelectedItem: function(elmt) {
        console.log('Application');
        console.log(elmt);
    }

});

React.renderComponent(<Application />,document.body);
