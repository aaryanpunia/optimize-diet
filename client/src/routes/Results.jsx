import React from 'react';
import { StoreContext } from '../main'
import { useContext } from 'react';
import GenericResult from '../components/GenericResult';
import SearchBar from '../components/SearchBar';
import GenericCard from '../components/GenericCard';
import GenericButton from '../components/GenericButton';
import "../static/css/Results.css";
import bg from "../static/images/tableDining.svg"

function Results(props) {
  const store = useContext(StoreContext);
  return (
    <>
      <div className="SearchBar">
        <GenericCard
          text={
            <SearchBar placeholder={store.query} />
          }
          style={{ width: '16.4em' }}
        />
        <GenericButton text={'GO'} pathto={'./'} />
      </div>
      <GenericResult data={["aaryan", "punia", "pun"]} />
      <img className="ResultsBg" src={bg}></img>
    </>
  );
}

export default Results;