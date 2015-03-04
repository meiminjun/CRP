Ext.define('CRP.view.FavoriteList', {
	extend: 'Ext.dataview.List',
	xtype: 'favoriteList',
	requires: [
		'Ext.TitleBar',
		'Ext.dataview.List',
		'Ext.field.Search',
		'Ext.XTemplate',
		'Ext.plugin.ListPaging',
		'Ext.plugin.PullRefresh'
	],
    config: {
    	itemId: 'favoriteList',
    	useSimpleItems: true,
		variableHeights: true,
		infinite: true,
		disableSelection: true,
		allowDeselect: false,
		scrollToTopOnRefresh: false,
		cls: 'favoriteList',
		loadingText: false,
		flex: 1,
		itemHeight: 60,
		locales: {
			emptyText: 'orderIndex.emptyText',	
		},
		scrollable: {
			directionLock: true,
			direction: 'vertical'
		},
		itemTpl: [
		    '<div class="content">',
		    	'<div class="img"><img src="{Image}" /></div>',
		    	'<div class="infor">',
		    		'<div class="title">{FeedTitle}</div>',
		    		'<p class="cont">{FeedCont}</p>',
		    		'<div class="time">{Time}</div>',
		    	'</div>',
		    '</div>',
		    '<div class="deleteBtn"></div>'
		],
		items: [{
			xtype: 'searchfield',
			docked: 'top',
			placeHolder: 'keywords',
			cls: 'searchfield',
		}],
		plugins: [{
			type: 'listpaging'
		},{
		    xclass: 'CRP.ux.PullRefreshFn',
          	pullText: 'Pull down for more new Data!',
            refreshFn: function() { 
            	
           	}
	    }]
	}
});