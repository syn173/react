import InfiniteBox, { InfiniteByWindow } from '../../src/app/components/box/infiniteBox'
import React from 'react'
import Markdown from '../markdown/index'
import './index.less'

window.InfiniteByWindowSample = class InfiniteByWindowSample extends React.Component {
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
            allDataTip={<div><p>别加载了</p><p>没数据鸟</p></div>}
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
}

window.InfiniteBoxSample = class InfiniteBoxSample extends React.Component {
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

class BoxDoc extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return <Markdown name='box' />
  }
}




export default BoxDoc
