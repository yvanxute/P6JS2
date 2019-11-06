class Grid {
    obstacles = []
    players = []
    weapons = []


    constructor(colCount, rowCount, obstaclePart, playersCount, weaponsCount) {
        this.colCount = colCount
        this.rowCount = rowCount
        this.obstaclePart = obstaclePart
        this.playersCount = playersCount
        this.weaponsCount = weaponsCount

        // generations du tableau
        this.generatGrid()

        //generations d'un obstacle
        this.generatObstacle()

        // Génération des armes
        this.generateWeapons()

        //generations des joueurs
        this.generatPlayer()

    }
    // création de ma grille
    generatGrid() {
        const grid = $('#grid')
        for (let i = 0; i < this.rowCount; i++) {
            const tr = document.createElement('tr')
            for (let j = 0; j < this.colCount; j++) {
                const cellIx = i * this.colCount + j
                const td = document.createElement('td')
                $(td).addClass(`cell cell-${cellIx}`)
                td.id = cellIx;
                tr.append(td)
            }
            grid.append(tr)
        }
    }
    // création des obstacles 
    generatObstacle() {
        const maxIx = this.rowCount * this.colCount - 1
        const obstacleCount = Math.trunc(maxIx * this.obstaclePart);

        for (let i = 0; i < obstacleCount; i++) {

            // position aleatoire de l'obstacles dans le grid          
            let obstacleIx = -1
            do {
                obstacleIx = Math.round(Math.random() * (maxIx))

            } while (!this.isCellFree(obstacleIx))
            //sauvegarde de la position de l'obstacle en l'ajoutant dans la grille (modification de la class)
            $('#grid').find(`.cell-${obstacleIx}`)
                .addClass('cell-obstacle')
            this.obstacles.push(new obstacle(obstacleIx))
        }
    }
    isCellFree(ix) {
        let isFree = true;

        // controle dans le tableau des obstacles que la position ix et libre 
        isFree = this.obstacles.filter(o => o.position === ix).length > 0 ? false : isFree

        // Vérifier la présence d'arme
        isFree = this.weapons.filter(o => o.position === ix).length > 0 ? false : isFree

        // Vérifier la présence de joueur
        isFree = this.players.filter(o => o.position === ix).length > 0 ? false : isFree

        return isFree;
    }
    //création de mes joueur 
    generatPlayer = () => {
        //je dois crée une fonction qui ressemble au generateur d'obsctacle pour générer mes player au nombre de 2

        // Recuperer le nb de joueurs à générer

        // Pour chaque joueur, trouver une case libre et le placer dessus
        const maxIx = this.rowCount * this.colCount - 1

        let playerName = [
            "joueur",
        ];


        for (let i = 0; i < this.playersCount; i++) {
            //  console.log('i', i) // to do ajouter un id unique a chaque joueur dans le tableau des joueurs pour le retrouver 
            // position aleatoire de player dans le grid          
            let playerIx = -1
            do {
                playerIx = Math.round(Math.random() * (maxIx))
                // to do lever une excetion si un joueur sur trouve a coter de l'index d'insertion

            } while (!this.isCellFree(playerIx))
            // ajouter condition que les cases a coter n'y a pas de joueur ni haut ni bas ni droite ni gauche 
            let ixHtml = i + 1,
                curentNameHtml = playerName + ixHtml
            // Pour chaque player, trouver une case libre et la placer dessus
            $('#grid').find(`.cell-${playerIx}`)
                .addClass(`cell-player cell-player${ixHtml}`);

            this.players.push(new player(playerIx, curentNameHtml, i + 1));
            console.log("index player", playerIx);
        }


    }

    generateWeapons() {
        // Récupérer le nb d'armes à générer
        const maxIx = this.rowCount * this.colCount - 1

        let weaponLv = [
            "lv",
        ];

        for (let i = 0; i < this.weaponsCount; i++) {

            // position aleatoire de weapon dans le grid          
            let weaponIx = -1
            do {
                weaponIx = Math.round(Math.random() * (maxIx))

            } while (!this.isCellFree(weaponIx))
            let wpHtml = i + 1,
                wpCurentNameHtml = weaponLv + wpHtml

            // Pour chaque arme, trouver une case libre et la placer dans l'element ayant l'index un nouvel elem

            let elementWeapon = document.createElement('p');

            $(elementWeapon).addClass(`cell-weapon cell-weapon${wpHtml}`);
            elementWeapon.id = weaponIx;

            $('#grid').find(`.cell-${weaponIx}`)
                .append(elementWeapon);

            this.weapons.push(new weapon(weaponIx, wpCurentNameHtml, i + 1))

            console.log("index armes", weaponIx);
        }


    };

    setPlayerNewPosition(oldPosition, newPosition) {
        // Supprimer la classe player à la position oldPosition


        // Ajouter la classe player à la position newPosition
    };
    // formule pour determiner les case de deplacement possible
    getNextFreeCells(position) {
        let availableIx = []
        for (var i = 0; i < 4; i++) {
            let direction = 'V';
            const currentOffset =
                // i est pair
                ((i + 1) % 2) * Math.pow(-1, (i + 1) % 3) +
                // i est impair
                (i % 2) * Math.pow(-1, i % 3) * this.colCount



            if (currentOffset === -1 || currentOffset === 1) {
                direction = 'H';
            }
            //on verifie a chaque mouvement si cela et possible ou pas 
            if (this.verifObstacleOrLimit(position + currentOffset, position, direction)) {
                availableIx.push(position + currentOffset);
                if (this.verifObstacleOrLimit(position + currentOffset * 2, position, direction)) {
                    availableIx.push(position + currentOffset * 2);
                    if (this.verifObstacleOrLimit(position + currentOffset * 3, position, direction)) {
                        availableIx.push(position + currentOffset * 3);
                    }
                }
            }

        }

        return availableIx
    };

    //Fonction qui va vérifier si cette position est sur un obstacle ou si elle a dépassé la limite
    verifObstacleOrLimit(position, player, direction) {
        let showPosition = true;
        showPosition = this.obstacles.filter(o => o.position === position).length > 0 ? false : true;
        //si la position et occupée il n'ai pas utile de faire la condition si ce n'ai pas le cas on examine alors les possibilité
        if (direction === 'H' && showPosition) {
            let playerRow = Math.floor(player / this.colCount) + 1;
            let showRow = Math.floor(position / this.colCount) + 1;
            showPosition = playerRow !== showRow ? false : true;
        }

        return showPosition;
    }

    //recuperation des objets players
    getPlayer(id) {
        return this.players.find(function (element) {
            console.log('get player', getPlayer);
            return element.id == id
        })
    };
    displayPlayer() {
        return this.player = $("player").value;

    };
    //recuperation des objets weapons
    getWeapon(id) {
        return this.weapons.find(function (element) {
            return element.id == id

        })

    };
    displayWeapon() {
        return this.weapon = $("weapon").value;
    };

    // creation de fonction pour changer l'utilisateur 

    changePlayer = () => {
        let currentPlayer = null
        let nextFreeCells = [];
        availableIx = getNextFreeCells();
        //supprimer l'etat precedent des possibilité de mouvement
        if (nextFreeCells.length > 0) {
            nextFreeCells = getNextFreeCells(currentPlayer.position);
            //griser les cases des mouvements possible
            nextFreeCells.forEach(function (element) {
                $('#grid').find(`.cell-${element}`)
                    .removeClass('cell-move')
            });
        }

        //modifier le currentPlayer
        //recupérer le joueur 1 en debut de partie si le currentPlayer n'existe pas (c'est le premier tour et c'est le tour du joueur 1)

        if (currentPlayer && currentPlayer.id === 1) {
            currentPlayer = getPlayer(2);
        } else {
            currentPlayer = getPlayer(1);
        }
        //determiner les possibilités de mouvement du currentPlayer
        nextFreeCells = getNextFreeCells(currentPlayer.position);
        // determiner s'il y a une arme
        // let elementWeapon = document.getElementsByClassName('cell-weapon');
        // let elementPlayer = document.getElementsByClassName('cell-player');
        let element1 = document.getElementById(currentPlayer);
        let element2 = document.getElementById(weapon.position);
        console.log('element2', element2);
        console.log('element1', element1);
        console.log('elementWeapon', elementWeapon);
        console.log('elementPlayer', elementPlayer);
        //griser les cases des mouvements possible
        nextFreeCells.forEach(function (element) {
            $('#grid').find(`.cell-${element}`)
                .addClass('cell-move')
                .click(function (event) {
                    console.log($(event.target).attr('id'))
                    // obsevartion du click sur les mouvements possible joueur ou armes
                    // Si la cellule est autorisée au déplacement et que les joueurs ne sont pas en contact (pas de combat)
                    // let type = $(event.target).attr('class');
                    let type = $(event.target).attr('id');
                    if (type.search('weapon') !== -1) {
                        return element2 = console.log('arme N°' + includes(element2));
                    }
                    if (type.search('player') !== -1) {
                        return element1 = console.log(currentPlayer.includes());
                    }
                })
        });
    }

    handleEvents = () => {

        $('#changePlayer').click(() => {
            console.log("CHANGE PLAYER")
            changePlayer()
        });

    }
    //Récupérer tous les evenements clavier sur l'écran
    //   $(window).keyup(function (event) {
    //       console.log(event.which)
    // };

}