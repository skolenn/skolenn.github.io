function popup(text) {
	let p = document.createElement('div');
	p.className = 'popup';
	let t = document.createElement('p');
	t.innerHTML = text;
	let a = document.createElement('a');
	a.className = 'popup-accept';
	a.innerText = 'Ok';
	document.getElementById('butomUWU').disabled = true;
	document.getElementById('butomUWU').style.cursor = 'initial';
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
	let time = new Date().toLocaleTimeString();
	request.setRequestHeader('Content-type', 'application/json');
	const params = {
		avatar_url: 'https://doggo.ninja/TsY1SP.jpg',
		username: 'Peitho messenger',
		embeds: [
			{
				title: 'Recieved a message!',
				description: `\`\`${text}\`\``,
				footer: {
					text: `${name}  -  Today at ${time}`,
				},
			},
		],
	};
	if (text == undefined) {
		return popup("You can't send an empty string");
	}

	request.onreadystatechange = () => {
		if (request.readyState !== 4) return;
		if (request.status == 429) {
			return popup('You can only send one message per minute!');
		}
		popup(`sent "${text}"`);
	};

	request.send(JSON.stringify(params));
}
