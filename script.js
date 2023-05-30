function translateText() {
    // Get the input text
    var inputText = document.getElementById("englishText").value;

    // Make a request to the Google Translate API
    var url = "https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY";
    var data = {
      q: inputText,
      source: "en",
      target: "nl"
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      var translatedText = result.data.translations[0].translatedText;
      document.getElementById("dutchText").innerText = translatedText;
    })
    .catch(error => console.error("Error:", error));
  }