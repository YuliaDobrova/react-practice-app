import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Container,
  Typography,
  Pagination,
  TextField,
  Stack,
  Link,
} from '@mui/material';
import './Query.css';
const BASE_URL = 'https://hn.algolia.com/api/v1/search?';

const useStyles = makeStyles(() => ({
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    backgroundColor: 'rgba(170, 170, 170, 0.2)',
    color: '#ffffff',
    borderRadius: 4,
  },
  input: {
    color: '#ffffff',
  },
}));

const Query = () => {
  const classes = useStyles();
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
      <div className="query-container">
        <Typography
          className="query-typography"
          style={{
            marginBottom: 15,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#61dafb',
            textAlign: 'center',
          }}
        >
          Search interesting articles about TECH
        </Typography>
        <div
          sx={{ backgroundColor: 'rgba(170, 170, 170, 0.2)', color: '#61dafb' }}
        >
          <TextField
            className={classes.textField}
            fullWidth
            label="query"
            value={query}
            onChange={event => {
              setQuery(event.target.value);
            }}
            sx={{ color: '#61dafb' }}
          />
        </div>
        <Stack spacing={2}>
          {!!pageQuantity && (
            <Pagination
              className={classes.pagination}
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
              <div style={{ fontSize: 18, color: '#61dafb' }}>
                <span>•</span> {post.title || post.story_title}
              </div>
            </Link>
          ))}
        </Stack>
      </div>
    </Container>
  );
};

export default Query;
