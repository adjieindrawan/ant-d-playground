import React, { Component } from "react";
import { Table, Divider } from "antd";

import { ipUsers } from "../api/config";

const axios = require("axios");

const columns = [
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName"
  },
  {
    title: "Age",
    dataIndex: "lastName",
    key: "lastName"
  },
  {
    title: "Address",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Action",
    key: "action"
  }
];

class EditableTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const setData = data => {
      this.setState({
        data: data
      });
    };
    axios
      .get(ipUsers)
      .then(function(response) {
        // handle success
        setData(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };
  render() {
    return (
      <div>
        {" "}
        <Table columns={columns} dataSource={this.state.data} />{" "}
      </div>
    );
  }
}

export default EditableTable;
