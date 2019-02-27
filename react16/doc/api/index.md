# 接口整理
同步到文档 https://docs.qq.com/sheet/DZ1dvVlBsZG5wd0pu?opendocxfrom=admin&tab=v26ot0&tdsourcetag=s_macqq_aiomsg

### shop
```
"/ec/navigation/page/getPreviewPageInfo", // 首页外卖模板预览
"/ec/navigation/page/getHomePageInfo",// 装修首页
"/ec/navigation/goods/getGoodsList",//获取商品列表商品
"/ec/trade/cart/getTotalGoodsNum",//获取购物车数量
"/ec/trade/cart/getUserCart", // 购物车 查询列表
"/ec/navigation/goods/getGoodsSkuInfo", // 获取多规格信息
"/ec/trade/cart/updateCartGoodsSelectedStatus", // 购物车 修改购物车内商品选中状态
"/ec/trade/cart/modifyCartGoodsNum", //购物车 修改购物车商品数量
"/ec/trade/cart/modifyBatchCartGoodsNum", // 购物车 批量修改购物车数量
"/ec/trade/cart/addCartGoods", // 购物车添加商品到购物车
"/ec/trade/cart/deleteCartGoods", //购物车 删除商品
"/ec/trade/cart/updateMemberShipStatus", // 修改商品使用会员情况
"/ec/trade/cart/updateGoodsActivity", // 修改商品参加的活动
"/ec/trade/cart/clearInvalidGoods", // 清空无效商品
"/ec/coupon/core/queryMerchantCouponList", //获取优惠券列表,
"/ec/navigation/goods/getRecommendGoodsList", // 获取推荐商品
"/ec/trade/confirm/initConfirmOrder", // 交易 生成交易单id
"/ec/navigation/navigation/getNavigation",//获取店铺导航
"/ec/coupon/core/querySendCouponList",//发券宝-获取优惠券列表
"/ec/coupon/core/allPickSendCouponCard",//发券宝一键领取
"/ec/mgr/trace/getTraceOriginalUrl",//获取渠道追踪

//store
"/ec/navigation/newsale/getStoreCityCodeList", // 门店选择城市
"/ec/navigation/newsale/getStoreListPageStoreList", // 门店列表
"/ec/navigation/newsale/getStoreListPageBaseInfo", // 门店基本信息
```

### goods
```
"/ec/navigation/goods/getGoodsDetail",//获取商品详情页基础
"/ec/navigation/goods/getGoodsSkuInfo",//获取sku信息
"/ec/navigation/goods/getGoodsDescriptionArea",//获取商品描述
"/recoHotProducts", // 获取推荐商品
"/ec/navigation/goods/getClassifyList",//获取商品列表分类
"/ec/navigation/goods/getGoodsList",//获取商品列表商品
"/ec/navigation/goods/getRecommendGoodsList",//获取推荐商品
"/ec/navigation/navigation/getNavigation",//获取店铺导航
"/ec/mgr/b2cGoods/getShareGoodsImage",//分享商品海报
"/ec/navigation/activity/setDiscountRemind",//设置限时折扣提醒
"/ec/navigation/activity/removeDiscountRemind",//取消提醒
"/ec/user/goodsComments/getGoodsCommentsList", // 获取评论列表
"/ec/user/point/getPointInfo", // 获取用户积分
"/ec/user/core/getUserProfile",//获取菜单状态
"/ec/trade/cart/getTotalGoodsNum",//获取购物车数量
"/ec/navigation/goods/getGoodsLogistics", // 获取物流详细信息
```

### integral
```
"/ec/navigation/goods/getPointGoodsList",//积分商品列表
"/ec/navigation/goods/pointGoodsListShare", // 分享信息
"/ec/navigation/goods/showPointMall",//获取菜单状态
"/ec/user/point/queryPointExchangeOrder", //积分兑换记录
```

