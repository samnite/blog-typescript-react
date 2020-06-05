import React, { FunctionComponent } from "react";
import Posts from "./posts";
import PostInput from "./post-input";

interface OwnProps {}

type Props = OwnProps;

const home: FunctionComponent<Props> = props => {
  return (
    <>
      <PostInput />
      <Posts />
    </>
  );
};

export default home;
