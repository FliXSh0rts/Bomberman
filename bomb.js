class Bomb extends Block {
    constructor(posX, posY, row, column, div_map, size_block, map) {
        super(posX, posY, row, column, 5, div_map, size_block);
        this.element.setAttribute("id", "bomb" + parseInt(this.x * this.y));
        this.element.style.backgroundImage = "url('img/bomb.png')";
        this.collision = new Array();
        if (map[this.row + 1][this.column].get_type() != 0) {
            /* HAUT */
            this.collision.push(this.map[this.row + 1][this.column])
        }

        if (this.map[this.row - 1][this.column].get_type() != 0) {
            /* BAS */
            this.collision.push(this.map[this.row + 1][this.column])
        }

        if (this.map[this.row][this.column + 1].get_type() != 0) {
            /* DROITE */
            this.collision.push(this.map[this.row + 1][this.column])
        }

        if (this.map[this.row][this.column - 1].get_type() != 0) {7
            /* GAUCHE */
            this.collision.push(this.map[this.row + 1][this.column])
        }

        var flames = new Array();
        for (var i = 0; i <this.collision.length; i++) {
            var flame = document.createElement("div");
            flame.setAttribute("class", "block")
            flame.setAttribute("style", "background-image: url('img/flame.png');top: " + this.collision[i].get_x() + "px;left: " + this.collision[i].get_y() + "px;");
            flames.push(flame);
        }
        setTimeout(function() { flames.forEach(function (value) { value.style.display = "none"}) }, 1000)
        this.element.style.display = "none";
    }   
}