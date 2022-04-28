import React from 'react';
import { StoreContext } from '../main'
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

function SearchBar(props) {
  const store = useContext(StoreContext)

  return (
    <input type="text" placeholder={props.placeholder} onChange={e => store.setQuery(e.target.value.toLowerCase())} />
  );
}

export default observer(SearchBar);