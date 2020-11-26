function popup(text) {
	let p = document.createElement('div');
	p.className = 'popup';
	let t = document.createElement('p');
	t.innerHTML = text;
	let a = document.createElement('a');
	a.className = 'popup-accept';
	a.innerText = 'Ok';
	a.onclick = () => {
		p.parentNode.removeChild(p);
		location.reload();
	};

	p.appendChild(t);
	p.appendChild(a);
	document.body.appendChild(p);
}

function send() {
	const request = new XMLHttpRequest();
	request.open('POST', 'https://peitho-messenger.glitch.me');
	let text = document.getElementById('input').value;
	let name = document.getElementById('name').value;
	request.setRequestHeader('Content-type', 'application/json');

	const params = {
		avatar_url: 'https://doggo.ninja/TsY1SP.jpg',
		username: 'Peitho messenger',
		embeds: [
			{
				"title": 'Recieved a message!',
				"description": `\`\`${text}\`\``,
				"footer": `${name}`,
			},
		],
	};
	if (text == undefined) {
		return popup("You can't send an empty string");
	} else {
		request.send(JSON.stringify(params));
		popup(`sent "${text}"`);
	}
}
