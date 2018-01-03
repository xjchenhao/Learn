// ./src/models/users.js
import { hashHistory } from 'dva/router';
// import { create, remove, update, query } from '../services/users';

import { query } from '../services/users';

export default {
  namespace: 'users',

  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗的显示状态
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'query',
            payload: {},
          });
        }
      });
    },
  },

  effects: {
    *query({ payload }, { select, call, put }) {
      yield put({ type: 'showLoading' });
      const { data } = yield call(query);
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            total: data.page.total,
            current: data.page.current,
          },
        });
      }
    },
    *create() { },
    *delete() { },
    *update() { },
  },
  reducers: {
    showLoading(state, action) {
      return { ...state, loading: true };
    }, // 控制加载状态的 reducer
    showModal() { }, // 控制 Modal 显示状态的 reducer
    hideModal() { },
        // 使用服务器数据返回
    querySuccess(state, action) {
      return { ...state, ...action.payload, loading: false };
    },
    createSuccess() { },
    deleteSuccess() { },
    updateSuccess() { },
  },
};
