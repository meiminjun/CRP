/**
 * News控制器
 * @author meiminjun
 * @date 20150205
 */
Ext.define('CRP.controller.NewsCtr', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			newList : 'news list'
		},
		control: {
			newList: {
				itemsingletap: 'showDetailFun'
			}
		}
	},
	/**
	 * 跳转到详情页面
	 * @param {Object} list
	 * @param {Object} index
	 * @param {Object} target
	 * @param {Object} record
	 * @param {Object} e
	 * @param {Object} eOpts
	 */
	showDetailFun:function(list, index, target, record, e, eOpts) {
//		alert("跳转详情页面");
		var target = e.target,
			className = target.className;
		CRP.util.PubOperation.cancelBubble(e);	//阻止冒泡
		if(className === "collected") {
			target.className = "notCollect";
			target.src="resources/images/notCollect.png";
			return false;
		}else if (className === "notCollect") {
			target.className = "collected";
			target.src = "resources/images/collected.png";
			return false;
		}else if (className === "undownload") {
			Ext.Msg.alert('Tips', 'Downloading');
			return false;
		}else if (className === "share") {
//			alert("分享");
			Ext.Msg.alert('Tips', 'Share');
			return false;
		}else if (className === "email") {
			PhoneGapAPI.sendMail(record.data.Email);
			return false;
		}
		//alert("进入详情页面");
		if(record.data.PDFUrl !== ''){
			this.goToPDFFn(record.data.PDFUrl);	
		}
	},
	/**
	 * 根据搜索内容显示对应数据
	 * @param {String} cont
	 */
	searchCont:function(cont) {
//		alert(cont);
		var store = Ext.getStore('newsListStore');
		console.log(store);
		store.loadPage(1,{
			callback:function(record,operation,success) {
				var response = operation.getResponse();
				console.log(response);
				var data = response.responseText;
				var jsonData = Ext.decode(data);
				console.log(jsonData);
				store.setData(jsonData.rows);
			},
			scope : this
		});
	},
	/**
	 * PDF预览
	 */
	goToPDFFn: function(pdfUrl) {
		var me = this,
			url = '';
		url = Ext.os.is.Android ? '/CRPAndroid_UAT/'+pdfUrl : pdfUrl;		
		PhoneGapAPI.checkAtt(url);
	}
});