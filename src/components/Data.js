import React,{useState,useEffect} from 'react';
import {fetchNames} from '../api';

const Data = (props) => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchNames();
      setNames(data);
    }
  fetchAPI();
  },[]);
  if(!names[0]){
    return (<h4>Loading..</h4>)
  }
  return (
    <div className={"container"}>
      Nameslist
      <ul className="namesList">
        {names.map((value,i) => (<li key={i}>{value.first}  {value.last}</li>))}
      </ul>
      <div style={{marginTop:"20px"}}>
      <button className={"back"} onClick={()=> {props.history.push('/time')}}>GO BACK</button>
      <button onClick={()=> {props.history.push('/currency')}}>GO NEXT</button>

      </div>
    </div>
  )
}
export default Data;