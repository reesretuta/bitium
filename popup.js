document.addEventListener('DOMContentLoaded', function() {

    chrome.history.search({"text": "github.com"}, function(results) {
      d = document;

      var output = "";
      for (var i = 0; i < results.length; i++) {
      	var myUrl = results[i].url;
      	console.log(myUrl.indexOf("/issues/"));
      	if (myUrl.indexOf("/issues/") > -1) {
      		var a = d.createElement('a');
      		a.href = myUrl;
      		a.appendChild(document.createTextNode(myUrl));
			d.body.appendChild(a);
			d.body.appendChild(document.createElement("br"));  
			console.log(myUrl);
      	}
      	
      };

    });

}, false);