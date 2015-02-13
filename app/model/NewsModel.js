Ext.define('CRP.model.NewsModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'FeedId'
            },{
            	name:'Image'
            },{
            	name:'FeedTitle'
            },{
            	name:'FeedCont'
            },{
            	name:'EmailId'
            },{
            	name:'ShareId'
            },{
            	name:'Collect'
            },{
            	name:'Download'
            },{
            	name:'Time'
            },{
            	name:'Unread'
            }
        ]
    }
});