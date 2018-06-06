import _ from 'lodash';

export default {

  namespace: 'example',

  state: {
    list: [{
      name: '買醬油',
      status: true,
    },
      {
        name: '背單字',
        status: false,
      },
      {
        name: '打咚咚',
        status: true,
      },
    ],
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },
  //
  // effects: {
  //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
  //     yield put({ type: 'save' });
  //   },
  // },
  //
  // reducers: {
  //   save(state, action) {
  //     return { ...state, ...action.payload };
  //   },
  // },
  reducers : {
    add(state,{item}){
      return{
        ...state,
        list : _.concat(state.list,[item]),
      }
    }
  }

};
