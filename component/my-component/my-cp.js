// component/my-component/my-cp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value: "默认的标题"
    },
    content: {
      type: String,
      value: "默认的内容"
    }
  },

  /**
   * 外部样式
   */
  externalClasses: ['my-class-title','my-class-content'],

  /**
   * 组件的初始数据
   */
  data: {
    
  },
  methods:{
    
    bindHanlerTap(){

      this.triggerEvent("bindHanlerTap",{"name":"tang"})

    }
  }
})
