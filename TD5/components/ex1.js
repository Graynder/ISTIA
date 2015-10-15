/** @jsx React.DOM */

var Simple = React.createClass({

  getInitialState: function(){
    return { count: 0 };
  },

  handleMouseDown: function(){
    alert('On m\'a dit: ' + this.props.message);
    this.setState({ count: this.state.count + 1});
  },

  render: function(){

    return <div>
      <div class="clicker" onMouseDown={this.handleMouseDown}>
        Quel est le message !
      </div>
      <div class="message">Message envoyé
        <span class="count">{this.state.count}</span> fois</div>
    </div>
    ;
  }
});

React.renderComponent(<Simple message="Gardons les choses simples"/>, document.body);
