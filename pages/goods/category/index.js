import { getCategoryList } from '../../../services/good/fetchCategoryList';
Page({
  data: {
    list: [],
  },
  async init() {
    try {
      const result = await getCategoryList();
      this.setData({
        list: result.data,
      });
    } catch (error) {
      console.error('err:', error);
    }
  },

  onShow() {
    this.getTabBar().init();
  },
  onChange(e) {
   const groupId=e.detail.item.groupId
    console.log(this.data.list);
    wx.navigateTo({
      url: `/pages/goods/list/index?groupId=${groupId}`,
    });
  },
  onLoad() {
    this.init(true);
  },
});
