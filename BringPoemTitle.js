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
  console.log(data);
  document.activeElement.value = data[0].poem_title;
}

getD();
