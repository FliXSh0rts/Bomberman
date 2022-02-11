class Grass extends Block {
    constructor(posX, posY, row, column, type, container_map, size_block) {
        super(posX, posY, row, column, type, container_map, size_block);
        this.object = false;
    }

    set_state(value) {
        if (value == 1) {
            this.element.style.backgroundImage = "url('img/grass.png')";
            this.object = false;
            this.name = "grass";
            this.state = 1;
        }
        else if (value == 0) {
            this.element.style.backgroundImage = "url('img/block.png')";
            this.name = "destructible_block";
            this.state = 0;
        }
        else {
            this.element.style.backgroundImage = "url('img/object_flame.png')";
            this.name = "object_flame"
            this.object = true;
            this.state = 1;
        }
    }

    set_object(value) {
        this.object = value;
    }

    switch_state() {
        if (this.state == 0) {
            if (this.object) {
                this.set_state(2);
            }
            else {
                this.set_state(1);
            }
        }
        else {
            this.set_state(1);
        }
    }

    get_object() {
        return this.object;
    }
}