      async functon getip() {
            await fetch('http://icanhazip.com/')
            console.log(res)
      }

      var request = new XMLHttpRequest();
      request.open("POST", "https://some-retarded-api.glitch.me");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "skolenn.github.io",
        avatar_url: "",
        content: "someone visited https://skolenn.github.io"
      }

      request.send(JSON.stringify(params));
