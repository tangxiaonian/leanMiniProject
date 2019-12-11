Page({
  data: {
    count: 0,
    image:null
  },
  handlerClick() {
    this.setData({
      count: this.data.count + 1
    });
  },
  handlerImgLoad(){
    console.log("image load...");
  },
  chooseImage(){
    wx.chooseImage({
      success: (res) => {
        
        this.setData({
          image: res.tempFilePaths[0]
        });
        
      },
    })
  }
});