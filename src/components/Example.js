import React from 'react';
import { connect } from 'dva'

const Example = ({num,dispatch}) => {
  const add = () => {
    dispatch({
      type:'mycount/add'
    })
  }
  const minus = () => {
    dispatch({
      type:'mycount/minus'
    })
  }
  return (
    <div>
      <p>我是一个无状态函数式组件:来做个计数器把</p>
      <p>{num}</p>
      <button onClick={add} >点击 +1</button>
      <hr/>
      <button onClick={minus} >点击延迟 -1</button>
    </div>
  );
};
Example.propTypes = {

};
const mapStateToprops = (state) => {
  return {
    num: state.mycount.num
  }
}
export default connect(mapStateToprops)(Example);
