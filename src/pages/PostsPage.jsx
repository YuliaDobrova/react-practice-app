import React, { useContext, useEffect, useState } from 'react';
import { useMedia } from 'react-use';

import { AuthContext } from '../components/context';
import PostService from '../API/PostService';
import PostFilter from '../components/postFilter/PostFilter';
import PostForm from '../components/postForm/PostForm';
import PostList from '../components/postList/PostList';
import MyButton from '../components/shared/button/MyButton';
import Loader from '../components/shared/loader/Loader';
import Modal from '../components/shared/modal/Modal';
import Pagination from '../components/shared/pagination/Pagination';
import MySelect from '../components/shared/select/MySelect';
import useFetching from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/pages';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modalFormActive, setModalFormActive] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  // const limit = 5;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

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

  const isWide = useMedia('(min-width: 768px)');

  const { isAuth } = useContext(AuthContext);

  return (
    <>
      {isAuth ? (
        <div className="PostWrapper">
          {isWide && (
            <>
              <PostForm create={createPost} />
              <hr style={{ margin: 15 }} />{' '}
            </>
          )}
          <PostFilter filter={filter} setFilter={setFilter} />
          <MySelect
            value={limit}
            onChange={value => setLimit(value)}
            defaultValue="Number of posts on a page"
            options={[
              { value: 5, name: '5' },
              { value: 10, name: '10' },
              { value: 20, name: '20' },
              { value: 100, name: 'Show all' },
            ]}
          />
          <hr style={{ margin: 15 }} />
          <MyButton
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            onClick={() => {
              setModalFormActive(true);
            }}
          >
            Add New Post
          </MyButton>
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
          <Pagination
            page={page}
            changePage={changePage}
            totalPages={totalPages}
          />

          <Modal active={modalFormActive} setActive={setModalFormActive}>
            <PostForm create={createPost} />
          </Modal>
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>
          User is NOT autorized. <br /> Go to the API page.
        </p>
      )}
    </>
  );
};

export default Posts;
