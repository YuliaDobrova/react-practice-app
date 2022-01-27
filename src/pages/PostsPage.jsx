import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/postFilter/PostFilter';
import PostForm from '../components/postForm/PostForm';
import PostList from '../components/postList/PostList';
import MyButton from '../components/shared/button/MyButton';
import Loader from '../components/shared/loader/Loader';
import Modal from '../components/shared/modal/Modal';
import Pagination from '../components/shared/pagination/Pagination';
import useFetching from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/pages';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modalFormActive, setModalFormActive] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(10);
  const limit = 10;

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    },
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModalFormActive(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = page => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="PostWrapper">
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr style={{ margin: 15 }} />
      {postError && <h1>Error:${postError}</h1>}
      {isPostsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Post List"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      <hr style={{ margin: 15 }} />
      <MyButton
        onClick={() => {
          setModalFormActive(true);
        }}
      >
        Add New Post
      </MyButton>
      <hr style={{ margin: 15 }} />
      <PostForm create={createPost} />

      <Modal active={modalFormActive} setActive={setModalFormActive}>
        <PostForm create={createPost} />
      </Modal>
    </div>
  );
};

export default Posts;
