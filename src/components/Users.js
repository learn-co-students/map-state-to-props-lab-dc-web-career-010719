import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(u => {
            return <li>{u.username}</li>;
          })}
        </ul>
        User count: {this.props.users.length}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps)(Users);
