
## 活动类型
- 1 满减满折
- 2 满包邮
- 3 限时折扣
- 10 特权价
- 12 N元N件
- 20 限量抢购

## 满减满折、满包邮、N元N件、特权价、限时折扣、限量抢购
activityGoodsStatus
活动商品状态 (0:正常, 1:已售罄, 2:已抢光)

## 满减满折、满包邮、N元N件
#### 价格展示
- minSalePrice minOriginalPrice

## 限时折扣
#### 价格展示
- 价格 minActivityPrice
- 划线价 minSalePrice（when goods.minSalePrice > goods.minActivityPrice)

#### 剩余件数
availableActivityNum

#### 剩余比例
goods.availableActivityNum / goods.activityStockNum * 100

#### button行为
`活动已开始`
- goods.availableActivityNum <= 0 ? '原价购买' : '立即抢购'

`活动未开始`
- 未开启提醒 !goods.discountRemindInfoVo.remindSwitch '加入购物车'

- 开启提醒 goods.discountRemindInfoVo.remindSwitch

- goods.discountRemindInfoVo.remindStatus?'取消提醒':'提醒我'

- goods.discountRemindInfoVo.subscribeNum  预约人数

## 限量抢购(逻辑同限时折扣，区别如下)
#### button行为
`活动已开始`
- goods.availableActivityNum === 0 || (goods.limitStatus && goods.availableBuyNum === 0)) ?  '立即抢购' : '原价购买'

`活动未开始`
- 未开启提醒 !goods.discountRemindInfoVo.remindSwitch 不展示button

## 特权价
#### 价格展示
- 价格 minActivityPrice
- 划线价 minSalePrice（ when goods.minSalePrice > goods.minActivityPrice ）

#### button行为

```js
if (availableStockNum === 0) {
  // 立即购买，置灰，不可点击
} else if ('活动未开始' || !goods.haveActivityPrice || goods.availableActivityNum === 0 || (goods.limitStatus && goods.availableBuyNum) {
  // 原价购买
} else {
  // 立即购买
}
```


```js
// sku依赖字段
skuData = {
  activityId,
  activityType,
  isMultiSku,
  goodsPromotionType,
  availableStockNum,
  id,
  availableActivityNum,
  limitStatus,
  availableBuyNum,
  minActivityPrice,
  maxActivityPrice
}
```

## 备注
- 仅限时折扣、限量抢购有活动库存概念


## 补充(重构思路，所有逻辑放在后端，前端只做展示，返回商品字段如下,仅供参考)(2018.07.28)
```
{
  showPrice: '',
  underlinePrice: '',
  availableActivityNum: '', // 活动可售数量 仅限限时折扣
  activityStockNum: '', // 活动库存
  buyStatus: '', /*购买button行为 {
    原价购买
    立即抢购1（置灰不可点击，现在只在特权价上有这个逻辑， 当availableStockNum === 0）
    立即抢购2 （活动价购买）
  }*/
  discountRemindInfo: { /*限时折扣开启提醒且活动未开始, 此时忽略上面buyStatus，否则，返回null*/
    remindStatus: '', // remindStatus?'取消提醒':'提醒我'
    subscribeNum: '' // 预约人数
  }
  showAddcart: '', /*加入购物车button {
    满减满折 包邮 n 有
    限时折扣 活动未开始提醒-未开启提醒-加入购物车
    特权价 无
  }*/
}
```