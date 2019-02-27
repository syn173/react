###### mask 蒙层组件


<div id="maskSample"></div>

<script type="text/javascript">
ReactDOM.render(React.createElement(MaskSample),document.getElementById('maskSample'));
</script>

```javascript
class MaskSample extends React.Component {
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
```


###### 属性

<div class="markdown-grid">

| 名称            |    类型           | 描述                         |默认值
| :--------      | :--------         | :--                         |:--             
| isShow           | Boolean    |控制蒙层显示与隐藏                |无
| preventTouchMove | [Boolean] | 是否禁用默认事件   | false
| click           | [Function]  |蒙层点击事件 | 无
| children | [PropTypes.node] | 子类对象 |无
