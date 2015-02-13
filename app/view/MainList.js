Ext.define('CRP.view.MainList', {
    extend: 'Ext.dataview.List',
	require:['Ext.plugin.ListPaging','Ext.plugin.PullRefresh'],
	xtype:'mainList',
    config: {
//      layout: 'vbox',
//      autoDestroy: false,
        useSimpleItems: true,
		variableHeights: true,
		infinite: true,
		disableSelection: true,
		allowDeselect: false,
		scrollToTopOnRefresh: false,
		
		store:'mainList',
		itemHeight: 60,
        itemTpl: [
            '<div style="position:absolute;left:11px;top:9px;">',
            	'<img src="{Image}" width="40px" height="40px" />',
            '</div>',
            '<div style="margin-left: 44px;margin-top:4px;">',
            	'<p>{Cont}</p>',
            '</div>',
            '<div style="position:absolute;right:15px;top:19px;">',
            	'<img src="{Status}" width="18px" height="18px" />',
            '</div>'
        ]  
    }
});