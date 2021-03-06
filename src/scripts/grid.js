class Grid {
    obstacles = [];


    constructor(colCount, rowCount, obstaclePart) {
        this.colCount = colCount,
            this.rowCount = rowCount,
            this.obstaclePart = obstaclePart

        // generations du tableau
        this.generatGrid()

        //generations d'un obstacle
        this.generatObstacle()

    }
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

    generatObstacle() {
        const maxIx = this.rowCount * this.colCount - 1
        const obstacleCount = Math.trunc(maxIx * this.obstaclePart);
        console.log('maxIx :', maxIx)
        console.log('rowcount :', this.rowCount)
        console.log('colcount :', this.colCount)

        for (let i = 0; i < obstacleCount; i++) {

            // position aleatoire de l'obstacles dans le grid          
            let obstacleIx = -1
            do {
                obstacleIx = Math.round(Math.random() * (maxIx))

            } while (!this.isCellFree(obstacleIx))
            //sauvegarde de la position de l'obstacle en l'ajoutant dans la grille (modification de la class)
            $('#grid').find(`.cell-${obstacleIx}`).addClass('cell-obstacle')
            this.obstacles.push(new obstacle(obstacleIx))
            console.log('osb :', obstacleIx)

        }
    }
    isCellFree(ix) {
        let isFree = true;
        // controle dans le tableau des obstacles que la position ix et libre 
        isFree =
            this.obstacles.filter(o => o.position === ix).length > 0 ? false : isFree;

        return isFree;
    }
}