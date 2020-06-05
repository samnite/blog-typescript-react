import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const NotFound: FunctionComponent<Props> = () => {
  return <div>Page Not Found</div>;
};

export default NotFound;
