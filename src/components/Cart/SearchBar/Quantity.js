import React, {useState} from 'react'
import { connect } from 'react-redux';
import { adjustQty, decrementQty, incrementQty } from '../../../redux/actions/actions';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { Card, Paper } from '@material-ui/core';

function Quantity({itemData,adjustQty,incrementQty,decrementQty}) {
    const [input, setInput] = useState(itemData.qty);
    const onChangeQty = (e) => {
      setInput(e.target.value);
      adjustQty(itemData.id, e.target.value);
    };
    const increment = (e)=>{
      setInput(e.target.value);
      incrementQty(itemData.id, e.target.value)
    }
    const decrement = (e)=>{
      setInput(e.target.value);
      decrementQty(itemData.id, e.target.value)
    }
  return (
    <div style={{display : "flex" }}>
<img src="https://cdn-icons-png.flaticon.com/512/1053/1053155.png" alt="plus" style ={{width : 30 ,height: 30}} onClick={increment}/>
<Card  style ={{width : 50 ,height: 30 , display : "flex"}} >{itemData.qty}</Card>
<img src="https://cdn-icons-png.flaticon.com/512/1053/1053167.png" alt="minus" style ={{width : 30 ,height: 30}} onClick={decrement}/>
  </div>    
  )
}
const mapDispatchToProps = (dispatch) => {
    return {
      adjustQty: (id, value) => dispatch(adjustQty(id, value)),
      incrementQty: (id, value) => dispatch(incrementQty(id, value)),
      decrementQty: (id, value) => dispatch(decrementQty(id, value)),

    };
  };
export default connect(null, mapDispatchToProps) (Quantity)