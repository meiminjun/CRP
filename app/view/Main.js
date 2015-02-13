Ext.define('CRP.view.Main', {
    extend: 'Ext.Container',
	xtype:'main',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        autoDestroy: false,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                cls: 'customToolBar',
                title:'CRP',
                items: [
                    {
						xtype: 'button',
						ui: 'plain',
						iconCls: 'backBtnCls',
						iconMask: true,
						docked: 'left',
						handler: function(e) {
							mainCtr.mainBackBtnTapFun();
						}
		            },
                    {
                        xtype: 'button',
                        itemId:'collectBtn',
                        iconCls: 'collectBtnCls',
                        docked: 'right',
                        ui: 'plain',
                        iconMask: true
//                      text: 'MyButton1'
                    }
                ]
            },
            {
             	xtype:'mainList', 
                flex: 1,
                            
            }
        ]
    }

});