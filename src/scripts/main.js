const CONFIG = {
    GRID: {
        COLUMNS: 15,
        ROWS: 10,
        OBSTACLE: 0.1
    }
}

$(() => {
    const gridObj = new Grid(
        CONFIG.GRID.COLUMNS,
        CONFIG.GRID.ROWS,
        CONFIG.GRID.OBSTACLE
    );
})