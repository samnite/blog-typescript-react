import React, { FunctionComponent, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  getAllPosts,
  getSinglePost,
  addPost
} from "./store/actions/projects-actions";
import Posts from "./components/posts";
import SinglePost from "./components/single-post";
import NotFound from "./components/not-found";
import { Post } from "./store/reducers/blog-reducer";

interface OwnProps {
  getAllPosts: () => void;
  getSinglePost: (id: number) => void;
  addPost: (post: Post) => void;
}

type Props = OwnProps;

const App: FunctionComponent<Props> = ({
  getAllPosts,
  getSinglePost,
  addPost
}) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/post/:id" component={SinglePost} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default connect(
  null,
  { getAllPosts, getSinglePost, addPost }
)(App);
