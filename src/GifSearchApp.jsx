import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifSearchApp = () => {
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gif Search App</h1>
      <AddCategory
        onNewCategory={(value) => {
          onAddCategory(value);
        }}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Listado resultados anteriores */}
    </>
  );
};

export default GifSearchApp;
