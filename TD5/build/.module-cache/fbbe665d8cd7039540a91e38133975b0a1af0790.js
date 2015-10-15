/** @jsx React.DOM */

var Simple = React.createClass({displayName: "Simple",

  getInitialState: function(){
    return { count: 0 };
  },

  handleMouseDown: function(){
    alert('On m\'a dit: ' + this.props.message);
    this.setState({ count: this.state.count + 1});
  },

  render: function(){

    return React.createElement("div", null, 
      React.createElement("div", {class: "clicker", onMouseDown: this.handleMouseDown}, 
        "Quel est le message !"
      ), 
      React.createElement("div", {class: "message"}, "Message envoyé", 
        React.createElement("span", {class: "count"}, this.state.count), " fois")
    )
    ;
  }
});

React.renderComponent(React.createElement(Simple, {message: "Gardons les choses simples"}), document.body);
