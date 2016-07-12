var USER_DATA = {
  name: 'Amr Desouky',
  username: 'desoukya',
  image: 'http://2.gravatar.com/avatar/ce791f717724172cd44a46878325a23e'
}

var React      = require('react');
var ReactDOM   = require('react-dom');

var ProfilePic = React.createClass({
  render() {
    return (
      <img src={this.props.imageUrl} style={{height:100, weidth:100}} />
    );
  }
});

var Link = React.createClass({
  changeURL() {
    window.location.replace(this.props.href)
  },
  render() {
    return (
      <span>
        {this.props.children}
      </span>
    );
  }
})

var ProfileLink = React.createClass({
  render() {
    return (
      <div>
        <Link href={'https://www.github.com/' + this.props.username} >
          {this.props.username}
        </Link>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render() {
    return (
      <div> {this.props.name} </div>
    );
  }
});

// parent component
var Avatar = React.createClass({
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
});

//Attach Component to DOM
ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
)
