//Application Window Component Constructor
function SecondWindow() {
	//load component dependencies
	var SecondView = require('ui/common/SecondView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
		
	//construct UI
	var secondView = new SecondView();
	self.add(secondView);
	
	
	return self;
}

//make constructor function the public component interface
module.exports = SecondWindow;
