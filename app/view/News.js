Ext.define('CRP.view.News', {
	extend: 'Ext.Container',
	xtype: 'news',
	requires: [
		'Ext.TitleBar',
		'Ext.dataview.List',
		'Ext.field.Search',
		'Ext.XTemplate',
		'Ext.plugin.ListPaging',
		'Ext.plugin.PullRefresh'
	],

	config: {
		itemId:'feedList',
		layout: 'vbox',
		items: [{
			xtype: 'titlebar',
			docked: 'top',
			title:'News Feed',
			cls: 'customToolBar',
			items: [{
				xtype: 'button',
				ui: 'plain',
				iconCls: 'backBtnCls',
				iconMask: true,
				docked: 'left',
				handler: function(e) {
					navCtr.popToPrev();
				}
            }]
		}, {
			xtype: 'list',
			flex: 1,
			itemId: 'newsList',
			useSimpleItems: true,
			variableHeights: true,
			infinite: true,
			disableSelection: true,
			allowDeselect: false,
			scrollToTopOnRefresh: false,

			store: 'newsListStore',
			cls: 'news',
			emptyText: 'orderIndex.emptyText',
			loadingText: false,
			scrollable: {
				directionLock: true,
				direction: 'vertical'
			},
			itemTpl: [
				'<div style="position:absolute;top:28px;left:10px">',
					'<div class="avatar-img">',
						'<img class="listImgDef" src="{Image}" />',
					'</div>',
				'</div>',
				'<div class="avatar-row defaultFont-style" style="margin-left:72px;">',
					'<div class="head text-overflow">',
						'<span class="proName">{FeedTitle}</span>',
					'</div>',
					'<div class="rowscontent">{FeedCont}</div>',
					'<div class="expand">',
						'<a class="email"></a>',
						'<span class="split">|</span>',
						'<a class="share"></a>',
						'<span class="split">|</span>',
						'<tpl if="Collect==\'1\'">',
							'<a class="collected"></a>',
						'<tpl else>',
							'<a class="notCollect"></a>',
						'</tpl>',
					'</div>',
				'</div>',
				'<div>',
					'<tpl if="Unread==\'0\'">',
						'<img class="unread" src="resources/images/weidu.png" />',
					'</tpl>',
					'<tpl if="Download==\'1\'">',
						'<div class="downloaded"></div>',
					'<tpl else>',
						'<div class="undownload"></div>',
					'</tpl>',	
					'<div class="time">{Time}</div>',
				'</div>'
			],
//			data: [{
//				FeedId:'1',
//				Image: 'resources/images/11.png',
//				FeedTitle:'SGX welcomes mm2 Asia Ltd to Catalist',
//				FeedCont:'Singapore Exchange (SGX) today welcomedmm2 Asia today',
//				EmailId:'1',
//				ShareId:'1',
//				Collect:'1',
//				Download:'1',
//				Time:'09 Dec 2014'
//			}, {
//				FeedId:'1',
//				Image: 'resources/images/11.png',
//				FeedTitle:'SGX welcomes mm2 Asia Ltd to Catalist',
//				FeedCont:'Singapore Exchange (SGX) today welcomedmm2 Asia today',
//				EmailId:'1',
//				ShareId:'1',
//				Collect:'1',
//				Download:'1',
//				Time:'09 Dec 2014'
//			}, {
//				FeedId:'1',
//				Image: 'resources/images/11.png',
//				FeedTitle:'SGX welcomes mm2 Asia Ltd to Catalist',
//				FeedCont:'Singapore Exchange (SGX) today welcomedmm2 Asia today',
//				EmailId:'1',
//				ShareId:'1',
//				Collect:'1',
//				Download:'1',
//				Time:'09 Dec 2014'
//			}, {
//				FeedId:'1',
//				Image: 'resources/images/11.png',
//				FeedTitle:'SGX welcomes mm2 Asia Ltd to Catalist',
//				FeedCont:'Singapore Exchange (SGX) today welcomedmm2 Asia today',
//				EmailId:'1',
//				ShareId:'1',
//				Collect:'1',
//				Download:'1',
//				Time:'09 Dec 2014'
//			}],
			items: [{
				xtype: 'searchfield',
				docked: 'top',
				placeHolder: 'keywords',
				itemId:'mysearch',
				//name: 'orderListSearch',
				cls: 'newsSearchfield',
			}],
			plugins: [{
				type: 'listpaging'
			},{
			    xclass: 'CRP.ux.PullRefreshFn',
	          	pullText: 'Pull down for more new Data!',
//		            locales: {
//		            	lastUpdatedText: 'pullRefresh.lastUpdatedText',
//		            	pullText: 'pullRefresh.pullRefreshText',
//		            	releaseText: 'pullRefresh.releaseRefreshText'
//		            },
	            refreshFn: function() { 
//		                Ext.getStore('marketListStore').load();
	//				mainCtr.showFun();
	           	}
		    }]
		}],
		listeners:[{
			fn:'keyupFun',
			event:'keyup',
			delegate:'#mysearch'
		}]
	},
	keyupFun:function(textfield,e,eOpts) {
		var searchText,event = e.event;
		if(event.keyCode == 13){
			searchText = textfield.getValue();
			newsCtr.searchCont(searchText);
		}
		
	}
});