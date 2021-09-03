$('form').on('submit', getInfo);

function getInfo(event) {

    event.preventDefault();

    $.ajax({
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en/delta'
    }).then(
        (data) => {
            wordData = data;
            retrieveInfo();
            console.log(wordData);
        },
        (error) => {
            console.log('bad request', error);
        }
    );
}

// function retrieveInfo(data) {
//     let table = document.getElementById('myTable')

//     for (let i = 0; i < wordData.length; i++) {

//         let row = `<tr>
//                         <td>${wordData[i].phonetic}</td>
//                     </tr>
//                     <tr>
//                         <td>${wordData[i].origin}</td>
//                     </tr>`
//         for (let e = 0; e < wordData[i].meanings.length; e++) {
//             let otherRow = ` <tr>
//                             <td>${wordData[i].meanings[e].partOfSpeech}</td>
//                         </tr>`
//             table.innerHTML += row

//             table.innerHTML += otherRow
//             console.log('Hello');
//         }
//     }
// }