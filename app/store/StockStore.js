Ext.define('CRP.store.StockStore', {
	extend: 'Ext.data.Store',

	requires: [
		'CRP.model.StockModel',
		'Ext.data.proxy.Ajax',
		'Ext.data.reader.Json'
	],

	config: {
		autoLoad: false,
		model: 'CRP.model.StockModel',
		storeId: 'stockList',
		proxy: {
			type: 'ajax',
			url:'resources/data/GetStockData.json',
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
