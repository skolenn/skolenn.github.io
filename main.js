      var request = new XMLHttpRequest();
      request.open("POST", "https://some-retarded-api.glitch.me");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: "The message to send"
      }

      request.send(JSON.stringify(params));
