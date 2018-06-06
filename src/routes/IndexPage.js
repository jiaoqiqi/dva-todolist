import React from 'react';
import {connect} from 'dva';
import {Layout, Button, Input, List, Checkbox} from 'antd';
import styles from './IndexPage.css';

const {Content} = Layout;

class IndexPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      list: [
        {
          name: '買醬油',
          status: true
        }, {
          name: '背單字',
          status: false
        }, {
          name: '打咚咚',
          status: true
        }
      ]
    }
  }

  render() {

    return (
      <Layout className={styles.layout}>
        <h1>TodoList
          <small>( Dva + AntD )</small>
        </h1>
        <Content>
          <Input placeholder="請輸入待辦事項"/>
          <Button type="primary" icon="plus">新增</Button>

          <List
            className={styles.list}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item>
                <Checkbox
                  className={(item.status ? styles.check : ' l')}
                  checked={item.status}
                >{item.name}</Checkbox>
                <Button
                  className={styles.btndel}
                  type="danger"
                  size="small"
                  shape="circle"
                  icon="cross" />
              </List.Item>
            )} />

        </Content>
      </Layout>
    );
  }
}

export default connect()(IndexPage);
