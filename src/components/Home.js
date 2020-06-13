import React, { useState } from 'react';

const Data = (props) => {
  const [value,setValue] = useState(0);

  return(
  <div className={"container"}>
    <div>
      COUNTER : {`  ${value}`}
    </div>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <button style={{width:"50px"}} onClick={() => setValue(value+1)}>+</button>
      <button style={{width:"50px"}} onClick={() => setValue(value-1)}>-</button>
    </div>
      <div style={{marginTop:"20px"}}>
        <button onClick={()=> {props.history.push('/time')}}>GO NEXT</button>

      </div>
    </div>
  )
};
export default Data;