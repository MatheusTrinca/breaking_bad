import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  return (
    <section className="search">
      <form>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            getQuery(text);
          }}
          autoFocus
          type="text"
          className="form-control"
        />
      </form>
    </section>
  );
};

export default Search;
