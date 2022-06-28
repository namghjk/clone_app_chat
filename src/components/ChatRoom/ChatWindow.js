import React, { useContext } from "react";
import styled from "styled-components";
import { Button, Avatar, Tooltip, Form, Input, Alert } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import Message from "./Message";
import AppProvider, { AppContext } from "../../Context/AppProvider";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
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
const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  over-flow-y: auto;
`;

export default function ChatWindow() {
  const { selectedRoom, members, setIsInviteMemberVisible } =
    useContext(AppContext);

  return (
    <WrapperStyled>
      {selectedRoom.id ? (
        <>
          <HeaderStyled>
            <div className="header_infor">
              <p className="header_title">{selectedRoom.name}</p>
              <span className="header_description">
                {selectedRoom.description}
              </span>
            </div>
            <ButtonGroupStyled>
              <Button
                icon={<UserAddOutlined />}
                type="text"
                onClick={() => setIsInviteMemberVisible(true)}
              >
                Add
              </Button>
              <Avatar.Group size="small" maxCount={2}>
                {members.map((member) => (
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? " "
                        : member.displayName?.charAt(0).toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </Avatar.Group>
            </ButtonGroupStyled>
          </HeaderStyled>
          <ContentStyled>
            <MessageListStyled>
              <Message
                text="Text"
                photoURL={null}
                displayName="Nam"
                createDate={12312312414}
              />
              <Message
                text="Text"
                photoURL={null}
                displayName="Nam"
                createDate={12312312414}
              />
              <Message
                text="Text"
                photoURL={null}
                displayName="Nam"
                createDate={12312312414}
              />
              <Message
                text="Text"
                photoURL={null}
                displayName="Nam"
                createDate={12312312414}
              />
            </MessageListStyled>
            <FormStyled>
              <Form.Item>
                <Input
                  placeholder="Text the message..."
                  bordered={false}
                  autoComplete="off"
                />
              </Form.Item>
              <Button type="primary">Send</Button>
            </FormStyled>
          </ContentStyled>
        </>
      ) : (
        <Alert
          message="Please choose your room"
          type="info"
          showIcon
          style={{ margin: 5 }}
          closable
        />
      )}
    </WrapperStyled>
  );
}
