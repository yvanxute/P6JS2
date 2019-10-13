class Card {

    constructor() {}

    createElement(player) {
        let html = '<div>' + player.name + " santé " + player.health + " puissance arme " + player.weapon + '</div > ';
        return html;
    }

}