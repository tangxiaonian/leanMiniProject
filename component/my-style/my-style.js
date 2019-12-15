// component/my-style/my-style.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    increment(){
      this.setData({
        count: ++this.data.count
      });
    }  
  }
})