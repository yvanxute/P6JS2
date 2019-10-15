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
// crée une fonction pour le deplacement de chaque joueur 
// tous en respectent les movement autoriser 

//crée la fonction d'echange d'arme recuperer les armes qui son dans le champs de mouvement 