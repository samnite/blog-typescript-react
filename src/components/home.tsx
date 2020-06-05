import React, { FunctionComponent } from "react";
import Posts from "./posts";

interface OwnProps {}

type Props = OwnProps;

const home: FunctionComponent<Props> = props => {
  return <Posts />;
};

export default home;
