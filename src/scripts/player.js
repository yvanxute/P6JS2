class player {
    constructor(position, name, id, weaponDefault = 10, health = 100) {
        this.position = position;
        this.health = health;
        this.weapon = weaponDefault;
        this.name = name;
        this.id = id;
    }

    move(position) {
        this.position = position;
    }
}