import React, { FunctionComponent } from "react";
import Posts from "../posts/posts";
import PostInput from "../posts/post-input";

interface OwnProps {}

type Props = OwnProps;

const home: FunctionComponent<Props> = () => {
  return (
    <>
      <PostInput />
      <Posts />
    </>
  );
};

export default home;
