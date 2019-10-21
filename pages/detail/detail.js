// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoInfo:null,
    // 推荐视频
    othersList:[],
    CommentData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let videoId = options.id;
    // console.log(videoId);
    this.getCurrentVideo(videoId);
    this.getOtherList(videoId);
    this.getCommentList(videoId);
  },
  /**
   * 获取视频详情
   */
  getCurrentVideo(videoId){
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/videoDetail?id='+videoId,
      success(res){
        // console.log(res);
        if (res.data.code == 0) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },
  /**
   * 获取推荐视频
   */
  getOtherList(videoId){
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/othersList?id='+videoId,
      success(res){
        // console.log(res);
        if(res.data.code == 0){
          that.setData({
            othersList:res.data.data.othersList
          })
        }
      }
    })
},
/**
   * 获取评论数据
   */
  getCommentList(videoId){
    let that = this;
    wx.request({
      url: 'https://www.fastmock.site/mock/6907fc94db7def085d5f47570c6481b6/bili/commentsList?id='+videoId,
      success(res){
        // console.log(res);
        if(res.data.code == 0){
          that.setData({
            CommentData: res.data.data.commentData
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})