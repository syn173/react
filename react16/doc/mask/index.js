import Mask from '../../src/app/components/mask'
import React from 'react'
import Markdown from '../markdown/index'
import './index.less'

window.MaskSample = class MaskSample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShow:false
    }
  }
  onSwitch = ()=>{
      this.setState({
        isShow:!this.state.isShow
      })
  }
  render () {
    const { isShow } = this.state;
    return (
      <div className='box-sample'>
         <button onClick= {this.onSwitch}>开关</button> 
         <Mask showMask={isShow} click={this.onSwitch}></Mask>
      </div>
    )
  }
}
class MaskDoc extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return <Markdown name='mask' />
  }
}

export default MaskDoc
