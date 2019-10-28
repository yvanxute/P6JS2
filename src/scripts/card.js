class Card {

    constructor() {}

    createElement(player) {

        let playerS = {
            nom: ` ${player.name} `,
            health: `${player.health} `,
            weapon: `${player.weapon} `
        };
        htmlPlayer.id = `cardPlayer-${player.id}`;
        console.log('info player', htmlPlayer.id);


        function htmlPlayer(data) {
            return `<li id='i'> ${data.nom}</li>
             <span> santé ${data.health}</span>
             </br> <span id='pw'> puissance arme ${data.weapon}</span > `;
        }
        document.querySelector('.js-cardPlayer').innerHTML += htmlPlayer(playerS);
    }

}