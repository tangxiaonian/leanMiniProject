import {
  requestHome
} from "../../network/home/homeRequest.js";

Page({
  data: {
    count: 0
  },
  onLoad() {

    requestHome().then((result) => {
      console.log(result);
    });

  },
  handlerClick() {
    this.setData({
      count: this.data.count + 1
    });
  },
  handlerShowToast(){
    wx.showToast({
      title: 'hello world',
    });
  },
  handlerShowModal(){
    wx.showModal({
        title: "hello",
        content:"66666",
        cancelColor:"red",
        success(res){
          console.log(res);
        }
    });
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ["拍照","相册"],
      success(res){
        console.log(res);
      }
    })
  }
});