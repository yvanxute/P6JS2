class Card {

    constructor() {}

    createElement(player) {
        let htmlEl = document.createElement("div");
        htmlEl.id = `cardPlayer-${player.id}`;

        let htmlInfo = ` ${player.name} `;
        let htmlEl2 = document.createElement("span");

        let htmlSante = `santé ${player.health} `;
        let htmlPw = `puissance arme ${player.weapon} `;
        htmlEl2 = htmlSante + htmlPw;


        console.log(htmlSante + player.id)




        $(htmlEl).html(htmlInfo + htmlEl2)
        return htmlEl;
    }

}