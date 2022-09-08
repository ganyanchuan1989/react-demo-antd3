import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

export default class DemoSelect extends Component {
  componentDidMount() {
    console.log(">>>", this.refs);
  }
  render() {
    return (
      <div>
        <div>
          <Select ref="aaa" style={{ width: 200 }}>
            <Option value="1">11</Option>
            <Option value="2">22</Option>
            <Option value="3">33</Option>
          </Select>
        </div>
      </div>
    );
  }
}
