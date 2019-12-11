Page({
  data: {
    count: 0
  },
  handlerClick() {
    this.setData({
      count: this.data.count + 1
    });
  }
});