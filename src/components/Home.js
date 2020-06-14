import React, { useState } from 'react';
import { observer } from "mobx-react";
import store from './../store/MainStore';

const Data = observer((props) => {

  return(
  <div className={"container"}>
    <div>
      COUNTER : {`  ${store.counter}`}
    </div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <button style={{width:"50px"}} onClick={() => store.addCounter()}>+</button>
      <button style={{width:"50px"}} onClick={() => store.subCounter()}>-</button>
    </div>
      <div style={{marginTop:"20px"}}>
        <button onClick={()=> {props.history.push('/time')}}>GO NEXT</button>

      </div>
    </div>
  )
});
export default Data;