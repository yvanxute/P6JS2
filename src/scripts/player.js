class player {
    constructor(position, weapon, health = 100) {
        this.position = position;
        this.health = health
        this.weapon = weapon
    }

    move(position) {
        this.position = position
    }
}