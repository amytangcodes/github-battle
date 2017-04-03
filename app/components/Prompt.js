var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var MainContainer = require('./MainContainer');

// Presentational Component (vs Container Components)

// Functional Stateless Components.

// Instead of creating a class we just create a function:
function Prompt (props) {
  return (
    <MainContainer>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Github Username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </MainContainer>
  )
}

// Let's stick propTypes on the Prompt function:
Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
},

module.exports = Prompt;
