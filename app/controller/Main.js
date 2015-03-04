/**
 * main控制器
 * @author duwei
 * @date 20150204
 */
Ext.define('CRP.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
        stores : ['MainListStore','OfflineLocalStore','NewsStore','FavoriteStore'],
	    models: ['MainListModel','NewsModel'],
		refs: {
			main : 'main list'
//			collectBtn: 'main #collectBtn'
		},
		control: {
			main:{
				itemsingletap: 'jumpToNews'
			}
//			collectBtn: {
//				tap:'jumpToCollect'
//			}
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
		if(index == "0") {	//进入股票页面
			navCtr.pushToNext('CRP.view.Stock', function(view) {
				var store = Ext.getStore('stockList');
				var param = {
					ADAccount: Global.userAccount,
		            GPSLongitude: Global.longitude,
		            GPSLatitude:Global.latitude,
		            language:Global.language
				};
				var detailPanel = view.down("container[name=detail]");
				CRP.util.PubOperation.pubListLoad(store, param, true, true, 'stockList',function(response){
					var detailObj = response.rows[0].detail,
						titleText = response.rows[0].name;
						detailObj.title = titleText;
					detailPanel.setData(detailObj);
				});
			});
		}else if (index == "5") { //进入PDF
			mainCtr.goToPDFFn();	
		}else {
			navCtr.pushToNext('CRP.view.News', function(view) {
				var store = Ext.getStore('newsListStore'),
					titlebar = view.down('titlebar'),
					titleText = record.get('Cont');
				titlebar.setTitle(titleText);
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
	//进入收藏页面
	jumpToCollect:function() {
		navCtr.pushToNext('CRP.view.Favorite',function(view){
			favoriteCtr.favoriteInit(view);
		});
	},
	goToPDFFn: function() {
		var me = this,
			pdfUrl = '',
			url = '';
		pdfUrl = 'resources/data/Evevts.pdf';
		url = Ext.os.is.Android ? '/CRPAndroid_UAT/'+pdfUrl : pdfUrl;
		
		PhoneGapAPI.checkAtt(url);
	}
});
