/**
 * Stocks控制器
 * @author meiminjun
 * @date 2015/2/11
 */
Ext.define('CRP.controller.StockCtr', {
	extend: 'Ext.app.Controller',
	config: {
		models:["StockModel"],
		stores:["StockStore"],
		refs: {
			stockList: 'stock list',
			contain:'stock container[name=detail]'
		},
		control: {
			stockList:{
				itemsingletap:'updateFun'
			}
		}
		
	},
	/**
	 * 更新股票数据
	 * @param {Object} list
	 * @param {Object} index
	 * @param {Object} target
	 * @param {Object} record
	 * @param {Object} e
	 * @param {Object} eOpts
	 */
	updateFun:function(list, index, target, record, e, eOpts) {
//		alert("跳转详情页面");
		var me = this;
		var detailData = record.get("detail");
		var titleText = record.get('name');		
		detailData.title = titleText;
		me.getContain().updateData(detailData);	
	}
});