if(document.title == "Class Score Detail"){
	const cells = document.getElementsByTagName("tbody")[1].getElementsByTagName("tr");
	var f = false;
	var cats = [];
	var tn = 0;
	var td = 0;
	for(let cell of cells){
		if(f){
			var cat = cell.getElementsByTagName("td")[1].innerHTML;
			if(cats.indexOf(cat) == -1){
				cats.push(cat);
			}
		}
		f = true;
	}
	f = false
	var finalmsg = "";
	for(let cat of cats){
		var n = 0;
		var d = 0;
		for(let cell of cells){
			if(f){
				if(cell.getElementsByTagName("td")[1].innerHTML == cat){
					var pts = cell.getElementsByTagName("td")[8].getElementsByTagName("span")[0].innerHTML;
					if(pts.indexOf("/") != -1){
						n += Number(parseFloat(pts.substring(0,pts.indexOf("/")).replace(/,/g, '')));
						tn += Number(parseFloat(pts.substring(0,pts.indexOf("/")).replace(/,/g, '')));
						d += Number(parseFloat(pts.substring(pts.indexOf("/")+1).replace(/,/g, '')));
						td += Number(parseFloat(pts.substring(pts.indexOf("/")+1).replace(/,/g, '')));
					}
				}
			}
			f = true;
		}
		f = false;
		finalmsg = finalmsg + cat + ": " + n + "/" + d + "   |   ";
	}
	finalmsg = finalmsg + "Total Points" + ": " + tn + "/" + td;
	chrome.runtime.sendMessage(finalmsg);
}