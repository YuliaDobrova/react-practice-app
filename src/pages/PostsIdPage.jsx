import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostService from '../API/PostService';
import Loader from '../components/shared/loader/Loader';
import useFetching from '../hooks/useFetching';

const PostsIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading] = useFetching(async id => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isCommentLoading] = useFetching(async id => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p style={{ textAlign: 'end', fontSize: 14 }}>
        (Info from post with ID = {params.id})
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div style={{ textAlign: 'center', fontSize: 24 }}>
            {params.id}. Title: {post.title}
          </div>
          <div style={{ textAlign: 'center', fontSize: 18 }}>{post.body}</div>
          <h2>Comments</h2>
          {isCommentLoading ? (
            <Loader />
          ) : (
            <div>
              {comments.map(comment => (
                <div key={comment.id} style={{ marginTop: 20 }}>
                  <h4 style={{ marginLeft: 25 }}>➡ {comment.email}</h4>
                  <p>{comment.body}.</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PostsIdPage;
