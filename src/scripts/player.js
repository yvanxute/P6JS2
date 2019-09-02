class player {
    constructor(position, weaponDefault = 10, health = 100) {
        this.position = position;
        this.health = health
        this.weapon = weaponDefault
    }

    move(position) {
        this.position = position
    }
}