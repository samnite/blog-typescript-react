import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { Card } from "antd";
import styled from "styled-components";
import SinglePost from "./single-post";
import { getSinglePost } from "../store/actions/projects-actions";
import { State } from "../store/store";
import { Comment, RootState } from "../store/reducers/blog-reducer";
import { StyledPosts } from "./posts";
import CommentInput from "./comment-input";
import { StyledSpinner } from "./shared/components";

interface OwnProps {
  getSinglePost: (id: number) => void;
  match: { params: { id: number } };
  data: RootState;
}

type Props = OwnProps;

const StyledPostPage = styled(StyledPosts)`
  margin-top: 25px;
`;

const PostPage: FunctionComponent<Props> = ({
  getSinglePost,
  match,
  data: { post }
}) => {
  useEffect(() => {
    getSinglePost(match.params.id);
    // eslint-disable-next-line
  }, []);
  if (post === null) return <StyledSpinner />;
  console.log(!!post.comments);
  const comments: Comment[] | undefined = post.comments;
  return (
    <StyledPostPage>
      <SinglePost post={post} showButton={false} />
      <CommentInput id={post.id} />
      <Card title="Comments" bordered={false} style={{ width: 500 }}>
        {comments && comments.length > 0
          ? comments.map((comment: Comment) => {
              return <p key={comment.id}>{comment.body}</p>;
            })
          : "No comments yet"}
      </Card>
    </StyledPostPage>
  );
};

const mapStateToProps = ({ data }: State) => ({
  data
});

export default connect(
  mapStateToProps,
  { getSinglePost }
)(PostPage);
