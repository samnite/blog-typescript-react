import React, { FunctionComponent } from "react";
import { Card, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Post } from "../store/reducers/blog-reducer";
import EditButtons from "./edit-buttons";

const StyledCard = styled(Card)`
  margin-bottom: 5px;
  border-radius: 5px;
`;

interface OwnProps {
  post: Post;
  showButton?: boolean;
}

type Props = OwnProps;

const SinglePost: FunctionComponent<Props> = ({ post, showButton = true }) => {
  return (
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
  );
};

export default SinglePost;
