import React from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .btn-add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export default function RoomList() {
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="List room" key="1">
        <LinkStyled>Room1</LinkStyled>
        <LinkStyled>Room2</LinkStyled>
        <LinkStyled>Room3</LinkStyled>
        <Button
          type="text"
          icon={<PlusSquareOutlined />}
          className="btn-add-room"
        >
          Add room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
