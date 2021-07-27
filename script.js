



    

//position element
var utilisateur = document.getElementById('elem1');

utilisateur.addEventListener('click', function() {
    var rect = utilisateur.getBoundingClientRect();
    alert("Position top "+rect.top+" \nPosition right "+rect.right+" \nPosition bottom "+rect.bottom +" \nPosition left "+rect.left);
});