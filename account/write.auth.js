function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie.replaceAll('"', ""));
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      	res = Array.from(c.substring(name.length, c.length))
	res[0] = ""
	res[res.length] = ""
	response = res.join('')
      return response;
    }
  }
  return null;
}
window.onload = () => {
const message = document.getElementById("message")
if (getCookie("regmsg") == null) {} else {
	message.innerHTML = getCookie("regmsg")
}
}
