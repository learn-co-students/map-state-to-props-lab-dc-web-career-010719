import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let { users, userCount } = this.props
    return (
      <div>
        <ul>
          Users!
          Number of Users: {userCount}
          {users.map((u) => {
            return (
              <li>
                Username: {u.username}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
