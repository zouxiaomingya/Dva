import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Example  from '../../components/Example'

// const url = `http://localhost:3000/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA`
// request(url).then(result=>{
//   console.log(result) 
// })

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Example />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
