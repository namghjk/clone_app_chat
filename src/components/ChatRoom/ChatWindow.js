import React from "react";
import styled from "styled-components";
import { Button, Avatar, Tooltip } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgba(230, 230, 230);

  .header {
    &_infor {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &_title {
      margin: 0;
      font-weight: bold;
    }

    &_description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const ContentStyled = styled.div``;

export default function ChatWindow() {
  return (
    <div>
      <HeaderStyled>
        <div className="header_infor">
          <p className="header_title">Room 1</p>
          <span className="header_description">This is Room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text">
            Add
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled></ContentStyled>
    </div>
  );
}
