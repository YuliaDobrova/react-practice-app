import React from 'react';
import MyInput from '../shared/input/MyInput';
import MySelect from '../shared/select/MySelect';
import './PostFilter.css';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className="post__filter">
      <MyInput
        className="post__filter__query"
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <MySelect
        className="post__filter__select"
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Sorted"
        options={[
          { value: 'title', name: 'by name' },
          { value: 'body', name: 'by description' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
