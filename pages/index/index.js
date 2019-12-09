Page({
  data: {
    students: [{
        name: "tang01",
        age: 18
      },
      {
        name: "tang02",
        age: 15
      },
      {
        name: "tang03",
        age: 10
      },
    ],
    count: 0
  },
  handlerClick() {
    this.setData({
      count: this.data.count + 1
    });
  }
});