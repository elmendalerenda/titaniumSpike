function SecondView() {
	var self = Ti.UI.createView();
	var view = this;
	
	this.image = Titanium.UI.createView({
       borderRadius:10,
       backgroundImage:'/images/xmas-story.jpg',
       top: '10px',
       width:'120',
       height:'100',
    });
    self.add(this.image);
    
    var label = Ti.UI.createLabel({
		color:'#000000'
	});
	self.add(label);	
 
 	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	
	Titanium.Geolocation.getCurrentPosition(function(e){
 		Ti.Geolocation.reverseGeocoder(e.coords.latitude, e.coords.longitude, function(e){
			label.text = 'You are in ' + e.places[0].address;	
 		});
 	});

	return self;
}

module.exports = SecondView;
