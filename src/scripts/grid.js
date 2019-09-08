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
    generatPlayer() {
        //je dois crée une fonction qui ressemble au generateur d'obsctacle pour générer mes player au nombre de 2

        // Recuperer le nb de joueurs à générer

        // Pour chaque joueur, trouver une case libre et le placer dessus
        const maxIx = this.rowCount * this.colCount - 1
        const playerName = 'joueur' // modif


        for (let i = 0; i < this.playersCount; i++) {
            console.log('i', i) // to do ajouter un id unique a chaque joueur dans le tableau des joueurs pour le retrouver 

            // position aleatoire de player dans le grid          
            let playerIx = -1
            do {
                playerIx = Math.round(Math.random() * (maxIx))

            } while (!this.isCellFree(playerIx))
            let ixHtml = i + 1,
                curentNameHtml = playerName + ixHtml
            // Pour chaque player, trouver une case libre et la placer dessus
            $('#grid').find(`.cell-${playerIx}`) // modif 
                .addClass(`cell-player${ixHtml}`)
            console.log('playerName', curentNameHtml)
            this.players.push(new player(playerIx, curentNameHtml))
            // $('#targetPl').html(playerSt)
            // console.log('player', playerSt)


        }
        console.log('tableau des joueurs: ', this.players)
        // exo = prevoir un 4 joueurs et faire un console.log du joueur ayant l'id 3 .find() soit .filter()
    }

    generateWeapons() {
        // Récupérer le nb d'armes à générer
        const maxIx = this.rowCount * this.colCount - 1
        const weaponsCount = Math.trunc(maxIx * this.weaponsCount);
        const weaponLv = ['lv1 ', 'lv2 ', 'lv3 ', 'lv4 ']
        // const weaponLv = {
        //     lv1: '20',
        //     lv2: '30',
        //     lv3: '40',
        //     lv4: '45',
        //     default: '10'
        // };
        for (let i = 0; i < weaponsCount; i += 4) {

            // position aleatoire de weapon dans le grid          
            let weaponIx = -1
            do {
                weaponIx = Math.round(Math.random() * (maxIx))

            } while (!this.isCellFree(weaponIx))
            // Pour chaque arme, trouver une case libre et la placer dessus
            $('#grid').find(`.cell-${weaponIx}`)
                .addClass(`cell-weapon${ weaponLv[~~(Math.random() * weaponLv.length)]}`)
            this.weapons.push(new weapon(weaponIx))
            $('#targetWp').html(weaponLv)
            // switch (weaponLv) {
            //     case lv1:
            //         // instructions exécutées lorsque le 
            //         // résultat de l'expression correspond à valeur1 
            //         $('#grid').find(`.cell-${weaponIx}`)
            //             .addClass(`cell-weapon${cell-weaponlv1}`)
            //         this.weapons.push(new weapon(weaponIx))
            //         console.log('lv1', lv1)
            //         break;

            //     case lv2:
            //         // instructions exécutées lorsque le 
            //         // résultat de l'expression correspond à valeur2 
            //         console.log('lv2')
            //         break;

            //     case lv3:
            //         // instructions exécutées lorsque le 
            //         // résultat de l'expression correspond à valeurN 
            //         console.log('lv3')
            //         break;

            //     case lv4:
            //         // instructions exécutées lorsque le 
            //         // résultat de l'expression correspond à valeurN 
            //         console.log('lv4')
            //         break;

            //     default:
            //         // instructions exécutées quand aucun des
            //         // les valeurs correspondent à la valeur de l'expression 
            //         console.log('default')
            //         break;
            // }
        }

    }

    setPlayerNewPosition(oldPosition, newPosition) {
        // Supprimer la classe player à la position oldPosition


        // Ajouter la classe player à la position newPosition
    }

    getNextFreeCells(position) {
        let availableIx = []
        for (var i = 0; i < 4; i++) {
            const currentOffset =
                // i est pair
                ((i + 1) % 2) * Math.pow(-1, (i + 1) % 3) +
                // i est impair
                (i % 2) * Math.pow(-1, i % 3) * this.colCount

            availableIx.push(position + currentOffset)
            availableIx.push(position + currentOffset * 2)
            availableIx.push(position + currentOffset * 3)
        }

        return availableIx
    }
}