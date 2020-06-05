import React, { FunctionComponent } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  deletePost,
  getAllPosts,
  setLoading
} from "../store/actions/projects-actions";

const StyledButtons = styled.div`
  display: flex;
  span {
    padding: 0 5px;
    cursor: pointer;
  }
`;

interface OwnProps {
  deletePost: (id: number) => void;
  getAllPosts: () => void;
  setLoading: () => void;
  postId: number | null;
}

type Props = OwnProps;

const EditButtons: FunctionComponent<Props> = ({
  deletePost,
  postId,
  getAllPosts,
  setLoading
}) => {
  const onDeletePost = () => {
    if (postId) {
      setLoading();
      deletePost(postId);
      // getAllPosts();
    }
  };
  return (
    <StyledButtons>
      <EditOutlined />
      <DeleteOutlined style={{ color: "red" }} onClick={onDeletePost} />
    </StyledButtons>
  );
};

export default connect(
  null,
  { deletePost, getAllPosts, setLoading }
)(EditButtons);
