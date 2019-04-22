import React, { Component } from "react";
import { Menu, Dropdown, Avatar, Icon, Spin } from "antd";
import { Link } from "react-router-dom";
import { _currentUser, _defaultUser } from "../static/user";

export class AvatarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: _defaultUser
    };

    setTimeout(() => {
      this.setState({ currentUser: _currentUser });
    }, 1000);
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="/#">
            <Icon type="user" className="dropdown-icon" /> Account Center
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="/#">
            <Icon type="setting" className="dropdown-icon" /> Account Settings
          </a>
        </Menu.Item>
        <Menu.Divider />

        <Menu.Item key="2">
          <Link to="/">
            <Icon type="logout" className="dropdown-icon" /> Logout
          </Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        {this.state.currentUser.name === "" ? (
          <Spin size="small" style={{ marginLeft: 8, marginRight: 8 }} />
        ) : (
          <div>
            <Avatar src={this.state.currentUser.avatar} />{" "}
            {this.state.currentUser.name}
          </div>
        )}
      </Dropdown>
    );
  }
}
