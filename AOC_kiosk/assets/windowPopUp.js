var windowObjectReference;
var strWindowFeatures = "menubar=no, location=no, resizable=yes, scrollbars=yes, status=yes, titlebar=no, close=yes, height=600px, width=600px, left=150px, top=50px";

function popitup(url){
	newwindow=window.open(url, 'name', strWindowFeatures);
	if (window.focus) {newwindow.focus();
	}
	return false;
}
