class Grid {
    obstacles1 = [];


    constructor(colCount, rowCount, obstacle) {
        this.colCount = colCount,
            this.rowCount = rowCount,
            this.obstacle = obstacle

        // generations du tableau
        this.generatGrid()

        //generations d'un obstacle
        this.generatObstacles()

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

    generatObstacles() {
        const maxIx = this.rowCount * this.colCount - 1
        const obstacleCount = Math.trunc(maxIx * this.obstacle)
        console.log('maxIx :', maxIx)
        console.log('rowcount :', this.rowCount)
        console.log('colcount :', this.colCount)

        // for (let i = 0; i < this.obstacleCount; i++) {

        //     // position aleatoire de l'obstacles dans le grid          
        //     let obstacleIx
        //     do {
        //         obstacleIx = Math.round(Math.random() * (totalCells - 1))
        //     } while (!this.isCellFree(obstacleIx))

        //     //sauvegarde de la position de l'obstacle en l'ajoutant dans la grille (modification de la class)
        //     $('#grid').find(`.cell-${obstacleIx}`).addClass('cell-obstacle')
        //     this.obstacle.push(new obstacle(obstacleIx))
        // }
    }
}