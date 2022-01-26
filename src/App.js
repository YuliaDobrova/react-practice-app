import React, { useEffect, useState } from 'react';

import { usePosts } from './hooks/usePosts';
import { getPageCount, getPagesArray } from './utils/pages';
import Header from './components/header/Header';
import Counter from './components/counter/Counter';
import PostForm from './components/postForm/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import PostList from './components/postList/PostList';
import PostPhotoList from './components/postPhotoList';
import Modal from './components/modal/Modal';
import MyButton from './components/shared/button/MyButton';
import AccordionItem from './components/accordionItem/AccordionItem';
import PostService from './API/PostService';
import Loader from './components/shared/loader/Loader';
import useFetching from './hooks/useFetching';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description aaa' },
    { id: 2, title: 'Python', body: 'Description ccc' },
    { id: 3, title: 'PHP', body: 'Description fff' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modalActive, setModalActive] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  // const memoArrayPages = useMemo(() => {
  //   let pagesArray = [];
  //   for (let i = 0; i < totalPages; i++) {
  //     pagesArray.push(i + 1);
  //   }
  //   return pagesArray;
  // }, [totalPages]);
  // console.log(memoArrayPages);
  // CREATE CUSTOM HOOK  usePagination

  let pagesArray = getPagesArray(totalPages);

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
  }, []);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModalActive(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = page => {
    setPage(page);
    fetchPosts(limit, page);
  };

  // useEffect(() => {
  //   fetchPosts();
  // }, [page]);

  // const changePage = page => {
  //   setPage(page);
  // };

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
        <div className="pageWrapper">
          {pagesArray.map(p => (
            <span
              onClick={() => changePage(p)}
              key={p}
              className={page === p ? 'pageBtn current' : 'pageBtn'}
            >
              {p}
            </span>
          ))}
        </div>

        <hr style={{ margin: 15 }} />
        <MyButton
          onClick={() => {
            setModalActive(true);
          }}
        >
          Add New Post
        </MyButton>
        <hr style={{ margin: 15 }} />
        <PostForm create={createPost} setModalActive={setModalActive} />
        <hr style={{ margin: 15 }} />
        <Modal active={modalActive} setActive={setModalActive}>
          <PostForm create={createPost} />
        </Modal>
      </div>
    </>
  );
}

export default App;
