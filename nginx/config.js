const config = {
    // API基础地址
    baseURL: 'https://group.hjcwzx.top/',

    // API接口路径
    apis: {
        // 活动列表
        activityList: '/api/v1/gbm/trade/ac-list',
        // 活动详情
        activityDetail: '/api/v1/gbm/trade/ac-detail',
        // 锁定订单
        lockOrder: '/api/v1/gbm/trade/lock_market_pay_order',
        // 结算订单
        settlementOrder: '/api/v1/gbm/trade/settlement_market_pay_order'
    },

    // 获取完整接口地址
    getApiUrl: function(apiKey, params = '') {
        return `${this.baseURL}${this.apis[apiKey]}${params ? '?' + params : ''}`;
    }
}

// 导出配置
export default config;
