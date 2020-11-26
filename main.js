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
      var request = new XMLHttpRequest();
      var text = document.getElementById("input")
      request.open("POST", "https://some-retarded-api.glitch.me");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "skolenn.github.io",
        avatar_url: "",
        content: text
      }

      request.send(JSON.stringify(params));
      alert('sent');
      }
