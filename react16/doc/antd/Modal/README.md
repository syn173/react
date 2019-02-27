Modal#
属性	                           说明	                类型	              默认值
prefixCls (web only)	         样式类名前缀	          String	         am-modal
visible	                         对话框是否可见	     Boolean	        false
onClose	                         点击 x 或 mask 回调    (): void	          无
title (only transparent)         标题	                 React.Element	    无
closable	                     是否显示关闭按钮	     Boolean	       false
maskClosable (only transparent)	 点击蒙层是否允许关闭	Boolean	true
footer (only not transparent)	 底部内容	Array {text, onPress}	[]
transparent                      是否弹窗模式	Boolean	false
animationType (rn only)	         可选: 'slide-down/up'(transparent 模式下) / 'fade' / 'slide'(仅非 tranparent)	String	fade
style (web only)	             样式	Object	透明模式下: {width: '286px', height: 'cross'}, 非透明模式: {width: '100%', height: '100%'} (web)
platform (web only)	             设定组件的平台特有样式, 可选值为 android, ios， 默认为 cross， 即组件会自动检测设备 UA 应用不同平台的样式	String	'cross'

Modal.alert(title, message, actions?)#
属性	                             说明	                           类型	                    默认值
title	                           标题	                         String 或 React.Element	  无
message	                           提示信息	                       String 或 React.Element	 无
actions	                           按钮组, {text, onPress, style}	Array	                   无
Modal.alert(title, message, actions?).close()   可以在外部关闭      Alert


Modal.prompt(title, message, callbackOrActions, type?, defaultValue?)#
属性	                            说明	                             类型	                     默认值
title	                          标题	                           String 或 React.Element	无
message	                          提示信息	                         String 或 React.Element	   无
callbackOrActions	              按钮组 {text, onPress} 或回调函数   Array or Function	         无
type	                          prompt 的样式String (default, secure-text, login-password)	default
defaultValue	                  默认值(input 为 password 类型不支持) String	                -
Modal.prompt(title, message, callbackOrActions, type?, defaultValue?).close()` 可以在外部关闭 prompt


Modal.operation(actions?)#

属性	                           说明	             类型	                         默认值
actions	                         按钮组,             {text, onPress, style} Array	无
Modal.operation(actions?).close()` 可以在外部关闭 operation