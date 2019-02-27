# Name：新云

## 环境
### node-version：>=8.1.4
### yarn-verson: >=1.7.0

## 运行
### 初始化（安装包）
推荐安装yarn
```sh
yarn install
```
### 启动
- 默认qa环境 npm start
- dev环境 npm run start-dev
- qa环境 npm run start-qa
- pl环境 npm run start-pl

### 打包
- dev生成：npm run build-dev
- qa生成：npm run build-qa
- product生成：npm run build-prod

### Mock数据
https://easy-mock.com

## 注意事项
### icon采用阿里的iconfont(http://iconfont.cn)
### 图片需上传cdn
### 组件生命周期componentWillUnmout 清除页面组件的setTimeout setInterval
### 页面路径引用支持`app/`开头
### 复杂页面业务逻辑实现组件模块化
### 涉及门店切换的跳转统一走window.location

## 常用说明

> 1. WechatTitle('页面标题') -页面标题
> 2. react-lazyload - 图片懒加载可用于img与backgroundImage
> 3. 弹性盒子布局 .box - 水平; .vbox - 垂直;
> 4. ".imgCover" 背景图片居中100%添充显示，可以用于div或是<link>上，不要用<img class="imgCover" />在iphone5及以下返回过来，点击图片不显示
> 5. 通用边框0.5像素。.border-top-1px：上，.border-right-1px：右，.border-bottom-1px：下，.border-left-1px：左，.border-around：四周。
> 6. ".arrows"：通用">"箭头
> 7. 图片过滤器:utils/picFilter 四种规格{lg:640,md:360,sm:220,xs:100}
> 8. 页面引用通用Menu
> 9. 父容器, baseContainer 基础容器; geolocation 定位容器

### 打点
#### pv打点
通常pv只需要一个pagename，在容器组件里定义一个pagename的成员变量即可，如果需要额外的信息，写到otherRecForPv上,eg:

```js
componentWillMount() {
  const codeid = this.couponCodeTemplateId = this.props.location.query.id;
  this.otherRecForPv = {
    codeid
  }
  super.componentWillMount();
}
```

`强调补充:` pv在进入页面就会统计，额外信息不接受从请求返回的数据，只能是路径上query参数(或是由参数衍生的值)。

#### 分享打点
- 由接口返回分享信息wechatShare，调用方法`WechatTitle('页面名称', true, wechatShare)`
- 禁用分享页面，只要调用`WechatTitle('页面名称')`
- 如果需要传入额外业务打点，需要第四个选项参数，如商详需要携带goodsid

```
WechatTitle(goods.title || '商品详情', showShareOptions, wechatShare, {
  shareRec: {
    goodsid: goods.id
  }
});
```

#### 自定义打点
```js
window.rprm.rec();
```

### 全局变量
```js
window._global = {
  pid: "", // 商户id
  storeId: "", // 门店id，页面内请求使用
  oriStoreId: "", // 门店id, 页面路由携带
  isStoreId:"", // 请求是否携带storeId
  prefixAPI: "/api3",
  prefix: "saas/retail",
  filePath: "retail.n.weimob.com",
  payPath: "n.pl.weimob.com",
  protocol: "",
  env: "prod", // 运行环境
  theme: "", // 主题色
  colorCustom: {}, // 自定义主题色
  loginErrorType: "", // 非微信登录限制, 555555:不支持非微信打开, 444444:支持非微信h5登录页
  user: // 用户信息
  {
    "wid": 4285852,
    "loginOriginal": "http://n.saas.weimobqa.com/saas/account/1122/login?back=", // h5通用登录页
  },

  newRetailMode: 0, // 解决方案， 0 微商城 1 新零售(单店模式) 2 新零售(多店模式)
  storeInsulateStatus: false, // 门店是否隔离
  haveGuiderStatus: false, // 用户是否有导购
  storeInfo: // 门店信息
  {
    logo: "https://image-c.weimobwmc.com/saas-wxbiz/9d52c8c7f4904d6397ec77fef52fb926.jpg"
    storeName: "微商城-OL"
  },
  ecBizStoreInfo: // 额外门店信息
  {
    pointMall: {
      ecBizStoreId: 26051446
    }
  },
  homeUrl: "", // 门店首页地址
  goodsImgSetting: // 图片模式
  {
    showMode: 2
  }
}

```

## 其他
### [接口请求整理(doc/api/index)](./doc/api/index.md)
`注意：`若有接口调整或增删，请维护这个文档

## 新零售文档汇总

### 项目相关
- [前端文档说明](http://bable.weimob.com/pages/viewpage.action?pageId=14026049)
- [套餐信息整理](http://bable.weimob.com/pages/viewpage.action?pageId=14029475)
- [代码注意事项](http://bable.weimob.com/pages/viewpage.action?pageId=14045490)
- [项目开发流程](http://bable.weimob.com/pages/viewpage.action?pageId=14045246)
- [团队人员信息](http://bable.weimob.com/pages/viewpage.action?pageId=13355379)

### 业务相关
- [门店推荐流程](http://bable.weimob.com/pages/viewpage.action?pageId=14049827)
- [页面路径整理](http://bable.weimob.com/pages/viewpage.action?pageId=14026139)

## 目录说明
#### config 文件夹 - 项目配置开发、环境、服务、打包。
#### doc 文件夹 - 功能模块开发设计说明文档。便于团队开发与维护
#### public 文件夹 - 主html文件及icon
#### script 文件夹 - 项目运行、项目维护、

#### src 文件夹主要开发目录
##### app开发文件
###### 1.antd 公用的弹层，弹框,antd组件功能  说明文档doc/antd/README.md
###### 2.utils 系统类组件(例Request - 请求)引用方式:import {Request,Cookie,WechatTitle,LocalStorage} from 'app/utils';
###### 3.components 木偶组件－公用组件（超过三处地方使用）
###### 4.containers 智能组件－具体页面内容
###### 5.widget 装修组件
###### 6.actions redux任务分发
###### 7.reducers reudx状态管理
###### 8 middleware redux异步请求中间件，采用redux-thunk

##### assets 图片（按目录建）、字体
##### router/routeMap.jsx 路由
##### index.css 公用css
##### 文件夹目录说明(图片相同)
###### 1.Index　首页
###### 2.Base　详情、购物车、列表、分类
###### 3.Activity　活动专题、促销、满包邮活动、优惠券等系统类活动
###### 4.Store　多门店、外卖
###### 5.Order	结算页、新增地址、管理地址、其他结算页
###### 6.OrderDetail 订单完成、订单详情、订单列表、维权、评价
###### 7.Member　用户中心
###### 8.widget 首页用户组件
###### 9.Error 页面出错信息

## Git注意事项
### 用户名设置为自己名字
### 提交commit写清楚该次提交内容
### 每个功能尽量都新建分支修改，合并到master的分支不要继续使用
### 获取代码时候加参数 --rebase, eg: `git pull -r`，network上同一个分支除了merge外保证是一条线
### 合并代码时候加参数 --no-ff, eg: `git merge branchname --no-ff`，生个merge的提交记录，如果有冲突，要有冲突文件的记录(git本身支持的，不需要干涉)
> 不同IDE都有支持方式，若上述不是默认项请自行调整

### qa环境都要合到qa分支，用该分支发布；每次上线会新建master-xxxx的分支。


