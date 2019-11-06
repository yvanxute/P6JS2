class Card {
    players = []

    constructor() {
        // creation du template type reutilisable
        this.generatHtml()
        //insertion de l'information player dans html
        this.createElement()
    }

    generatHtml() {
        
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
    }


    createElement(player) {
        htmlPlayer.id = `cardPlayer-${player.id}`;
        console.log('info player', htmlPlayer.id);

        document.querySelector('.js-cardPlayer').innerHTML += htmlPlayer(player);
    }
}