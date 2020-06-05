import React, { FunctionComponent } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledButtons = styled.div`
  display: flex;
  span {
    padding: 0 5px;
    cursor: pointer;
  }
`;

interface OwnProps {}

type Props = OwnProps;

const EditButtons: FunctionComponent<Props> = props => {
  return (
    <StyledButtons>
      <EditOutlined /> <DeleteOutlined style={{ color: "red" }} />
    </StyledButtons>
  );
};

export default EditButtons;
