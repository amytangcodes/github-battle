var React = require('react');
// var PropTypes = React.PropTypes;

function ConfirmBattle (props) {
  return props.isLoading === true  // is set to true (default is true)
    ? <p> LOADING! </p>  // then we want to render LOADING!
    : <p> CONFIRM BATTLE! </p>  // and if it's not
}

module.exports = ConfirmBattle;
