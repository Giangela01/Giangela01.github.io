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
    let table = document.getElementById('pos-phonetics');

    for (let a = 0; a < wordData.length; a++) {
        for (let b = 0; b < wordData[a].meanings.length; b++) {

            let row = `<p>${wordData[a].meanings[b].partOfSpeech} | ${wordData[a].phonetic}</p>
                        <p>Origin: ${wordData[a].origin}</p>
                        <dl id="defined"><lh>Definition:</lh>
                        </dl>`
            table.innerHTML += row
        }
    }

    let otherTable = document.getElementById('defined')

    for (let c = 0; c < wordData.length; c++) {
        for (let d = 0; d < wordData[c].meanings.length; d++) {
            for (let e = 0; e < wordData[c].meanings[d].definitions.length; e++) {
                console.log(wordData[c].meanings[d].definitions[e]definition)

                // otherTable.innerHTML = `<dt>${wordData[c].meanings[d].definitions[e].definition}</dt>`
            }

        }
    }
}