Ext.define("CRP.model.StockModel", {
	 extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],
	config: {
		fields: [{
			name: 'StockId'
		}, {
			name: 'name'
		}, {
			name: 'middle'
		}, {
			name: 'right'
		},{
			name: 'detail'
		},{
			name: 'title'
		},{
			name: 'open'
		}, {
			name: 'cap'
		}, {
			name: 'high'
		}, {
			name: 'whigh'
		}, {
			name: 'low'
		}, {
			name: 'wlow'
		}, {
			name: 'vol'
		}, {
			name: 'avgvol'
		}, {
			name: 'pe'
		}, {
			name: 'yield'
		}]
	}
});