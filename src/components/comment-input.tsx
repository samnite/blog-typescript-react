import React, { FunctionComponent, useState } from "react";
import { Input, Button } from "antd";
import { connect } from "react-redux";
import { StyledInput } from "./post-input";
import { createComment } from "../store/actions/projects-actions";
import { Comment } from "../store/reducers/blog-reducer";

type Event = { target: { value: string } };

interface OwnProps {
  createComment: (comment: Comment) => void;
  id: number;
}

type Props = OwnProps;

const CommentInput: FunctionComponent<Props> = ({ id, createComment }) => {
  const [body, setBody] = useState("");
  const onAddComment = () => {
    createComment({ postId: id, body });
  };
  return (
    <StyledInput>
      <p>Add New Comment</p>
      <Input
        placeholder="Enter your comment..."
        value={body}
        onChange={(e: Event) => setBody(e.target.value)}
      />
      <Button type="primary" disabled={!body} onClick={onAddComment}>
        Add Post
      </Button>
    </StyledInput>
  );
};

export default connect(
  null,
  { createComment }
  // @ts-ignore
)(CommentInput);
