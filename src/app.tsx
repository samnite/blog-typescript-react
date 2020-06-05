import React, { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { StyledContainer } from "./components/shared/components";
import {
  getAllPosts,
  getSinglePost,
  addPost
} from "./store/actions/projects-actions";
import NotFound from "./components/not-found";
import Home from "./components/home";
import { Post } from "./store/reducers/blog-reducer";
import PostPage from "./components/post-page";

interface OwnProps {
  getAllPosts: () => void;
  getSinglePost: (id: number) => void;
  addPost: (post: Post) => void;
}

type Props = OwnProps;

const App: FunctionComponent<Props> = () => {
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
