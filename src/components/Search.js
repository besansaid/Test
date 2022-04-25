import React from 'react';
import { Component } from 'react';

class Search extends Component {
  render(){
    return (
        <form>
        <input type="search" placeholder="Search..."/>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;