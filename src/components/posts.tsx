import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SinglePost from "./single-post";
import { getAllPosts } from "../store/actions/projects-actions";
import { RootState } from "../store/reducers/blog-reducer";
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

const Posts: FunctionComponent<Props> = ({ getAllPosts, data: { posts } }) => {
  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line
  }, []);
  if (posts === null) return <p>loading...</p>;
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
