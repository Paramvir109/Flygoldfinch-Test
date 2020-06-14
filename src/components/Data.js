import React,{useState,useEffect} from 'react';
import {fetchNames} from '../api';
import store from './../store/MainStore';
import { observer } from "mobx-react";

const Data = observer((props) => {
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchNames();
      store.setNames(data);
    }
  fetchAPI();
  },[]);
  if(!store.names[0]){
    return (<h4>Loading..</h4>)
  }
  return (
    <div className={"container"}>
      NAME LIST
      <ul className="namesList">
        {store.names.map((value,i) => (<li key={i}>{value.first}  {value.last}</li>))}
      </ul>
      <div style={{marginTop:"20px"}}>
      <button className={"back"} onClick={()=> {props.history.push('/time')}}>GO BACK</button>
      <button onClick={()=> {props.history.push('/currency')}}>GO NEXT</button>

      </div>
    </div>
  )
});
export default Data;