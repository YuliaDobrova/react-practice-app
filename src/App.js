import React, { useState, useMemo } from 'react';

import Header from './components/header/Header';
import Counter from './components/counter/Counter';
import PostForm from './components/postForm/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import PostList from './components/postList/PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description aaa' },
    { id: 2, title: 'Python', body: 'Description ccc' },
    { id: 3, title: 'PHP', body: 'Description fff' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

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
        <hr style={{ margin: '15px, 0' }} />
        <PostForm create={createPost} />
        <hr style={{ margin: '15px, 0' }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        {/* Условная отрисовка */}
        {sortedAndSearchedPosts.length ? (
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="Post List"
          />
        ) : (
          <div className="PostsNotFound">Posts not found</div>
        )}
      </div>
    </>
  );
}

export default App;
