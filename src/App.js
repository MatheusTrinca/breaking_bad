import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import breakingBad from './api/breakingBad';
import CharactersGrid from './components/character/CharactersGrid';
import Search from './components/ui/Search';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const response = await breakingBad.get(`/characters?name=${query}`);
      setItems(response.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const getQuery = (text) => {
    setQuery(text);
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={getQuery} />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
