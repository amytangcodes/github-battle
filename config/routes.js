var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <Router>
    <Route path='/' component={Main}>  // this is always going to be active
      <Route path='/home' component={Home} />
      //<IndexRoute component={Home} />  // specify another route
    </Route>
  </Router>
);

module.exports = routes;
