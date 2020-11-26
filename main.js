            let markdown = "`"
            let text = document.getElementById("input").value
            let name = document.getElementById("name").value
            function popup(text) {
            let p = document.createElement("div");
            p.className = "popup";
            let t = document.createElement("p");
            t.innerHTML = text;
            let a = document.createElement("a");
            a.className = "popup-accept";
            a.innerText = "Ok";
            a.onclick = () => {
                p.parentNode.removeChild(p);
            };

            p.appendChild(t);
            p.appendChild(a);
            document.body.appendChild(p);
        }

      function send() {
      let request = new XMLHttpRequest();
      request.open("POST", "https://peitho-messenger.glitch.me");

      request.setRequestHeader('Content-type', 'application/json');

      let params = {
        username: "skolenn.github.io",
        avatar_url: "",
        content: `${markdown}${text}${markdown} from ${markdown}${name}${markdown}`
      }

      request.send(JSON.stringify(params));
      popup(`sent "${text}"`);
      location.reload()
      }

