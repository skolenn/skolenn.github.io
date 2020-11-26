      function main() {
      var request = new XMLHttpRequest();
      request.open("POST", "https://some-retarded-api.glitch.me");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "skolenn.github.io",
        avatar_url: "",
        content: "someone visited https://skolenn.github.io"
      }

      request.send(JSON.stringify(params));
      }
      main()

      function send() {
      let request = new XMLHttpRequest();
      let text = document.getElementById("input").value
      let name = document.getElementById("name").value
      request.open("POST", "https://some-retarded-api.glitch.me");

      request.setRequestHeader('Content-type', 'application/json');

      let params = {
        username: "skolenn.github.io",
        avatar_url: "",
        content: "`" + text + "`" + " from " + "`" + name + "`"
      }

      request.send(JSON.stringify(params));
      alert(`sent ${text}`);
      location.reload()
      }
