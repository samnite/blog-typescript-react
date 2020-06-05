import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const NotFound: FunctionComponent<Props> = props => {
  return <div>Not Found</div>;
};

export default NotFound;
