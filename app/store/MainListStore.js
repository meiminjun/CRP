Ext.define('CRP.store.MainListStore', {
	extend: 'Ext.data.Store',

	requires: [
		'CRP.model.MainListModel',
		'Ext.data.proxy.Ajax',
		'Ext.data.reader.Json'
	],

	config: {
		autoLoad: true,
		model: 'CRP.model.MainListModel',
		storeId: 'mainList',
		proxy: {
			type: 'ajax',
			url:'resources/data/getMainList.json',
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
//		if (successful && operation.getResponse()) {
//			iTenants.util.PubOperation.onlineLoad("newsList",operation.getResponse());
//		}
	}
});