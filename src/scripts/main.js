const CONFIG = {
    GRID: {
        COLUMNS: 10,
        ROWS: 10,
        /* OBSTACLES: 0.1 */
     }
}

$(() => {
    const gridObj = new Grid(
        CONFIG.GRID.COLUMNS,
        CONFIG.GRID.ROWS,
        /* CONFIG.GRID.OBSTACLES */
    );
})