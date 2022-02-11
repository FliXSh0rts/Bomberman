class Block {
    constructor(posX, posY, row, column, type, div_map, size_block) {
        this.name = null;
        this.x = posX;
        this.y = posY;
        this.row = row;
        this.column = column;
        this.div_map = div_map;
        this.type = type;
        this.state = null;
        this.element = null;
        this.size_block = size_block;
        this._create_bloc_map();
    }

    _create_bloc_map() {
        var div = document.createElement("div");
        switch (this.type) {
            case 0:
                this.name = "indestructible_block";
                this.state = 0;
                div.setAttribute("class", "block indestructible_block");
                div.setAttribute("style", "top: " + this.x + "px;left:" + this.y + "px;")
                break;

            case 1:
                this.name = "grass";
                this.state = 1;
                div.setAttribute("class", "block");
                div.setAttribute("style", "top: " + this.x + "px;left:" + this.y + "px;")
                div.style.backgroundImage = "url('img/grass.png')"
                break;

            case 3:
                div.setAttribute("class", "block");
                div.setAttribute("style", "top: " + this.x + "px;left:" + this.y + "px;")
                div.style.backgroundSize = 70 + "%"
                this.name = "hero";
                break;

            case 4:
                div.setAttribute("class", "block");
                div.setAttribute("style", "top: " + this.x + "px;left:" + this.y + "px;")
                this.name = "enemy";
                break;
            case 5:
                div.setAttribute("class", "block");
                div.setAttribute("style", "top: " + this.x + "px;left:" + this.y + "px;")
                this.name = "bomb";
            default:
                break;
        }
        this.div_map.appendChild(div);
        this.element = div;
    }

    get_x() {
        return this.x;
    }

    get_y() {
        return this.y;
    }

    get_pos() {
        return new Array(this.max_x, this.max_y);
    }

    get_row() {
        return this.row;
    }

    get_column() {
        return this.column;
    }

    get_type() {
        return this.type;
    }

    get_state() {
        return this.state;
    }

    get_element() {
        return this.element;
    }

    get_div_map() {
        return this.div_map;
    }
}