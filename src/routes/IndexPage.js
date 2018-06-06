import React from 'react';
import {connect} from 'dva';
import {Layout, Button, Input, List, Checkbox} from 'antd';
import styles from './IndexPage.css';

const {Content} = Layout;

class IndexPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.dispatch = props.dispatch;
    this.state={
      item : "",
    }
  }

  render() {
    const props = this.props;
    return (
      <Layout className={styles.layout}>
        <h1>TodoList
          <small>( Dva + AntD )</small>
        </h1>
        <Content>
          <Input placeholder="請輸入待辦事項"
                 input={this.state.item}
                 onChange={(e)=>{
                   this.setState({item:e.target.value});
                 }}
          />
          <Button type="primary" icon="plus"
                  onClick={ ()=>{
                    props.dispatch({type:"example/add",item:{name:this.state.item,status:false}})
                    this.setState({item:""})
                  }}
          >新增</Button>

          <List
            className={styles.list}
            bordered
            dataSource={props.list}
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

function mapStateToProps(state) {
  return {
    list: state.example.list,
    // example： example.js 的 namespace
  };
}

export default connect(mapStateToProps)(IndexPage);
