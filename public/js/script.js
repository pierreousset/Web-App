var dialog = document.querySelector('dialog');
var showModalButton = document.querySelector('.show-modal');
if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}
showModalButton.addEventListener('click', function() {
    dialog.showModal();
});
dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
});

var dialoge = document.querySelector('#dialoge');
var showModalajout = document.querySelector('.ajout');
if (!dialoge.showModal) {
    dialogPolyfill.registerDialog(dialoge);
}
showModalajout.addEventListener('click', function() {
    dialoge.showModal();
});
dialoge.querySelector('.closes').addEventListener('click', function() {
    dialoge.close();
});

// Calendrier
var dialogess = document.querySelector('#calend');
var showModal = document.querySelector('.calend');
if (!dialogess.showModal) {
    dialogPolyfill.registerDialog(dialogess);
}
showModal.addEventListener('click', function() {
    dialogess.showModal();
});
dialogess.querySelector('.closes').addEventListener('click', function() {
    dialogess.close();
});

// couleur
var dialoges = document.querySelector('.changecouleur');
var showModalcouleur = document.querySelector('.couleur');
if (!dialoges.showModal) {
    dialogPolyfill.registerDialog(dialoges);
}
showModalcouleur.addEventListener('click', function() {
    dialoges.showModal();
});
dialoges.querySelector('.closess').addEventListener('click', function() {
    dialoges.close();
});

//change couleur


function changeBackgroundColor(color) {
    localStorage.setItem('background', document.getElementById("barre_de_navigation").style.backgroundColor = color);
    document.getElementById("barre_couleur").style.backgroundColor = color;
    setStyles();
};

function setStyles() {
    var currentColor = localStorage.getItem('background');
    console.log(currentColor);
    document.getElementById('background').value = currentColor;
    //htmlElem.barre_de_navigation = currentColor;
};