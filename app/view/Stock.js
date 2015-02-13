Ext.define('CRP.view.Stock', {
    extend: 'Ext.Container',
	xtype: 'stock',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.plugin.PullRefresh'
    ],

    config: {
        layout: 'vbox',
        cls: 'stockCss',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                cls: 'customToolBar',
                title:'Stocks',
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
            },
            {
                xtype: 'list',
                flex: 1,
                itemId:'stockList',
                useSimpleItems: true,
				variableHeights: true,
				infinite: true,
				disableSelection: true,
				allowDeselect: false,
				scrollToTopOnRefresh: false,
				scrollable: {
					directionLock: true,
					direction: 'vertical'
				},
				
				store:'stockList',
				itemHeight: 49,
				pressedCls: 'itemPressed',				
                itemTpl: [
                    '<div class="row">',
                    	'<span>{name}</span>',
                    	'<span style="position:absolute;left:35%;width:86px;text-align:right;">{middle}</span>',
                    	
//                  	'<a class="updown"><span>+</span>{right}</a>',
                    	'{[this.updateHtml(values.right)]}',
                    '</div>',{
						compiled : true,
						updateHtml: function(str){
							var	num = str.substr(1);
							if(str.indexOf("+") === 0) {
								return '<a class="up"><span class="sign">+</span>'+num+'</a>';
							}else {
								return '<a class="down"><span class="sign">-</span>'+num+'</a>';
							}
						}
					}
                ],
                cls:'stockList',
//              data:[{"name":"CapitaLand","middle":"3.157.60","right":"+85.07"},{"name":"CMT","middle":"113.99","right":"+1.98"},{"name":"CCT","middle":"18.33","right":"-0.33"},{"name":"ART","middle":"96.83","right":"+0.54"},{"name":"test","middle":"33.42","right":"-0.24"},{"name":"test2","middle":"32.23","right":"-32.34"},{"name":"test","middle":"33.42","right":"-0.24"},{"name":"test","middle":"33.42","right":"-0.24"},{"name":"test","middle":"33.42","right":"-0.24"},{"name":"test","middle":"33.42","right":"-0.24"},{"name":"test","middle":"33.42","right":"-0.24"},{"name":"test","middle":"33.42","right":"-0.24"}],
                plugins: [{
				    xclass: 'CRP.ux.PullRefreshFn',
		          	pullText: 'Pull down for more new Data!',
		          	style:"color:white",
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
            },
            {
                xtype: 'container',
//              flex: 1,
				cls:"stockTable",
				name:'detail',
//				style:'background: rgba(36, 36, 36,0.9);font-family:Hiragino Sans GB_W3;font-size:20px;',
                tpl: [
//              	'<tpl for=".">',
					'<h3 class="tableTitle">CMT lnc.</h3>',
                    '<table border="0" width="100%" height="100%">',
                    '<caption>stock prices are 20 minutes delayed</caption>',
                    '<tr>',
                    '<th>OPEN</th>',
                    '<td>{open}</td>',
                    '<th>CAP</th>',
                    '<td>{cap}</td>',
                    '</tr>',
                    '<tr>',
                    '<th>HIGH</th>',
                    '<td>{high}</td>',
                    '<th>52W HIGH</th>',
                    '<td>{whigh}</td>',
                    '</tr>',
                    '<tr>',
                    '<th>LOW</th>',
                    '<td>{low}</td>',
                    '<th>52W LOW</th>',
                    '<td>{wlow}</td>',
                    '</tr>',
                    '<tr>',
                    '<th>VOL</th>',
                    '<td>{vol}</td>',
                    '<th>AVG VOL</th>',
                    '<td>{avgvol}</td>',
                    '</tr>',
                    '<tr>',
                    '<th>P/E</th>',
                    '<td>{pe}</td>',
                    '<th>YIELD</th>',
                    '<td>{yield}</td>',
                    '</tr>',
                    '</table>',
//                  '</tpl>'
                    ],
                data:{"open":"112.05","cap":"668.58","high":"114.52","whigh":"119.75","low":"112.01","wlow":"70.51","vol":"33.72","avgvol":"51.74","pe":"17.67","yield":"1.7%"}
            }
        ]
    }

});