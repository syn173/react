Name：antd
version：v1.0.0
node-version：v8.1.4

引用方式：
1.单模块：import { Popup } from 'app/antd';
2.多模块：import { Popup,Modal } from 'app/antd';

demo
http://localhost:3000/antd

说明：
此文件以为弹层公用组件层，如果产品中超过两处使用通用的组件，就要在些封装成组件,方便大家使用。
ps:为什么不直接用antd-mobile? 
1.文件太大，关联文件过多;
2.风格不同，很多文件(img,svg,form等)用不到;
3.好多功能我们得自己再修改一下，直接修改node_module会很麻烦，而且容易出问题,例如Toast.info需要支持html标签;
4.我们需要自己风格的组件;

使用与注意事项 - 此处列表出主要的api 详细请参考其他antd下文件夹的说明文档
1).style - antd多处通用的样式与图片
    1.antd的组件的样式与图片位置
    2.样式为：antd/style/index.less
    3.图片路径为：antd/style/imgs

2).Toast - 轻提示弹层 - 默认显示时间为3s,可以修改显示时间
    用途：一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。
    用法：Toast.loading(content, duration, onClose, mask)
    1.Toast.info - 不带图片的轻提示 支持换行-“<br />”
    2.Toast.success - 带图片的成功提示
    3.Toast.fail - 带图片的失败提示
    4.Toast.offline - 带图片的网络异常
    5.Toast.loading - 带图片的页面加载loading动画
    6.onClose - 关闭后回调
    7.Toast.hide() - 全局配置和全局销毁方法

3).Popup - 底部弹层 - 底部浮出的模态框
    用途：从顶部或底部浮出的模态框
    1.Popup.show() - 弹层显示区域,里面是<html>
    2.Popup.hide() - 弹层关闭
    3.".popup-area" - 弹层滚动区域，已经写有最大显示高度与最小高度，以及iphone4的显大显示高度，提高了ios上的滚动体验：-webkit-overflow-scrolling : touch;
    4.".popup_close" - 弹层关闭图标 "×" 位置在右上角
    5.animationType (string) - 可选 slide-down (默认)、slide-up 弹出动画类型
    6.transitionName (string) (web only) 自定义显示隐藏变换动画
    7.maskTransitionName (string) (web only) 自定义遮罩层变换动画
    8.onMaskClose (function) 遮罩层关闭时的回调，支持返回 Promise
    9.maskClosable (bool) - 点击蒙层是否允许关闭，默认允许
 
 4).Modal 对话框 - 类似与alert 与 comfirm
    用途：用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。
    1.<Modal></Modal> - 基本对话框       
    2.Modal.alert - 警告弹窗 
    3.Modal.operation - 操作弹窗

 