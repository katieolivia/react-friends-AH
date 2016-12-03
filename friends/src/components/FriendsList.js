import React from 'react';
import Friend from './Friend.js';
import friends from './friends.js';
import _sortBy from 'lodash/sortBy';

class FriendsList extends React.Component {
  constructor( props ) {
    super (props );

    this.state = {
      searchText: "",
      orderBy: "name",
      order: "ascending"
    };
  }

  handleChange(field, event) {
    this.setState({ [field]: event.target.value});
  }

  renderFriends () {
    const sortedFriends = _sortBy(friends, (friend) => {
      return friend[this.state.orderBy];
    })

    const displayFriends = this.state.order === 'descending' ? sortedFriends.reverse() : sortedFriends;

    console.log("this is this.state.order", this.state.order)

    return displayFriends
      .map( friend => (
        <Friend
          currentLocation={ friend.current_location || {} }
          friendCount={ friend.friend_count }
          key={ friend.name }
          name={ friend.name}
          pictureUrl={ friend.pic_square}
          status={ friend.status ? friend.status.message : ""}
        />
      ));
  }

  render() {
    // console.log('this is this.state.order', this.state.order)
    return (
      <div>
        <form
          className="form-inline searchForm"
          role="form"
        >
          <div className="form-group">
            <input
              className="form-control"
              onChange={this.handleChange.bind(this, 'searchText')}
              placeholder="Search For Friends"
              value={this.state.searchText}
            />

            <select
              className="input-medium"
              value={this.state.orderBy}
              onChange={this.handleChange.bind(this, "orderBy")}
            >
              <option value="name">Name</option>
              <option value="friend_count">#Friends</option>
            </select>


            <select
              className="input-medium"
              onChange={this.handleChange.bind(this, "order")}
              value={this.state.order}
            >
                <option value="descending">Descending</option>
                <option value="ascending">Ascending</option>
            </select>

          </div>
        </form>

        <ul>
          { this.renderFriends() }
        </ul>

      </div>
    );
  }
}
export default FriendsList;
