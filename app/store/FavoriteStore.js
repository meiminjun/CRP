Ext.define('CRP.store.FavoriteStore', {
	extend: 'Ext.data.Store',

	requires: [
		'CRP.model.NewsModel',
		'Ext.data.proxy.Ajax',
		'Ext.data.reader.Json'
	],

	config: {
		autoLoad: false,
		model: 'CRP.model.NewsModel',
		pageSize : 10,
		proxy: {
			type: 'ajax',
			url:'resources/data/GetFavorite.json',
			limitParam : 'PageSize',
			pageParam : 'currentPage',
			reader: {
				type: 'json',
				rootProperty:'rows',
				totalProperty : 'totalCount'
			}
		},
		listeners:[{
			fn:'loadData',
			event:'load'
		}]
	},
	loadData:function(store,records,successful,operation,eOpts) {
		if (successful && operation.getResponse()) {
			CRP.util.PubOperation.onlineLoad("favoriteList",operation.getResponse());
		}
	}
});