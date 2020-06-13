import React,{useState} from 'react';

const Time = (props) => {
  const [currTime, setCurrTime] = useState(new Date());
 
  setTimeout(() => {
    setCurrTime(new Date());
  }, 1000);
  return (
    <div className={"container"}>
      {currTime.toLocaleString()}
      <div style={{marginTop:"20px"}}>
      <button className={"back"} onClick={()=> {props.history.push('/home')}}>GO BACK</button>
      <button onClick={()=> {props.history.push('/data')}}>GO NEXT</button>

      </div>
    </div>
  )
}
export default Time;