var fortuneList = ["You are unlucky.","You will pass your test", "You will become rich", "Never say GoodBye", " Your Dreams Will Come True"];

function generateFortuneCookie(){
	var fortune = fortuneList[Math.floor(Math.random() * fortuneList.length)];
	document.getElementById("fortune-cookie-text").innerHTML=fortune;

	//PREVIOUS
	var list = document.getElementById('list');
	var idk = document.createElement("li");
	idk.appendChild(document.createTextNode(fortune));
	list.appendChild(idk);	
}

