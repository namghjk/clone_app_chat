import React from "react";
import { Collapse, Typography } from "antd";

const { Panel } = Collapse;

export default function RoomList() {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="List room" key="1">
        <Typography.Link>Room1</Typography.Link>
        <Typography.Link>Room2</Typography.Link>
        <Typography.Link>Room3</Typography.Link>
      </Panel>
    </Collapse>
  );
}
