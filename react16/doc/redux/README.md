### 注意事项

### container

container中添加connect方法将state和action绑定到props上
```js
App = connect(mapStateToProps, {
  loadIndex
})(App);

// 调用action返回一个promise, 方便接口返回后额外的自定义操作。eg
componentDidMount() {
  this.props.loadIndex().then(({errcode,errmsg,data}) => {});
}
```

### reducer
store管理，只维护一棵树。每个页面维护自己的一个节点，需要进一步细分时可以通过combineReducers进行合并。全局的包括`showLoading`和`showError`,具体见下文

```js
// 新增reducer要添加到app/reducers/index.js中统一管理
// store结构如下
{
    showLoading: 0, //通用， 0隐藏，1显示通用加载图案
    showError: { // 通用，接口返回状态，errcode不为0时toast显示errmsg
        errcode: 0,
        errmsg: ''，
        level: 1 // 1 warning,直接报错给错误页面， 2 提示错误信息， 3 无反应
    },
    index: {}, // 首页state
    classify: {}, // 分类页state
    ...
}
```

### showError 错误信息收拢，提供errcode、errmsg和level(错误等级)
- 一级：（showError.level=1）是否显示loading加载动画，出错直接404页面，并在404页给出错误信息，方便前端查看，不用tip弹层信息（用于主接口、重要接口）
- 二级：（showError.level=2）是否显示loading加载动画，出错给tip弹层提示。（返回的一些状态，但不影响主功能）
- 三级：（showError.level=3）是否显示loading加载动画，出错给不给tip弹层提示。（不是特别重要信息，不影响主功能）

### showLoading 当请求进行时显示加载图案样式
- showLoading = 0， 请求结束，隐藏加载
- showLoading = 1, 通用样式
- showLoading = 2, 不做处理
- 其他，待定，可定义在app/containers/index.js中，或根据需要只加在所在业务页面

### reducer样板

```js
import {types} from 'app/actions/Index/index';
import {SUCCESS, FAILURE, REQUEST} from 'app/middleware/api';

export default function index(state = {
  isFetching: false,
  loaded: false
}, action) {
  switch (action.type) {
    case types[SUCCESS]:
      return {...state,
        isFetching: false,
        loaded: true,
        pageData: action.response.data
      }
    case types[FAILURE]:
      return {...state,
        isFetching: false
      }
    case types[REQUEST]:
      return {...state,
        isFetching: true
      }
    default:
      return state;
  }
}
```

### action 样板

```js
/**
  * 所有请求的异步action要以[CALL_API]为key，普通action直接返回一个js对象即可 
  * 注意，异步action最后返回一个promise
  */
import {CALL_API, generateTypes} from 'app/middleware/api';
export const types = generateTypes('HOME_INDEX'); //生成types数组

function fetchIndex(showLoading) {
  return {
    [CALL_API]: {
      types,
      endpoint: '/api3/index',
      method:'GET', //默认为GET
      level: 2,
      params: {}, //参数json对象，get请求序列化到url上，post请求则加到body,
      options: {}, //fetch自定义option
      showLoading // 页面loading展示
    }
  };
}

export const loadIndex = (cache = false, showLoading = true) => (dispatch, getState) => {
  const {
    index: {
      loaded,
      isFetching
    }
  } = getState();
  if (isFetching || loaded && cache) {
    return null;
  }

  return dispatch(fetchIndex(showLoading));
}
```


