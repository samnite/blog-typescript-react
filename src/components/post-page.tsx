import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Card } from "antd";
import SinglePost from "./single-post";
import { getSinglePost } from "../store/actions/projects-actions";
import { State } from "../store/store";
import { Comment, RootState } from "../store/reducers/blog-reducer";
import { StyledPosts } from "./posts";

interface OwnProps {
  getSinglePost: (id: number) => void;
  match: { params: { id: number } };
  data: RootState;
}

type Props = OwnProps;

const PostPage: FunctionComponent<Props> = ({
  getSinglePost,
  match,
  data: { post }
}) => {
  useEffect(() => {
    getSinglePost(match.params.id);
    // eslint-disable-next-line
  }, []);
  if (post === null) return <p>loading...</p>;
  console.log(!!post.comments);
  const comments: Comment[] | undefined = post.comments;
  return (
    <StyledPosts>
      <SinglePost post={post} showButton={false} />
      <Card title="Comments" bordered={false} style={{ width: 500 }}>
        {comments && comments.length > 0
          ? comments.map((comment: Comment) => {
              return <p key={comment.id}>{comment.body}</p>;
            })
          : "No comments yet"}
      </Card>
    </StyledPosts>
  );
};

const mapStateToProps = ({ data }: State) => ({
  data
});

export default connect(
  mapStateToProps,
  { getSinglePost }
)(PostPage);
