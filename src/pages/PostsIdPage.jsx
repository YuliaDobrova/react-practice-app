import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostService from '../API/PostService';
import Loader from '../components/shared/loader/Loader';
import useFetching from '../hooks/useFetching';

const PostsIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async id => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
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
        </div>
      )}
    </>
  );
};

export default PostsIdPage;
