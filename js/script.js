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
            // console.log(wordData);
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

    for (let i = 0; i < wordData.length; i++) {

        for (let j = 0; j < wordData[i].meanings.length; j++) {
            console.log(wordData[j])
            for (let k = 0; k < wordData[i].meanings[j].definitions.length; k++) {
            }
        }
    }


}