
// This function loads pokemon data from the Pokemon API
function ChuckNorrisJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const ChuckId = 1;
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
        .then(response => response.data) // DIFFERENT FROM FETCH: response.data instead of response.json()
        .then(chuck => {
            console.log('data decoded from JSON:', chuck);


            // Build a block of HTML
            const pokemonHtml = `
        <p><strong>${chuck.value}</strong></p>
        <img src="${chuck.icon_url}" />
      `;
            console.log(pokemonHtml)
            var asd = document.getElementById('chuck-norris');
            asd.innerHTML = pokemonHtml;
        });
}
