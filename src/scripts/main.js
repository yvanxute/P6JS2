const CONFIG = {
    GRID: {
        COLUMNS: 15,
        ROWS: 10,
        OBSTACLES: 0.1,
        PLAYERS_COUNT: 2,
        WEAPON_COUNT: 4
    }
}


$(() => {
    const gridObj = new Grid(
        CONFIG.GRID.COLUMNS,
        CONFIG.GRID.ROWS,
        CONFIG.GRID.OBSTACLES,
        CONFIG.GRID.PLAYERS_COUNT,
        CONFIG.GRID.WEAPON_COUNT
    )

    
    
    let elementWeapon = null
    
    let card = new Card();



    //recupérer cardPlayer
    let html = "";
    var cardPlayer = $('#cardPlayer');

    gridObj.players.forEach(function (element) {
        let currentCardPlayer = card.createElement(element);
        cardPlayer.append(currentCardPlayer)
    });
   
    // observe ce qu'il ce passe sur mon clavier 
   

  

    //Switch sur event.which

});

    //Debut de partie

    //Surveiller les evenements click et clavier pour le déroulement du jeu








    // do {
    //     // Demander au joueur ce qu'il souhaite faire 


    //     // Suggerer les cases de déplacement disponible


    //     // Le déplacer si besoin


    //     // Changer d'arme si besoin


    //     // Lancer le combat si besoin


    //     // Se défendre s'il le demande

    // } while (gridObj.players.filter(p => p.health <= 0).length === 0)
