function create() {
    var name = document.getElementById("name").value;
    url = "summary.html?name="+encodeURI(name);
    window.location.href= encodeURI(url);

}