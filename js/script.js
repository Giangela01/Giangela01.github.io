$('form').on('submit', getInfo);

function getInfo(event) {

    event.preventDefault();

    $.ajax({
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en/delta'
    }).then(
        (data) => {
            wordData = data;
            // retrieveInfo();
            getMainWord();
            getPoS();
            console.log(wordData);
        },
        (error) => {
            console.log('bad request', error);
        }
    );
}



function getMainWord(data) {
    document.getElementById("search-word").innerHTML =
        `<h2 class="main-word">${wordData[0].word}</h2>
    <audio controls src="${wordData[0].phonetics[0].audio}" type="audio/mp3">
    Sorry, your browser does not seem support the audio.</audio>`
}

function getPoS(data) {
    let table = document.getElementById('pos-phonetics')

    for (let a = 0; a < wordData.length; a++) {
        for (let b = 0; b < wordData[a].meanings.length; b++) {

            for (let c = 0; c < wordData[a].meanings[b].definitions.length; c++) {


                function definition(definition) {
                    return `<dl>${definition}`}
            


                let row = `<p>${wordData[a].meanings[b].partOfSpeech} | ${wordData[a].phonetic}</p>
                <p>${wordData[a].origin}</p>
                <div id="def-example">${wordData[a].meanings[b].definitions[c].definition ? definition(wordData[a].meanings[b].definitions[c].definition) : "" }</div>`;

                
                // let defRow = `<dl><dt>${wordData[a].meanings[b].definitions[c].definition}</dt>
                // <dt>${wordData[a].meanings[b].definitions[c].example}</dt></dl>`
                table.innerHTML += row
            }
            // table.innerHTML += row
        }
    }
}