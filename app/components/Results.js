var React = require('react');
var PropTypes = React.PropTypes;

function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Results(props) {
  return (
    <div>Results {puke(props)}</div>
  )
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.number.isRequired
}

module.exports = Results;
