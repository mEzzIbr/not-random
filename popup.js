document.addEventListener("DOMContentLoaded", function () {
  var SUPABASE_URL =
    "https://wkraomcjwgqbobeutgna.supabase.co/rest/v1/random_record?limit=1";
  var SUPABASE_HEADERS = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrcmFvbWNqd2dxYm9iZXV0Z25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMzMzI4OTQsImV4cCI6MTk3ODkwODg5NH0.8a0gVJrfNyuOSXhcasVedebgFaQn8oUVFleHc6gKCBU",
    Authorization:
      "Bearer" +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrcmFvbWNqd2dxYm9iZXV0Z25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMzMzI4OTQsImV4cCI6MTk3ODkwODg5NH0.8a0gVJrfNyuOSXhcasVedebgFaQn8oUVFleHc6gKCBU",
  };

  async function getD() {
    const res = await fetch(SUPABASE_URL, { headers: SUPABASE_HEADERS });
    const data = await res.json();
    let maxValue = document.getElementById("charSlider").value 
    document.getElementById("p-title").innerHTML = data[0].poem_title;
    document.getElementById("p-content").innerHTML = data[0].poem_text.slice(0,maxValue);
  }
  getD();
  document.getElementById("generate").addEventListener("click", async function () {
    getD();
    document.getElementById("copy-btn").style.fontSize = "large"
    document.getElementById("copy-btn").innerText = "📋"
    document.getElementById("copy-btn2").style.fontSize = "large"
    document.getElementById("copy-btn2").innerText = "📋"
  });
  document.getElementById("copy-btn").addEventListener("click", function () {
    var copyText = document.getElementById("p-title").innerText;

    navigator.clipboard.writeText(copyText);
    document.getElementById("copy-btn").style.fontSize = "small"
    document.getElementById("copy-btn").innerText = "تم النسخ ✅"
    

  });
  document.getElementById("copy-btn2").addEventListener("click", function () {
    var copyText = document.getElementById("p-content").innerText;

    navigator.clipboard.writeText(copyText);
    document.getElementById("copy-btn2").style.fontSize = "small"
    document.getElementById("copy-btn2").innerText = "تم النسخ ✅"
    

  });
  

  document.getElementById("charSlider").addEventListener("change", function () {
    let currentValue = document.getElementById("charSlider").value 
    document.getElementById("charIndicator").innerHTML = currentValue + "  " + "حرف"
  })
});
