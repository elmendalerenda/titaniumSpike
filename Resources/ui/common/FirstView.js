function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var view = this;
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var showImage = Ti.UI.createButton({
		color:'#000000',
		title:String.format(L('welcome'),'Casimiro'),
	});
	self.add(showImage);	
	
	showImage.addEventListener('click', function(e) {
		view.image.visible = true;
	});
	
	this.image = Titanium.UI.createView({
       borderRadius:10,
       backgroundImage:'/images/xmas-story.jpg',
       top: 200,
       width:'120',
       height:'100',
       visible: false
    });
    self.add(this.image);
    
    this.image.addEventListener('click', function(e) {
		Ti.App.fireEvent('go');
	});	
	
	var remoteRequest = Ti.UI.createButton({
		color:'#000000',
		title: 'Remote request test',
		top:40
		
	});
	self.add(remoteRequest);	
	
	remoteRequest.addEventListener('click', function(e) {
		var url = "192.168.0.88:3000";
		var xhr = Ti.Network.createHTTPClient({
		    onload: function(e) {
		        // this.responseText holds the raw text return of the message (used for JSON)
		        // this.responseXML holds any returned XML (used for SOAP web services)
		        // this.responseData holds any returned binary data
		        Ti.API.info(this.responseText);
		        alert('success');
		    },
		    onerror: function(e) {
		        Ti.API.info(e.error);
		        alert('error');
		    },
		    timeout:5000
		});
	
		xhr.open("GET", url);
		xhr.send();
	});
	
	return self;
}

module.exports = FirstView;
