class Card {
    players = []

    constructor() {
        // creation du template type reutilisable
        this.generatHtml()
        //insertion de l'information player dans html
        this.createElement()
    }

    generatHtml() {
        // je doit rendre cet fonction universel et reutilisable 
        function htmlPlayer(player) {
            return `<div id='${player.name}'>
            <ul> ${player.name}
            <p></P>
            <span id='health'> santé ${player.health}</span>
            <p></P>
            <span id='pw'> puissance arme ${player.weapon}</span>
            </ul>
            </div> `;
        }
        console.log('info player', htmlPlayer);
    }


    createElement(player) {
        //je doit pouvoir recuperer le generatHtml et lui insert les information de chaque player 
        htmlPlayer = `cardPlayer-${player}`;
       

        document.querySelector('.js-cardPlayer').innerHTML += htmlPlayer(player);
    }
}