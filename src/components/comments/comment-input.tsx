import React, { FunctionComponent, useState } from "react";
import { Input, Button } from "antd";
import { connect } from "react-redux";
import { StyledInput } from "../posts/post-input";
import { createComment } from "../../store/actions/projects-actions";
import { Comment } from "../../store/reducers/blog-reducer";

type Event = { target: { value: string } };

interface OwnProps {
  createComment: (comment: Comment) => void;
  id: number | undefined;
}

type Props = OwnProps;

const CommentInput: FunctionComponent<Props> = ({ id, createComment }) => {
  const [body, setBody] = useState("");
  const onAddComment = () => {
    if (id) {
      createComment({ postId: id, body });
      setBody("");
    }
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
        Add Comment
      </Button>
    </StyledInput>
  );
};

export default connect(
  null,
  { createComment }
)(CommentInput);
