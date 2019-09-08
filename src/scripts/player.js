class player {
    constructor(position, name, weaponDefault = 10, health = 100) {
        this.position = position;
        this.health = health
        this.weapon = weaponDefault
        this.name = name
    }

    move(position) {
        this.position = position
    }
}