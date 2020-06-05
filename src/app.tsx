import React, { FunctionComponent, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  getAllPosts,
  getSinglePost,
  addPost
} from "./store/actions/projects-actions";
import SinglePost from "./components/single-post";
import NotFound from "./components/not-found";
import Home from "./components/home";
import { Post } from "./store/reducers/blog-reducer";
import PostPage from "./components/post-page";
import styled from "styled-components";

interface OwnProps {
  getAllPosts: () => void;
  getSinglePost: (id: number) => void;
  addPost: (post: Post) => void;
}

type Props = OwnProps;

const StyledContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
`;

const App: FunctionComponent<Props> = ({
  getAllPosts,
  getSinglePost,
  addPost
}) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <StyledContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={PostPage} />
        <Route component={NotFound} />
      </Switch>
    </StyledContainer>
  );
};

export default connect(
  null,
  { getAllPosts, getSinglePost, addPost }
)(App);
