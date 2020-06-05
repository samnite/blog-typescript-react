import React, { FunctionComponent } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { connect } from "react-redux";
import { deletePost, setEditMode } from "../store/actions/projects-actions";

const StyledButtons = styled.div`
  display: flex;
  span {
    padding: 0 5px;
    cursor: pointer;
  }
`;

interface OwnProps {
  deletePost: (id: number) => void;
  setEditMode: (id: number, mode: boolean) => void;
  postId: number | null;
}

type Props = OwnProps;

const EditButtons: FunctionComponent<Props> = ({
  deletePost,
  setEditMode,
  postId
}) => {
  const onDeletePost = () => {
    if (postId) {
      deletePost(postId);
    }
  };
  const changeMode = () => {
    if (postId) {
      setEditMode(postId, true);
    }
  };
  return (
    <StyledButtons>
      <EditOutlined onClick={changeMode} />
      <DeleteOutlined style={{ color: "red" }} onClick={onDeletePost} />
    </StyledButtons>
  );
};

export default connect(
  null,
  { deletePost, setEditMode }
)(EditButtons);
