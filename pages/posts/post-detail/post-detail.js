var postsData = require('../../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.setData({
      currentPostId: postId
    });
    var postData = postsData.postList[postId];
    this.setData({
      postData:postData
    });

    var postsCollected = wx.getStorageSync('posts_collected');
    if (postsCollected){
      var postCollected = postsCollected[postId];
      this.setData({
        collected: postCollected
      });
    }else{
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
    }
  },

  onCollectionTap:function(event){
    var postId = this.data.currentPostId;
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[postId];
    postCollected = !postCollected;
    postsCollected[postId] = postCollected;
    this.showToast(postsCollected, postCollected);
    },

  showToast: function (postsCollected, postCollected){
      wx.setStorageSync('posts_collected', postsCollected);
      this.setData({
        collected: postCollected
      });
      wx.showToast({
        title: postCollected ? '收藏成功' : '取消成功',
        duration: 1000,
        icon: "success"
      })
    },

  onShareTap:function(){
    var itemList = [
      '分享到qq',
      '分享到微信',
      '分享到朋友圈',
      '分享到微博',
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor:"#405f80"
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