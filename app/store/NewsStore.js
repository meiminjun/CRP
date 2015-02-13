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
		proxy: {
			type: 'ajax',
			url:'resources/data/GetNewList.json',
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