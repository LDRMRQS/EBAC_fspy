$(document).ready(function() {
    fetch('https://api.github.com/users/LDRMRQS')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        $('#name').text(json.name);
        $('#username').text(json.login);
        $('#avatar').attr('src', json.avatar_url);
        $('#repos').text(json.public_repos);
        $('#followers').text(json.followers);
        $('#following').text(json.following);
        $('#link').attr('href', json.html_url);
    })
    .catch(function(erro) {
        alert('erro', erro)
    })
})
