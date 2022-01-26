import React, { useEffect, useState } from 'react';

import { usePosts } from './hooks/usePosts';
import { getPageCount } from './utils/pages';
import Header from './components/header/Header';
import Counter from './components/counter/Counter';
import PostForm from './components/postForm/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import PostList from './components/postList/PostList';
import PostPhotoList from './components/postPhotoList';
import Modal from './components/shared/modal/Modal';
import MyButton from './components/shared/button/MyButton';
import AccordionItem from './components/accordionItem/AccordionItem';
import PostService from './API/PostService';
import Loader from './components/shared/loader/Loader';
import useFetching from './hooks/useFetching';
import Pagination from './components/shared/pagination/Pagination';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modalFormActive, setModalFormActive] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

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
  }, [limit, page]);

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
    <>
      <Header />
      <div className="AppWrapper">
        <Counter />
        <hr style={{ margin: 15 }} />
        <PostPhotoList />
        <hr style={{ margin: 15 }} />
        <AccordionItem
          title="Click the accordion below to expand/collapse the accordion content. "
          description="This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
        />
        <hr style={{ margin: 15 }} />
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
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
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
    </>
  );
}

export default App;
