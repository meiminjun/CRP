/**
 * main控制器
 * @author duwei
 * @date 20150204
 */
Ext.define('CRP.controller.Favorite', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			favorite: 'favorite',
			favoriteList: 'favoriteList',
			searchFavorite: 'favoriteList searchfield'
		},
		control: {
			favoriteList: {
				itemswipe : 'favoriteListSwipe',
				itemsingletap : 'favoriteListTap'
			}
		}
	},
	/**
	 * 初始化
	 */
	favoriteInit: function(view){
    	var me = this,
			favoriteList = Ext.create('CRP.view.FavoriteList');
		
    	me.refreshData();
		view.add(favoriteList);
		
	},
	/*
	 * 刷新数据
	 * */
	refreshData: function(){
		var me = this,
			favoriteList = me.getFavoriteList(),
			store = favoriteList.getStore(),
			keyword = me.getSearchFavorite().getValue();
		
		if(!store){
			store = Ext.create('CRP.store.FavoriteStore');
			favoriteList.setStore(store);
	    	
		}
		Ext.Ajax.abort(store.getProxy().url);
		CRP.util.PubOperation.pubListLoad(store, {

		}, true, false, 'favoriteList',function(response){
			
		}, favoriteList, false);		
	},
	/**
	 * 收藏夹左划 添加删除按钮
	 * */
	favoriteListSwipe: function(list, index, target, record, e, eOpts){
		var delIdsArr = list.delSwipeIds ? list.delSwipeIds : (list.delSwipeIds = []),
			item;
		if(e.direction === 'left'){
			if(delIdsArr.length > 0){
				delIdsArr[0].removeCls('leftStatus');
				delIdsArr.pop();
				
			}else{			
				// 停止draggable所有事件
				navCtr['Favorite'].getDraggable().suspendEvents();
			}
			item = list.getItemAt(index);
			item.addCls('leftStatus');
			delIdsArr.push(item);	

		}else if(e.direction === 'right'){
			if(delIdsArr.length > 0){
				delIdsArr[0].removeCls('leftStatus');
				delIdsArr.pop();
				// 启用draggable事件
				navCtr['Favorite'].getDraggable().resumeEvents();	
			}else{
				
			}
		}
	},
	/**
	 * 收藏夹点击事件
	 * */
	favoriteListTap: function(list, index, target, record, e, eOpts){
		var className = e.target.className;
		if(className === 'deleteBtn'){
			e.stopPropagation();
			list.getItemAt(index).removeCls('leftStatus');
	    	list.getStore().removeAt(index);
	    	list.delSwipeIds = [];
	    	navCtr['Favorite'].getDraggable().resumeEvents();	
		}else{
			this.goToPDFFn(record.data.PDFUrl);
		}
	},
	/**
	 * PDF预览
	 */
	goToPDFFn: function(pdfUrl) {
		var me = this,
			url = '';
		url = Ext.os.is.Android ? '/CRPAndroid_UAT/'+pdfUrl : pdfUrl;		
		PhoneGapAPI.checkAtt(url);
	}
});