### market
```
"/ec/coupon/core/queryCoupon",//获取优惠券详情（优惠券对应商品页）
"/ec/coupon/core/queryCouponGoodsList",//获取优惠券对应商品
"/ec/coupon/core/receiveCoupon",//领取优惠券
"/ec/user/coupon/queryUserCouponDetail",//获取优惠券详情
"/ec/user/coupon/queryCouponDescription",//获取优惠券描述
"/ec/coupon/core/queryMerchantCouponDetail",//获取优惠券模版
"/ec/user/coupon/queryCouponList",//获取用户优惠券列表
"/ec/user/coupon/batchDeleteExpiredCoupon",//清空无效优惠券
"/ec/user/coupon/queryRecommendCouponList",//获取可以领取的优惠券（用户无券）
"/ec/couponcode/core/getCouponCodeTemplate", // 根据优惠码模板id查询优惠码模板信息
"/ec/couponcode/core/getCouponCodeTemplateGoodsList", // 查询优惠码适用商品列表
"/ec/coupon/core/queryMerchantCouponList", // 获取商家优惠券列表
"/ec/navigation/goods/getRecommendGoodsList", // 获取推荐商品列表
"/ec/navigation/activity/getActivityInfo", // 获取活动信息 限时折扣满减满折满包邮n元n件特权价
"/ec/navigation/goods/getActivityGoodsList", // 查询活动商品
"/ec/navigation/activity/setDiscountRemind", // 限时折扣设置消息提醒
"/ec/navigation/activity/removeDiscountRemind", // 限时折扣取消消息提醒
"/ec/navigation/goods/getCombination", // 优惠套装活动商品列表
"/ec/trade/cart/addBatchCartGoods", //批量添加购物车
"/ec/mgr/trace/getTraceOriginalUrl", // 渠道追踪
"/ec/coupon/core/getCardApiSignature",//添加到微信卡包
"/ec/navigation/bookingStore/getBookingStoreActivityInfo",//获取预约活动页面
"/ec/navigation/bookingStore/toShowBookingInfo",//展示预约提交信息
"/ec/navigation/bookingStore/subBookingInfo",//提交预约提交信息
"/ec/navigation/page/getWaterMark",//预约门店详情页分享
```

### order
```
"/ls/address/core/getAreaInfoByLocation", // 地址：定位
"/ec/user/address/deleteDeliveryAddress", // 地址：删除
"/ec/user/address/saveDeliveryAddress",// 地址：保存
"/ec/user/address/saveWechatDeliveryAddress",// 地址：微信保存
"/ec/user/address/getAddressById",// 地址：获取详情
"/ec/user/address/getDeliveryAddressList", // 地址：获取列表
"/ec/user/address/setDefaultDeliveryAddress", // 地址：设置默认
"/ec/trade/order/getOrderFinishInfo", // 获取支付完成

"/ec/user/order/queryOrderList",            // 订单：获取列表
"/ec/user/order/queryOrderDetail",        // 订单：订单详情
"/ec/user/goodsComments/getOrderCommentByOrderNo", // 订单：待评价订单详情
"/ec/user/order/cancelOrder",                // 订单：取消订单
"/ec/user/order/deleteOrder",                // 订单：删除订单
"/ec/user/order/checkOrderRightsStatus",//订单确认收货前检查维权状态，确定文案
"/ec/user/order/finishTrade",           // 订单：确认收货
"/ec/trade/payment/queryPaymentMethodList", // 订单：查询支付列表
"/ec/user/order/queryDeliveryDetail",    // 订单：获取包裹信息
"/ec/logistics/core/queryLogisticsInfo",    // 订单：获取物流信息
"/ec/logistics/core/queryCityLogistics", // 同城配送及时物流
"/ec/logistics/core/queryDeliveryCoordinate", // 查看配送位置
"/ec/navigation/goods/getRecommendGoodsList", // 订单： 获取推荐商品

"/ec/trade/confirm/getConfirmBizInfo",//生成活动交易单号
"/initConfirmOrder", // 交易 生成交易单id
"/ec/trade/confirm/getConfirmOrderResponse",//通过key获取订单信息 -  确认订单页用
"/ec/trade/confirm/updateUserIdCard",//更新身份证号
"/ec/trade/confirm/updateConfirmOrder",//确认订单页 修改订单信息
"/ec/trade/confirm/commitConfirmOrder",//提交订单
"/ec/trade/order/getOrderFinishInfo",//获取订单完成信息

"/ec/user/rights/findRightsOrderList",//获取维权列表
"/ec/user/rights/getRightsOrderDetail",//获取维权详情
"/ec/user/rights/toShowCreateRightsOrder",//获取维权创建页面所需信息
"/ec/user/rights/createRightsOrder",//申请维权
"/ec/logistics/core/queryLogisticsCompany",//获取物流公司列表
"/ec/user/rights/getDeliveryInfo",//获取用户填写的维权单物流信息
"/ec/user/rights/getOpeningBankList",//获取银行列表
"/ec/user/rights/updateRightsDeliveryInfo",//更新维权单物流公司
"/ec/user/rights/getAccountInformation",//获取用户填写的付款方式
"/ec/user/rights/updateRightsAccountInfo",//更新维权单付款方式
"/ec/user/rights/getPaymentMethod",// 获取所有的付款方式
"/ec/user/rights/cancelRightsOrder",//取消维权

"/ec/user/goodsComments/postOrderComment", // 发表评价
"https://api.weimobwmc.com/media/upload", // 上传图片 ol
"https://api.weimobwmc.com/media/video/upload", // 上传视频 ol

// Mention
"/ec/user/selfPickUp/listCities", // 自提城市
"/ec/user/selfPickUp/listSites", // 自提列表
"/ec/user/order/getZitiPosterData", // 自提凭证信息

// 门店
"/ec/trade/confirm/initConsumeConfirmOrder",
"/ec/trade/confirm/updateConsumeConfirmOrder",
"/ec/trade/confirm/commitConsumeConfirmOrder",

"/ec/navigation/goods/getGoodsCoordinate", // 获取地图数据
```

