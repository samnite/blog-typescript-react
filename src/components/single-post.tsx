import React, { FunctionComponent } from "react";
import { Card, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Post } from "../store/reducers/blog-reducer";
import EditButtons from "./edit-buttons";
import PostUpdate from "./post-update";

export const StyledCard = styled(Card)`
  margin-bottom: 5px;
  border-radius: 5px;
  textarea {
    margin-top: 5px;
  }
  button {
    margin: 10px 0;
  }
  span {
    cursor: pointer;
  }
`;

interface OwnProps {
  post: Post;
  showButton?: boolean;
}

type Props = OwnProps;

const SinglePost: FunctionComponent<Props> = ({ post, showButton = true }) => {
  return (
    <>
      {post.editMode ? (
        <PostUpdate post={post} />
      ) : (
        <StyledCard
          title={post.title}
          extra={
            showButton ? (
              <EditButtons postId={post.id ? post.id : null} />
            ) : (
              <Link to="/">
                <Button type="primary">Back</Button>
              </Link>
            )
          }
          bordered={false}
          style={{ width: 600 }}
        >
          <p>{post.body}</p>
          <Link to={`post/${post.id}`}>
            {showButton && <Button type="primary">Read More...</Button>}
          </Link>
        </StyledCard>
      )}
    </>
  );
};

export default SinglePost;
