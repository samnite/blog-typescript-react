import React, { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import SinglePost from "./single-post";
import { RootState } from "../store/reducers/blog-reducer";
import { StyledSpinner } from "./shared/components";
import { getAllPosts } from "../store/actions/projects-actions";
import { State } from "../store/store";

export const StyledPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface OwnProps {
  getAllPosts: () => void;
  data: RootState;
}

type Props = OwnProps;

const Posts: FunctionComponent<Props> = ({
  getAllPosts,
  data: { posts, isLoading }
}) => {
  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line
  }, []);
  if (isLoading) return <StyledSpinner />;
  return (
    <StyledPosts>
      {posts && posts.map(post => <SinglePost key={post.id} post={post} />)}
    </StyledPosts>
  );
};

const mapStateToProps = ({ data }: State) => ({
  data
});

export default connect(
  mapStateToProps,
  { getAllPosts }
)(Posts);