### user
```
"/ec/user/core/getUserProfile",//获取个人信息（个人中心首页）
"/ec/user/core/getUserQrCode", // 获取用户二维码
"/ec/user/membership/queryMembershipInfo",//获取会员基本信息字段
"/ec/user/membership/updateMembershipInfo",//更新会员基本信息
"/ec/membership/card/queryCardFieldsList",//获取会员卡激活字段
"/ec/membership/card/sendPhoneCheckCode",//发送验证码
"/ec/membership/card/bindCard",//绑定会员卡
"/ec/membership/card/queryCardStatus",//获取会员卡详情
"/ec/membership/card/queryMembershipCardDescription",//获取会员卡描述
"/ec/trade/confirm/initRechargeConfirmOrder", // 初始化进入页面
"/ec/trade/confirm/updateRechargeConfirmOrder", // 选择充值金额
"/ec/trade/confirm/commitRechargeOrder", // 充值金额
"/ec/trade/order/getOrderFinishInfo", // 获取充值订单信息
"/ec/user/amount/getAmountInfo", // 查询当前余额、累计收入、累计支出
"/ec/user/amount/listPageAmount", // 查询余额明细列表
"/ec/user/point/getPointInfo", // 查询当前余额、累计收入、累计支出
"/ec/user/amount/listPagePreAsset", // 预发放积分、余额列表
"/ec/user/point/queryPointDetail", // 查询积分明细列表
"/ec/navigation/navigation/getNavigation",//获取店铺导航
"/ec/membership/card/resetMembershipCardExpiry",//重新激活会员卡
"/ec/navigation/goods/showPointMall",//获取菜单状态
"/ec/navigation/bookingStore/getBookingInfoList",   // 我的预约列表&&历史预约列表
"/ec/navigation/bookingStore/getBookingDetailInfo",  // 预约详情
"/ec/navigation/bookingStore/cancelBookingActivity",  //  取消预约
"/ec/coupon/core/queryCardTemplateListByUUID", //获取导购优惠劵列表
"/ec/coupon/core/batchIssueCoupon", //批量领取优惠劵
"/ec/user/guide/myGuider" //我的导购信息
```

### others
```
"/ec/navigation/global/getGlobalSetting",
"/ec/membership/card/sendPhoneCheckCode",
"/ec/navigation/page/explainShortCode",
"/ec/membership/card/sendPhoneCheckCode",
"/ec/navigation/kf/showKFInfo",
"/ec/navigation/page/getWaterMark",
"/ec/navigation/newsale/getUrlWithStoreId",
"/ec/mgr/guide/cacheGuideRelationship"
```



