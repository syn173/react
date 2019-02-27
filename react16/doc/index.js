import React from 'react'
import ReactDOM from 'react-dom'
import Mask from './mask'
import Box from './box'
import './index.less'
const list = [ { label: 'MaskDoc', component: Mask }  ,
{ label: 'BoxDoc', component: Box }   ]
class IndexDoc extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedKey: list.length,
      component: list[list.length - 1]['component']
    }
  }
  buildNav () {
    const array = []
    for (let i = 0; i < list.length; i++) {
      const { label } = list[i]
      let css = ''
      if (this.state.selectedKey === i + 1) {
        css = 'selected'
      }
      array.push(
        <li className={css} key={i} onClick={this.onSelect.bind(this, i + 1)}>
          {label}
        </li>
      )
    }
    return array
  }
  onSelect (itemid) {
    const component = list[itemid - 1]['component']
    this.setState({ component: component, selectedKey: itemid })
  }
  render () {
    return (
      <div className='saas-doc'>
        <div className='saas-doc-nav'>
          <p className='nav-title'>新零售组件</p>
          <ul>{this.buildNav()}</ul>
        </div>
        <div className='saas-doc-content'>{React.createElement(this.state.component)}</div>
      </div>
    )
  }
}
window.React = React
window.ReactDOM = ReactDOM

ReactDOM.render(React.createElement(IndexDoc), document.getElementById('container'))
