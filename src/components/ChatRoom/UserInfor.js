import React from "react";
import { Button, Avatar, Typography } from "antd";
import styled from "styled-components";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .usernames {
    color: white;
  }
`;

export default function UserInfor() {
  return (
    <WrapperStyled>
      <div>
        <Avatar>A</Avatar>
        <Typography.Text>ABC</Typography.Text>
      </div>
      <Button>Logout</Button>
    </WrapperStyled>
  );
}
