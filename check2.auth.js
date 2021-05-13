function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      	res = Array.from(c.substring(name.length, c.length))
	res[0] = ""
	res[res.length - 1] = ""
	response = res.join('')
      return response;
    }
  }
  return null;
}

if (getCookie("scratchbloxstoken") == null) {/*window.location.assign("https://web.scratchblox.tk/account/login")*/} else {
	var xhttp = new XMLHttpRequest
	xhttp.open("POST", "https://auth.scratchblox.tk/auth", true);
	xhttp.setRequestHeader("cookie", getCookie("scratchbloxstoken"));
	xhttp.send();
	xhttp.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
    			window.location.assign("https://web.scratchblox.tk/home")
  		} else {
          //window.location.assign("https://web.scratchblox.tk/account/login")
      }
	};
}
