import React from "react";
import { Avatar, Typography } from "antd";
import styled from "styled-components";
import { formatRelative } from "date-fns/fp";

const WrapperStyled = styled.div`
  margin-bottom: 10px;

  .author {
    margin-left: 5px;
    font-weight: bold;
  }

  .date {
    margin-left: 5px;
    font-size: 11px;
    color: #a7a7a7;
  }

  .content {
    margin-left: 30px;
  }
`;

function formatDate(seconds) {
  let formatDate = "";

  if (seconds) {
    formatDate = formatRelative(new Date(seconds * 1000), new Date());

    formatDate = formatDate.charAt(0)?.toUpperCase() + formatDate.slice(1);
  }

  return formatDate;
}

export default function Message({ text, displayName, createDate, photoURL }) {
  return (
    <WrapperStyled>
      <div>
        <Avatar size="small" src={photoURL}>
          {photoURL ? "" : displayName.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className="author">{displayName}</Typography.Text>
        <Typography.Text className="date">
          {formatDate(createDate?.seconds)}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text className="content">{text}</Typography.Text>
      </div>
    </WrapperStyled>
  );
}
