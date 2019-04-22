import React from "react";
import { Layout, Icon, Menu } from "antd";
import { MenuSider } from "../Menu";
import { AvatarHeader } from "../Avatar";

const { Header, Sider, Content, Footer } = Layout;

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <MenuSider />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.handleClick}
            />
            <div style={{ float: "right" }}>
              <Menu mode="horizontal" style={{ lineHeight: "64px" }}>
                <Menu.Item key="1" className="menu-header">
                  <AvatarHeader />
                </Menu.Item>
              </Menu>
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>Pinjam Modal ©2019</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
