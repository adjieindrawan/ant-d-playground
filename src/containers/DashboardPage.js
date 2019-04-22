import React, { Component } from "react";
import { Button, Breadcrumb } from "antd";

export class AnalysisPage extends Component {
  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Analysis</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <Button type="primary">Button</Button>
        </div>
      </div>
    );
  }
}
