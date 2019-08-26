const CONFIG = {
    GRID: {
        COLUMNS: 15,
        ROWS: 10,
        OBSTACLES: 0.1,
        PLAYERS_COUNT: 2,
        WEAPON_COUNT: 0.03
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

    let availableIx = gridObj.getNextFreeCells(25)

    console.log('available indexes : ', availableIx.join(' - '))
    console.log('Wanted indexes : 22 - 23 - 24 - 26 - 27 - 28 - 10 - -5 - -20 - 40 - 55 - 70')

    // do {
    //     // Demander au joueur ce qu'il souhaite faire 


    //     // Suggerer les cases de déplacement disponible


    //     // Le déplacer si besoin


    //     // Changer d'arme si besoin


    //     // Lancer le combat si besoin


    //     // Se défendre s'il le demande

    // } while (gridObj.players.filter(p => p.health <= 0).length === 0)
})