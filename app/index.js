var React      = require('react');
var ReactDOM   = require('react-dom');

// Hello World Component
var HelloWorld = React.createClass({
  render() {
    return (
      <div> Hello Wolrd! </div>
    );
  }
});

//Attach Component to DOM
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
)
