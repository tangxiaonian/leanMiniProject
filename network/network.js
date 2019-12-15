const Base_Path = "http://106.54.54.237:8000/api/v1";

export default function request(option) {

  return new Promise((resolve,reject) => {
    wx.request({
      url: Base_Path + option.url,
      data: option.data || {},
      method: option.method || "GET",
      success: resolve,
      fail:reject
    });
  })

}