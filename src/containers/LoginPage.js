import React, { Component } from "react";
import Login from "ant-design-pro/lib/Login";
import { Alert, Checkbox, Row, Col, Layout } from "antd";
import { Redirect } from "react-router-dom";

import logo from "../assets/img/logo.svg";

const { Content, Footer } = Layout;
const { Tab, UserName, Password, Submit } = Login;

class LoginPage extends Component {
  state = {
    notice: "",
    type: "tab1",
    autoLogin: true,
    redirect: false
  };
  onSubmit = (err, values) => {
    console.log("value collected ->", {
      ...values,
      autoLogin: this.state.autoLogin
    });
    if (this.state.type === "tab1") {
      this.setState(
        {
          notice: ""
        },
        () => {
          if (values.username === "admin" || values.password === "123") {
            this.setState({ redirect: true });
          }
          if (!err) {
            setTimeout(() => {
              this.setState({
                notice: "The combination of username and password is incorrect!"
              });
            }, 500);
          }
        }
      );
    }
  };

  onTabChange = key => {
    this.setState({
      type: key
    });
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/dashboard/analysis" />;
    }
    return (
      <Layout
        style={{
          height: "100vh",
          backgroundImage:
            "url(" +
            "https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgb(245, 245, 245)"
        }}
      >
        <Content>
          <Row>
            <Col
              lg={{ span: 6, offset: 9 }}
              md={{ span: 18, offset: 4 }}
              style={{ marginTop: "3rem", marginBottom: "1rem" }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  style={{
                    width: 200,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  src={logo}
                  alt=""
                />
                <p>Pinjam Modal Admin</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 6, offset: 9 }} md={{ span: 18, offset: 4 }}>
              <Login
                defaultActiveKey={this.state.type}
                onTabChange={this.onTabChange}
                onSubmit={this.onSubmit}
              >
                <Tab key="tab1" tab="Account">
                  {this.state.notice && (
                    <Alert
                      style={{ marginBottom: 24 }}
                      message={this.state.notice}
                      type="error"
                      showIcon
                      closable
                    />
                  )}
                  <UserName name="username" />
                  <Password name="password" placeholder="123" />
                </Tab>
                <div>
                  <Checkbox
                    checked={this.state.autoLogin}
                    onChange={this.changeAutoLogin}
                  >
                    Keep me logged in
                  </Checkbox>
                  <a style={{ float: "right" }} href="/#">
                    Forgot password
                  </a>
                </div>
                <Submit>Login</Submit>
              </Login>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>Pinjam Modal ©2019</Footer>
      </Layout>
    );
  }
}

export default LoginPage;
