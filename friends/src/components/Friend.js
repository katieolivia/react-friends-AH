import React from "react";

class Friend extends React.Component {
  render() {

    return (
      <li className='friend'>
        <img className="profile-pic" src={ 'http://placebear.com/50/50.jpg' } />

          <h3>{ this.props.name}</h3>

          <div className="location">
            Location: { this.props.currentLocation.city }, { this.props.currentLocation.state }
          </div>

          <div className="status">
            Status: { this.props.status }
          </div>

          <div className="num-friends">
            Friends: { this.props.friendCount }
          </div>
      </li>
    );
  }
}

export default Friend;
