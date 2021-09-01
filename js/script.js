//for button to appear

$('#s-word').change(function() {
    let searchBtn = document.createElement("button");
    searchBtn.innerHTML = "?";
    searchBtn.type = "submit";
    searchBtn.setAttribute("id", "s-btn");
    document.getElementById("search").appendChild(searchBtn)
});

// $('form').on('submit', getInfo);

function getInfo(event) {
    // event.preventDefault();

    $.ajax({
         url:'https://api.dictionaryapi.dev/api/v2/entries/en/delta'
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

function retrieveInfo(data) {
    let table = document.getElementById('myTable')

    for (let i = 0; i < wordData.length; i++) {
        let row = ` <tr>
                        <td>${wordData[i].word}</td>
                    </tr>
                    <tr>
                        <td>${wordData[i].origin}</td>
                    </tr>
                    <tr>
                        <td>${wordData[i].meanings}</td>
                    </tr>`
        table.innerHTML += row


    }
}