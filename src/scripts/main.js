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

    let availableIx = gridObj.getNextFreeCells()
    let currentPlayer = null
    let elementWeapon = null
    let nextFreeCells = []
    let card = new Card();



    //recupérer cardPlayer
    let html = "";
    var cardPlayer = $('#cardPlayer');

    gridObj.players.forEach(function (element) {
        let currentCardPlayer = card.createElement(element);
        cardPlayer.append(currentCardPlayer)
    });
    // creation de fonction pour changer l'utilisateur 
    const changePlayer = () => {
        //supprimer l'etat precedent des possibilité de mouvement
        if (nextFreeCells.length > 0) {
            nextFreeCells = gridObj.getNextFreeCells(currentPlayer.position);
            //griser les cases des mouvements possible
            nextFreeCells.forEach(function (element) {
                $('#grid').find(`.cell-${element}`)
                    .removeClass('cell-move')
            });
        }

        //modifier le currentPlayer
        //recupérer le joueur 1 en debut de partie si le currentPlayer n'existe pas (c'est le premier tour et c'est le tour du joueur 1)

        if (currentPlayer && currentPlayer.id === 1) {
            currentPlayer = gridObj.getPlayer(2);
        } else {
            currentPlayer = gridObj.getPlayer(1);
        }
        //determiner les possibilités de mouvement du currentPlayer
        nextFreeCells = gridObj.getNextFreeCells(currentPlayer.position);
        // determiner s'il y a une arme
        let elementWeapon = document.getElementsByClassName('cell-weapon');
        let elementPlayer = document.getElementsByClassName('cell-player');
        let element = 
        console.log(elementWeapon)
        console.log(elementPlayer)
        //griser les cases des mouvements possible
        nextFreeCells.forEach(function (element) {
            $('#grid').find(`.cell-${element}`)
                .addClass('cell-move')
                .click(function (event) {
                        console.log($(event.target).attr('id'))
                        // obsevartion du click sur les mouvements possible joueur ou armes
                        // Si la cellule est autorisée au déplacement et que les joueurs ne sont pas en contact (pas de combat)
                        let type = $(event.target).attr('class');
                        if (type.search('weapon') !== -1) {
                            return elementWeapon = console.log('arme N°' + type.slice(-1));
                        }
                        if (type.search('player') !== -1) {
                            return elementPlayer = console.log('player ' + type.slice(-1));
                        }


                    }


                )
        });
    }
    // observe ce qu'il ce passe sur mon clavier 
    const handleEvents = () => {

        $('#changePlayer').click(() => {
            console.log("CHANGE PLAYER")
            changePlayer()
        });

        //Récupérer tous les evenements clavier sur l'écran
        $(window).keyup(function (event) {
            console.log(event.which)
        });

        //Switch sur event.which

    };

    //Debut de partie
    changePlayer()
    //Surveiller les evenements click et clavier pour le déroulement du jeu
    handleEvents()





    console.log(currentPlayer);

    // do {
    //     // Demander au joueur ce qu'il souhaite faire 


    //     // Suggerer les cases de déplacement disponible


    //     // Le déplacer si besoin


    //     // Changer d'arme si besoin


    //     // Lancer le combat si besoin


    //     // Se défendre s'il le demande

    // } while (gridObj.players.filter(p => p.health <= 0).length === 0)
})