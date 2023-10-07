import React from 'react';

export default function Searchbar({ handleSubmitForm }) {
  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmitForm} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
