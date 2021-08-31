

$('#s-word').on('input', function(event) {
    let searchBtn = document.createElement("button");
    searchBtn.innerHTML = "?";
    searchBtn.type = "submit";
    searchBtn.setAttribute("id", "s-btn");
    document.getElementById("search").appendChild(searchBtn)
});
