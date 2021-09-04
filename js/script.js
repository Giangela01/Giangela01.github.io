let wordData;

const $input = $('input[type="text"]');

$('form').on('submit', getInfo);

function getInfo(event) {

    event.preventDefault();

    $.ajax({
        url: `https://api.dictionaryapi.dev/api/v2/entries/en/${$input.val()}`
    }).then(
        (data) => {
            wordData = data;
            getMainWord();
            getPoS();
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
    Sorry, your browser does not seem support the audio.</audio>`;

}

function getPoS(data) {

    let table = document.getElementById('pos-phonetics');
    let defTitle = document.getElementById('def-title');
    let defTable = document.getElementById('definition');
    let meanings = wordData[0].meanings[0].definitions;

    defTitle.innerText = "Definition/s"

    let partOfSpeech = `<p>${wordData[0].meanings[0].partOfSpeech} | ${wordData[0].phonetic}</p>
    <p><em>Origin:</em> ${wordData[0].origin}</p>`;

    meanings.forEach(element => {
        let defA = element;
        let defList = defA.map = (`<dl><lh>:${defA.definition}</lh>
                                    <dt><em>${defA.example ? 'Example: ' + defA.example : ""}</em></dt>
                                    <dd>${defA.synonyms ? defA.synonyms : ""}</dd>
                                    </dl>`);
        defTable.innerHTML += defList;
    });

    table.innerHTML += partOfSpeech;

}