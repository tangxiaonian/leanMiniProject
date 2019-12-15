// component/my-tag/my-tag.js
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

  },
  options:{
    multipleSlots: true
  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes:{

      created(){
        console.log("在组件实例刚刚被创建时执行");
      },
      attached(){
        console.log("在组件实例进入页面节点树时执行");
      }

  },
  pageLifetimes:{
    show(){
      console.log("组件所在的页面被展示时执行");
    },
    hide(){
      console.log("组件所在的页面被隐藏时执行");
    }
  }
})
