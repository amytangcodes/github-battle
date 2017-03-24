var React = require('react');
var Prompt = require('../components/Prompt');

// Container Component (vs Presentational Component)

var PromptContainer = React.createClass({
  contextTypes: {  //  This allows us to do routing in this component.
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    }
  },
  handleUpdateUser: function(e) {  // resetting that state
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;  // reset our state (back button doesnt lead to old username)
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      // go to battle
      // console.log(this.context);
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo
      // console.log(this.context);
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function() {
    console.log(this);
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;
