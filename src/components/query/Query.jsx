import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Typography, Pagination, TextField, Stack, Link } from '@mui/material';
const BASE_URL = 'http://hn.algolia.com/api/v1/search?';

const Query = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('react');
  const [page, setPage] = useState(1);
  const [pageQuantity, setPageQuantity] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then(({ data }) => {
      console.log(data);
      setPosts(data.hits);
      setPageQuantity(data.nbPages);
      if (data.nbPages < page) {
        setPage(1);
      }
    });
  }, [query, page]);

  return (
    <Container sx={{ marginTop: 5 }} maxWidth="md">
      <Typography style={{marginBottom:15, fontSize: 18}}>Search interesting articles about IT</Typography>
      <TextField
        fullWidth
        label="query"
        value={query}
        onChange={event => {
          setQuery(event.target.value);
        }}
        sx={{ backgroundColor: 'rgba(170, 170, 170, 0.2)' }}
      />
      <Stack spacing={2}>
        {!!pageQuantity && (
          <Pagination
            count={pageQuantity}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            color="primary"
            variant="outlined"
            sx={{ marginY: 3, marginX: 'auto' }}
          />
        )}
        {posts.map(post => (
          <Link key={post.objectID} href={post.url}>
            {post.title || post.story_title}
          </Link>
        ))}
      </Stack>
    </Container>
  );
};

export default Query;
