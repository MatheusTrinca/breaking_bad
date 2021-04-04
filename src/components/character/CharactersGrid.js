import React from 'react';
import Character from './Character';
import Spinner from '../ui/Spinner';

const CharactersGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <Character key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharactersGrid;
