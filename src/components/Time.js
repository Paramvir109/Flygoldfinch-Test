import React from 'react';
import store from './../store/MainStore';
import { observer } from "mobx-react";


const Time = observer((props) => {
 
  setTimeout(() => {
    store.updateTime(new Date());
  }, 1000);
  return (
    <div className={"container"}>
      {store.time.toLocaleString()}
      <div style={{marginTop:"20px"}}>
      <button className={"back"} onClick={()=> {props.history.push('/home')}}>GO BACK</button>
      <button onClick={()=> {props.history.push('/data')}}>GO NEXT</button>

      </div>
    </div>
  )
});
export default Time;