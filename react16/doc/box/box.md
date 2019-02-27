###### 容器组件

###### 监控全局滚动容器
<div id="infiniteByWindowSample"></div>

<script type="text/javascript">
ReactDOM.render(React.createElement(InfiniteByWindowSample),document.getElementById('infiniteByWindowSample'));
</script>

```javascript
class InfiniteByWindowSample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      list: []
    }
  }
  componentDidMount () {
    this.loadData()
  }
  loadData () {
    if (!this.state.isLoading && this.state.list.length < 300) {
      this.setState(
        {
          isLoading: true
        },
        () => {
          setTimeout(() => {
            const list = [ ...this.state.list ]
            const len = list.length
            for (let i = list.length; i < len + 100; i++) {
              list.push({
                name: 'zhangsan-' + i
              })
            }
            this.setState(
              {
                list
              },
              () => {
                this.setState({
                  isLoading: false
                })
              }
            )
          }, 2000)
        }
      )
    }
  }
  onScrollToBottom () {
    this.loadData()
  }
  onScrollToTop () {}
  render () {
    const { list, isLoading } = this.state
    return (
      <div className=''>
        <InfiniteByWindow
          className='doc-infinite-win-sample-box'
          loadingTip='加载中.............'
          isLoading={isLoading}
          isTotal={list.length === 300}
          hasData={list.length > 0}
          onScrollToBottom={this.onScrollToBottom.bind(this)}
          onScrollToTop={this.onScrollToTop.bind(this)}>
          <ul className='m-res-act-ul'>
            {list.map((item, index) => {
              return (
                <li className='m-res-act-li' key={index}>
                  {item.name}
                </li>
              )
            })}
          </ul>
        </InfiniteByWindow>
      </div>
    )
  }
```
> InfiniteByWindow 该对象关注全局滚动条
###### 监控容器内滚动容器
<div id="infiniteBoxSample"></div>
<script type="text/javascript">
ReactDOM.render(React.createElement(InfiniteBoxSample),document.getElementById('infiniteBoxSample'));
</script>

```javascript
 class InfiniteBoxSample extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        isLoading: false,
        list: []
      }
    }
    componentDidMount () {
      this.loadData()
    }
    loadData () {
      if (!this.state.isLoading && this.state.list.length < 300) {
        this.setState(
          {
            isLoading: true
          },
          () => {
            setTimeout(() => {
              const list = [ ...this.state.list ]
              const len = list.length
              for (let i = list.length; i < len + 100; i++) {
                list.push({
                  name: 'zhangsan-' + i
                })
              }
              this.setState(
                {
                  list
                },
                () => {
                  this.setState({
                    isLoading: false
                  })
                }
              )
            }, 2000)
          }
        )
      }
    }
    onScrollToBottom () {
      this.loadData()
    }
    onScrollToTop () {}
    render () {
      const { list, isLoading } = this.state
      return (
        <div className=''>
          <InfiniteBox
            className='doc-infinite-sample-box'
            isLoading={isLoading}
            isTotal={list.length === 300}
            hasData={list.length > 0}
            onScrollToBottom={this.onScrollToBottom.bind(this)}
            onScrollToTop={this.onScrollToTop.bind(this)}>
            <ul className='m-res-act-ul'>
              {list.map((item, index) => {
                return (
                  <li className='m-res-act-li' key={index}>
                    {item.name}
                  </li>
                )
              })}
            </ul>
          </InfiniteBox>
        </div>
      )
    }
}
```
> InfiniteBox 该对象关注局部滚动条,需要设置固定高度,注意滚动条出现在哪个dom上
###### 属性
<div class="markdown-grid">

| 名称            |    类型           | 描述                         |默认值
| :--------      | :--------         | :--                         |:--             
| className | String    | 最外层样式名称                | ''
| loadingTip | [String,Element] | 加载中提示   | '正在加载，请稍后...'
| noDataTip | [String,Element] | 没有数据提示   | '暂无数据'
| allDataTip | [String,Element]  | 数据全部加载提示 | '没有更多了'
| isLoading | [Boolean] | 是否在加载中 | 
| hasData | [Boolean] | 是否有数据 | 无
| isTotal | [Boolean] | 是否全部加载 | 无
| onScrollToBottom | [Function] | 滚动到底部回调 | 无
| onScrollToTop | [Function] | 滚动到顶部回调 | 无
| children | [String,Element,Function] | 子类对象 |无
