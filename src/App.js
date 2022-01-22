import React, { useState, useMemo } from 'react';

import Header from './components/header/Header';
import Counter from './components/counter/Counter';
import PostForm from './components/postForm/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import PostList from './components/postList/PostList';
import './App.css';
import Modal from './components/modal/Modal';
import MyButton from './components/shared/button/MyButton';
import AccordionItem from './components/accordionItem/AccordionItem';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description aaa' },
    { id: 2, title: 'Python', body: 'Description ccc' },
    { id: 3, title: 'PHP', body: 'Description fff' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');
  const [modalActive, setModalActive] = useState(false);

  const sortedPosts = useMemo(() => {
    // console.log('Sorted Posts function');
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]),
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(filter.query),
    );
  }, [filter.query, sortedPosts]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <>
      <Header />
      <div className="AppWrapper">
        <Counter />
        <hr style={{ margin: 15 }} />
        <PostForm create={createPost} setModalActive={setModalActive} />

        <hr style={{ margin: 15 }} />
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Post List"
        />
        <MyButton
          onClick={() => {
            setModalActive(true);
          }}
        >
          Add New Post
        </MyButton>
        <hr style={{ margin: 15 }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <hr style={{ margin: 15 }} />
        <AccordionItem
          title="Click the accordion below to expand/collapse the accordion content. "
          description="This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
        />
        <hr style={{ margin: 15 }} />
        <Modal active={modalActive} setActive={setModalActive}>
          <PostForm create={createPost} />
        </Modal>
      </div>
    </>
  );
}

export default App;
