Ext.define('CRP.store.NewsStore', {
	extend: 'Ext.data.Store',

	requires: [
		'CRP.model.NewsModel',
		'Ext.data.proxy.Ajax',
		'Ext.data.reader.Json'
	],

	config: {
		autoLoad: false,
		model: 'CRP.model.NewsModel',
		storeId: 'newsListStore',
		pageSize : 15,
		proxy: {
			type: 'ajax',
			url:'resources/data/GetNewList.json',
			timeout : 50000,
			startParam : false,
			limitParam : 'PageSize',
			pageParam : 'currentPage',
			reader: {
				type: 'json',
				rootProperty:'rows'
			}
		},
		listeners:[{
			fn:'loadData',
			event:'load'
		}]
	},
	loadData:function(store,records,successful,operation,eOpts) {
//		console.log("-------------------------------------"+records+"---------"+eOpts);
		if (successful && operation.getResponse()) {
			CRP.util.PubOperation.onlineLoad("newsList",operation.getResponse());
		}
	}
});