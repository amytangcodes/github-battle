var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle (props) {
  return props.isLoading === true  // is set to true (default is true)
    ? <Loading speed={800}  text='Wait one moment' />  // then we want to render LOADING!
    // : <div> CONFIRM BATTLE!: {puke(props)} </div>  // and if it's not
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header="Player 1">
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player 2">
            <UserDetails info={props.playersInfo[1]}/>
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="row">
            <div  className="col-sm-12" style={styles.space}>
              <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                Initiate Battle
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12"  style={styles.space}>
              <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger">
                  Reselect Players
                </button>
              </Link>
            </div>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playerInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
