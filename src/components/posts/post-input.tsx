import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { connect } from "react-redux";
import { StyledPosts } from "./posts";
import { addPost } from "../../store/actions/projects-actions";
import { Post } from "../../store/reducers/blog-reducer";

const { TextArea } = Input;

type Event = { target: { value: string } };

export const StyledInput = styled(StyledPosts)`
  width: 450px;
  margin: 15px auto 0;
  textarea {
    margin-top: 5px;
  }
  button {
    margin: 10px 0;
  }
  p {
    font-weight: bold;
    margin-bottom: 5px;
  }
  @media (max-width: 768px) {
    width: 75%;
    margin: 0 auto;
  }
`;

interface OwnProps {
  addPost: (post: Post) => void;
}

type Props = OwnProps;

const PostInput: FunctionComponent<Props> = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onAddPost = () => {
    addPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <StyledInput>
      <p>Add New Post</p>
      <Input
        placeholder="Enter title..."
        onChange={(e: Event) => setTitle(e.target.value)}
        value={title}
      />
      <TextArea
        placeholder="Enter your post..."
        rows={2}
        value={body}
        onChange={(e: Event) => setBody(e.target.value)}
      />
      <Button type="primary" disabled={!title || !body} onClick={onAddPost}>
        Add Post
      </Button>
    </StyledInput>
  );
};

export default connect(
  null,
  { addPost }
)(PostInput);
