import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { _MenuSider } from "../static/menu";

const SubMenu = Menu.SubMenu;

export class MenuSider extends Component {
  render() {
    let i = 0;
    return (
      <div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          {_MenuSider.map(data =>
            data.submenu.length === 0 ? (
              <Menu.Item key={++i}>
                <Icon type={data.icon} />
                <span>{data.title}</span>
              </Menu.Item>
            ) : (
              <SubMenu
                key={`sub${i}`}
                title={
                  <span>
                    <Icon type={data.icon} />
                    <span>{data.title}</span>
                  </span>
                }
              >
                {data.submenu.map(data => (
                  <Menu.Item key={++i}>{data.option}</Menu.Item>
                ))}
              </SubMenu>
            )
          )}
        </Menu>
      </div>
    );
  }
}
