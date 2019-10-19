export default {
  orderDetail: {},
  // 订单列表
  orderList: [
    {
      id: 1,
      orderId: 32,  // 订单id
      tableNumber: 1,  // 桌号
      isTakeOut: false, // 是否是外卖： true 是， false 不是
      orderTime: '2019-10-11 12:00', // 下单时间
      status: 1, // 订单状态：1 订单确认 => 2 正在备餐 => 3 正在出餐 => 4 出餐完毕 => （5 正在送餐 =>）6 已完成 => 7 已取消
      mealNumber: 5,  //排队餐号
      orderDishs: [  // 订单点的菜
        {
          dishName: '红烧肉'
        },
        {
          dishName: '排骨蒸鸭'
        },
        {
          dishName: '鱼香肉丝'
        },
        {
          dishName: '干煸四季豆'
        }
      ],
      orderAmount: '150.00',  // 订单金额
      isPayment: false,  // 是否付款：true 已付，false 未付
    },
    {
      id: 2,
      orderId: 33,
      tableNumber: 2,  // 桌号
      isTakeOut: false, // 是否是外卖： true 是， false 不是
      orderTime: '2019-11-11 12:00', // 下单时间
      status: 2, // 订单状态：1 订单确认 => 2 正在备餐 => 3 正在出餐 => 4 出餐完毕 => （5 正在送餐 =>）6 已完成 => 7 已取消
      mealNumber: 6,  //排队餐号
      orderDishs: [  // 订单点的菜
        {
          dishName: '金牌牛肉饼'
        },
        {
          dishName: '日式脆骨面'
        },
        {
          dishName: '招牌江西米粉'
        },
        {
          dishName: '干煸四季豆'
        }
      ],
      orderAmount: '150.00',  // 订单金额
      isPayment: true,  // 是否付款
    },
    {
      id: 3,
      orderId: 34,
      tableNumber: 3,  // 桌号
      isTakeOut: false, // 是否是外卖： true 是， false 不是
      orderTime: '2019-10-11 12:00', // 下单时间
      status: 3, // 订单状态：1 订单确认 => 2 正在备餐 => 3 正在出餐 => 4 出餐完毕 => （5 正在送餐 =>）6 已完成 => 7 已取消
      mealNumber: 6,  //排队餐号
      orderDishs: [  // 订单点的菜
        {
          dishName: '金牌叉烧饭'
        },
        {
          dishName: '辣椒炒肉'
        },
        {
          dishName: '鱼香肉丝'
        },
        {
          dishName: '干煸四季豆'
        }
      ],
      orderAmount: '180.00',  // 订单金额
      isPayment: true,  // 是否付款
    },
    {
      id: 4,
      orderId: 35,
      tableNumber: 4,  // 桌号
      isTakeOut: false, // 是否是外卖： true 是， false 不是
      orderTime: '2019-10-11 12:00', // 下单时间
      status: 4, // 订单状态：1 订单确认 => 2 正在备餐 => 3 正在出餐 => 4 出餐完毕 => （5 正在送餐 =>）6 已完成 => 7 已取消
      mealNumber: 9,  //排队餐号
      orderDishs: [  // 订单点的菜
        {
          dishName: '蒜香鸡汁块'
        },
        {
          dishName: '排骨蒸鸭'
        }
      ],
      orderAmount: '1250.00',  // 订单金额
      isPayment: false,  // 是否付款
    },
    {
      id: 5,
      orderId: 41,
      tableNumber: 5,  // 桌号
      isTakeOut: false, // 是否是外卖： true 是， false 不是
      orderTime: '2018-10-11 12:00', // 下单时间
      status: 5, // 订单状态：1 订单确认 => 2 正在备餐 => 3 正在出餐 => 4 出餐完毕 => （5 正在送餐 =>）6 已完成 => 7 已取消
      mealNumber: 10,  //排队餐号
      orderDishs: [  // 订单点的菜
        {
          dishName: '武汉热干面'
        }
      ],
      orderAmount: '1550.00',  // 订单金额
      isPayment: false,  // 是否付款
    },
    {
      id: 6,
      orderId: 12,
      tableNumber: 6,  // 桌号
      isTakeOut: false, // 是否是外卖： true 是， false 不是
      orderTime: '2019-10-11 12:00', // 下单时间
      status: 6, // 订单状态：1 订单确认 => 2 正在备餐 => 3 正在出餐 => 4 出餐完毕 => （5 正在送餐 =>）6 已完成 => 7 已取消
      mealNumber: 14,  //排队餐号
      orderDishs: [  // 订单点的菜
        {
          dishName: '红烧肉'
        }
      ],
      orderAmount: '1510.00',  // 订单金额
      isPayment: false,  // 是否付款
    },
    {
      id: 7,
      orderId: 15,
      tableNumber: 7,  // 桌号
      isTakeOut: false, // 是否是外卖： true 是， false 不是
      orderTime: '2019-10-12 12:00', // 下单时间
      status: 7, // 订单状态：1 订单确认 => 2 正在备餐 => 3 正在出餐 => 4 出餐完毕 => （5 正在送餐 =>）6 已完成 => 7 已取消
      mealNumber: 51,  //排队餐号
      orderDishs: [  // 订单点的菜
        {
          dishName: '红烧肉'
        },
        {
          dishName: '排骨蒸鸭'
        },
        {
          dishName: '鱼香肉丝'
        },
        {
          dishName: '干煸四季豆'
        }
      ],
      orderAmount: '1580.00',  // 订单金额
      isPayment: true,  // 是否付款
    }
  ]
}