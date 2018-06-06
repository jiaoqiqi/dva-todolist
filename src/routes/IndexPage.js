import React from 'react';
import {connect} from 'dva';
import {Layout} from 'antd';
import styles from './IndexPage.css';

class IndexPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <Layout className={styles.layout}>
        <h1>TodoList
          <small>( Dva + AntD )</small>
        </h1>
      </Layout>
    );
  }
}

export default connect()(IndexPage);
