class GRID {
    obstacles1 = []
    constructor(colCount, rowCount, obstacles1) {
        this.colCount = colCount
        this.rowCount = rowCount
        this.obstacles1 = obstacles1

        // generations du tableau
        this.generatGrid()

        //generations d'un obstacle
        this.generatObstacles()

    }
    generatGrid() {
        const grid = $('#grid')
        for (let i = 0; i < this.rowCount; i++) {
            const tr = document.createElement('tr')
            for (let j = 0; j < this.colCount; j++){
                const cellIx = i * this.colCount + j
                const td = document.createElement('td')
                $(td).addClass('cell cell-${cellIx}')
                tr.append(td)
            }
            grid.append(tr)
        }
    }

    generatObstacles() {
        const totalCells = this.rowcount * this.colCount
        const obstaclesCount = Math.trunc(totalCells * this.obstacles1)

        for ( let i = 0; i < this.obstaclesCount; i++) {
            
            // position aleatoire de l'obstacles dans le grid          
            let obstacleIx
            do {
                obstacleIx = Math.round(Math.random() * (totalCells - 1))
            } while (!this.isCellFree(obstacleIx))

            //sauvegarde de la position de l'obstacle en l'ajoutant dans la grille (modification de la class)
            $('#grid').find('.cell-${obstacleIx}').addClass('cell-obstacle')
            this.obstacles.push(new obstacle(obstacleIx))
        }
    }
}


