class Card {

    constructor() {}

    createElement(player) {
        let htmlEl = document.createElement("div");
        htmlEl.id = `cardPlayer-${player.id}`
        let htmlInfo = ` ${player.name} 
         santé   ${player.health}  
        puissance arme   ${player.weapon}`;
        console.log(htmlInfo)







        $(htmlEl).html(htmlInfo)
        return htmlEl;
    }

}