import React, { FunctionComponent, useEffect, useState } from "react";
import { Button, Input } from "antd";
import { connect } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";
import { Post } from "../../store/reducers/blog-reducer";
import { StyledCard } from "./single-post";
import { updatePost, setEditMode } from "../../store/actions/projects-actions";

const { TextArea } = Input;

type Event = { target: { value: string } };

interface OwnProps {
  updatePost: (post: Post) => void;
  setEditMode: (id: number, mode: boolean) => void;
  post: Post;
}

type Props = OwnProps;

const PostUpdate: FunctionComponent<Props> = ({
  post,
  updatePost,
  setEditMode
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    setTitle(post.title);
    setBody(post.body);
    // eslint-disable-next-line
  }, []);
  const onUpdatePost = () => {
    updatePost({ id: post.id, title, body });
  };
  const changeMode = () => {
    if (post.id) setEditMode(post.id, false);
  };
  return (
    <>
      <StyledCard
        style={{ width: 600 }}
        title="Edit Post..."
        extra={<CloseOutlined style={{ color: "red" }} onClick={changeMode} />}
      >
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
        <Button
          type="primary"
          disabled={!title || !body}
          onClick={onUpdatePost}
        >
          Update Post
        </Button>
      </StyledCard>
    </>
  );
};

export default connect(
  null,
  { updatePost, setEditMode }
)(PostUpdate);
