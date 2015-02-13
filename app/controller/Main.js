/**
 * main控制器
 * @author duwei
 * @date 20150204
 */
Ext.define('CRP.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
        stores : ['MainListStore','OfflineLocalStore','NewsStore'],
	    models: ['MainListModel','NewsModel'],
		refs: {
			main : 'main list',
			collectBtn: 'main #collectBtn'
		},
		control: {
			main:{
				itemsingletap: 'jumpToNews'
			},
			collectBtn: {
				tap:'jumpToCollect'
			}
		}
	},
	/**
	 * 初始化
	 */
	init: function() {
		// 获取用户选择的语言缓存信息
		CRP.util.PubOperation.initLanguage();
	},
	/**
	 * 首页返回至AIO
	 *
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	mainBackBtnTapFun: function(obj, e, eOpts) {
		if (CRP.util.PubOperation.isGoogleChrome()) {
			Ext.Msg.alert('homeBack');
		} else {
			PhoneGapAPI.exit();
		}
	},
	/**
	 * 进入News 页面
	 */
	jumpToNews:function(list, index, target, record, e, eOpts) {
		if(index == "4") {	//进入股票页面
			navCtr.pushToNext('CRP.view.Stock', function(view) {
				var store = Ext.getStore('stockList');
				var param = {
					ADAccount: Global.userAccount,
		            GPSLongitude: Global.longitude,
		            GPSLatitude:Global.latitude,
		            language:Global.language
				};
				CRP.util.PubOperation.pubListLoad(store, param, true, true, 'stockList',function(){
		//				console.log("---------回调----"+rows);
				});
			});
		}else {
			navCtr.pushToNext('CRP.view.News', function(view) {
				var store = Ext.getStore('newsListStore');
				var param = {
					ADAccount: Global.userAccount,
		            GPSLongitude: Global.longitude,
		            GPSLatitude:Global.latitude,
		            language:Global.language
				};
				CRP.util.PubOperation.pubListLoad(store, param, true, true, 'newsList',function(){
		//				console.log("---------回调----"+rows);
				});
			});
		}
	},
	jumpToCollect:function() {
		alert("进入收藏页面");
	}
});
