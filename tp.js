const design = document.querySelector("#input-design"); // titre du filme
const note = document.querySelector("#input-note"); // note du film

const boutonStart = document.querySelector("#btn-start");
const alertCtrl = document.querySelector("ion-alert-controller");

const liste_Score = document.querySelector("#listescore"); 



boutonStart.addEventListener('click', () => {
    const designation_recup = design.value;
    const notation_recup = note.value;
    

    if(designation_recup.trim().length <= 0 ){
        alertCtrl.create({
            message : 'Veuillez entrez un film ou une note correcte',
            header: 'Erreur',
            buttons : ["OK"]
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }
    // creer l'élément mère de la liste
    newItem = document.createElement('ion-item');
    newItem.innerHTML =  `
    <ion-avatar slot="start">
    <img src= "etoile.jpg">
    </ion-avatar>
    <ion-label>
    <h3>${designation_recup }</h3>
    <p>note : ${notation_recup}/5</p>
    </ion-label>`;
    liste_Score.appendChild(newItem);
    design.value = ""; // vider le input une fois valider
    note.value = "5"; // par defaut on remis 5 
});
