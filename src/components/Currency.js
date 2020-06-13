import React from 'react';
import { fetchCurrency } from '../api';


const availCurr = [{ "currency": "XCD", "name": "East Caribbean dollar", "symbol": "$" }, { "currency": "EUR", "name": "European euro", "symbol": "€" },
{ "currency": "GEL", "name": "Georgian lari", "symbol": "₾" }, { "currency": "XCD", "name": "East Caribbean dollar", "symbol": "$" },
{ "currency": "HTG", "name": "Haitian gourde", "symbol": "G" }, { "currency": "INR", "name": "Indian rupee", "symbol": "₹" }, { "currency": "ILS", "name": "Israeli new sheqel", "symbol": "₪" }, { "currency": "KZT", "name": "Kazakhstani tenge", "symbol": "лв" },
{ "currency": "KWD", "name": "Kuwaiti dinar", "symbol": "د.ك" }, { "currency": "LSL", "name": "Lesotho loti", "symbol": "L" },
{ "currency": "USD", "name": "U.S Dollar", "symbol": "$" }];



class Currency extends React.Component {


  state = {
    ans:'',
    from:'',
    amount:'',
    to:''
  }

  async handleClick(e) {
    if(this.state.from === "select" || this.state.to === "to" || !this.state.amount){
      alert('PLEASE MAKE VALID SELECTION');
    }
    else{
      const data = await fetchCurrency(this.state.from, this.state.to);
      this.setState({...this.setState, ans: (parseInt(this.state.amount)*data[Object.keys(data)[0]]).toString()});
    }

  }

  render() {
    return (
      <div className={"container"}style={{ display: "flex", flexDirection: "column" , justifyContent:"space-around", height:"500px"}}>
      CURRENCY CONVERTER
      <div>
        FROM :  
        <select defaultValue={"select"} onChange={(e) => this.setState({...this.state, from:e.target.value})}>
          <option hidden value={"select"}>SELECT</option>
          {availCurr.map((val,i) => (<option key={i} value={val.currency}>{val.name}</option>))}
        </select>
      </div>
      <div>
        TO : 
        <select defaultValue={"select"} onChange={(e) => this.setState({...this.state, to:e.target.value})}>
          <option hidden value={"select"}>SELECT</option>
          {availCurr.map((val,i) => (<option key={i} value={val.currency}>{val.name}</option>))}
        </select>
      </div>
      <div >
        <input type={"number"} min={"0"}  onChange={(e) => this.setState({...this.state, amount:e.target.value})} placeholder="Amount"></input>
      </div>
      <button onClick={() => this.handleClick()}>CONVERT</button>

      <div >
        ANS: {this.state.ans}
      </div>
      <div>
      <button className={"back"} onClick={()=> {this.props.history.push('/data')}}>GO BACK</button>

      </div>
    </div>
    
    )
  }
}

export default Currency;

