class Grid {
    obstacles = [];
    players = [];

    constructor(colCount, rowCount, obstaclePart, players) {
        this.colCount = colCount,
            this.rowCount = rowCount,
            this.obstaclePart = obstaclePart,
            this.players = players

        // generations du tableau
        this.generatGrid()

        //generations d'un obstacle
        this.generatObstacle()

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
        isFree =
            this.obstacles.filter(o => o.position === ix).length > 0 ? false : isFree;

        return isFree;
    }
    //création de mes joueur 
    generatPlayer() {
        //je dois crée une fonction qui ressemble au generateur d'obsctacle pour générer mes player au nombre de 2
    }
    movePlayer() {
        // je dois crée une fonction pour le deplacement des mes joueur 
    }
}