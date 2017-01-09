var fortuneList = ["You are unlucky.","You will pass your test", "I dont know", "Never say GoodBye", " Your Dreams Will Come True"];

function generateFortuneCookie(){
	var node = document.createElement("li");
	var textnode = document.createTextNode(fortuneList[Math.floor(Math.random() * fortuneList.length)]);
	node.appendChild(textnode);
	document.getElementById("fortune-cookie-text").appendChild(node);
}