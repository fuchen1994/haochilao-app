export default {
  // 菜品详情
  dishDetail: [
    {
      id: 1,
      dishImages: [
        require('@/assets/bg/bg-07.jpg'),
        require('@/assets/bg/bg-08.jpg'),
        require('@/assets/bg/bg-09.jpg')
      ],
      dishName: '香干肉丝饭',
      dishPrice: '20.00',
      praiseDegree: 5, // 好评度
      markName: '本月新品', // 标签名字
      orderedCount: 5, // 已点数量
      isSpicy: true, // 是否是辣的
      monthSaleCount: 150, // 月销售数量
      originPrice: '30.22', // 原价
      discountsCount: 1, // 每单优惠的数量
      foodMaterial: '香干，猪肉', // 食物原料
      lovers: 20, // 喜欢的人数
      isLove: false, // 是否喜欢
      taste: '偏辣', // 口味
      isSellOut: false, // 是否卖完
    }
  ],
  // 菜品列表
  dishList: [
    {
      title: '店家推荐',
      bannerList: [
        {
          dishName: '麻婆豆腐',
          dishImgUrl: require('@/assets/bg/bg-01.jpg'),
          dishPrice: '12.00',
          praiseDegree: 2
        },
        {
          dishName: '辣椒炒肉',
          dishImgUrl: require('@/assets/bg/bg-10.jpg'),
          dishPrice: '15.00',
          praiseDegree: 1
        },
        {
          dishName: '金牌叉烧饭',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '11.00',
          praiseDegree: 3
        },
        {
          dishName: '蒜香鸡汁块',
          dishImgUrl: require('@/assets/bg/bg-05.jpg'),
          dishPrice: '14.00',
          praiseDegree: 5
        },
      ],
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00',
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '金牌牛肉饼',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 1, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
    {
      title: '精选套餐',
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '金牌牛肉饼',
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 1, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
    {
      title: '爽口凉菜',
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '金牌牛肉饼',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 1, // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
    {
      title: '面食',
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '金牌牛肉饼',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 1, // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
    {
      title: '米粉',
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '金牌牛肉饼',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 1, // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
    {
      title: '烧烤类',
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '金牌牛肉饼',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 1, // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
    {
      title: '农家小炒',
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '金牌牛肉饼',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 1, // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
    {
      title: '素菜',
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '金牌牛肉饼',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 1, // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
    {
      title: '汤类',
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '金牌牛肉饼',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 1, // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
    {
      title: '配菜',
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '金牌牛肉饼',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 1, // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
    {
      title: '饭后点心',
      dishs: [
        {
          dishId: 1,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          dishId: 2,
          markName: '本月新品', // 标签名字
          orderedCount: 2, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 3, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          praiseDegree: 2, // 好评度
          dishName: '金牌牛肉饼',
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品', // 标签名字
          orderedCount: 12, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 5, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: false, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 1, // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: false, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          praiseDegree: 2, // 好评度
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品', // 标签名字
          orderedCount: 0, // 已点数量
          isSpicy: true, // 是否是辣的
          lovers: 20, // 喜欢的人数
          isLove: true, // 是否喜欢
          praiseDegree: 2, // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ]
    },
  ],
  // 购物车列表
  cartList: [
    {
      dishName: '香干肉丝饭',
      dishImgUrl: require('@/assets/bg/bg-02.jpg'),
      dishPrice: '56.00',
      orderPeople: '张三',
      orderedCount: 5
    },
    {
      dishName: '武汉热干面面面面面面面面面面面面面面',
      dishImgUrl: require('@/assets/bg/bg-03.jpg'),
      dishPrice: '26.00',
      orderPeople: '李四',
      orderedCount: 1
    },
    {
      dishName: '金牌叉烧饭',
      dishImgUrl: require('@/assets/bg/bg-04.jpg'),
      dishPrice: '33.00',
      orderPeople: '王二麻',
      orderedCount: 4
    },
    {
      dishName: '辣椒炒肉',
      dishImgUrl: require('@/assets/bg/bg-05.jpg'),
      dishPrice: '10.00',
      orderPeople: '隔壁老王',
      orderedCount: 3
    },
    {
      dishName: '蒜香鸡汁块',
      dishImgUrl: require('@/assets/bg/bg-06.jpg'),
      dishPrice: '52.00',
      orderPeople: '你大爷',
      orderedCount: 1
    },
    {
      dishName: '招牌江西米粉份粉份粉份粉份粉',
      dishImgUrl: require('@/assets/bg/bg-07.jpg'),
      dishPrice: '44.00',
      orderPeople: '小二',
      orderedCount: 2
    },
    {
      dishName: '武汉热干面的范德萨范德萨发送的范德萨范德萨',
      dishImgUrl: require('@/assets/bg/bg-08.jpg'),
      dishPrice: '66.00',
      orderPeople: '张三李四王二麻',
      orderedCount: 5
    },
  ]
}