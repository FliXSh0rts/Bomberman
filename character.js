class Character extends Block {
    constructor(block_start, div_map, type, size_block, num=null) {
        super(block_start.get_x(), block_start.get_y(), block_start.get_row(), 
              block_start.get_column(), type == 0 ? 3 : 4 , div_map, size_block);
        this.type = type == 0 ? "hero" : "enemy";
        this.num = num;
        if (this.num != null) {
            this.element.setAttribute("id", "enemy" + this.num);
            this.element.style.backgroundImage = "url('img/enemy.png')";

        }
        else {
            this.element.setAttribute("id", "hero");
            this.element.style.backgroundImage = "url('img/hero.png')";
        }
        this.power = 1
    }

    _set_x(value) {
        this.x = value;
    }

    _set_y(value) {
        this.y = value;
    }

    _set_row(value) {
        this.row = value;
    }

    _set_column(value) {
        this.column = value;
    }

    move_up(map_blocks) {
        var check = new Array()
        this.element.style.backgroundImage = "url('img/" + this.name + "_back.png')";
        var block = map_blocks[this.row - 1][this.column]
        if (block.get_type() != 0 && block.get_state() != 0) {
            this._animate("top", 1);
            if (block.get_type() == 1 && block.get_object()) {
                check.push(true);
                this.power_up();
            }
            else {
                check.push(false);
            }
            this.y = block.get_y()
            this.x = block.get_x()
            this.row = block.get_row()
            this.column = block.get_column()
            check.push(block.get_x())
            check.push(block.get_y())
        }
        else {
            check.push(false);
        }
        return check;
    }

    move_down(map_blocks) {
        var check = new Array()
        this.element.style.backgroundImage = "url('img/" + this.name + "_front.png')";
        var block = map_blocks[this.row + 1][this.column]
        if (block.get_type() != 0 && block.get_state() != 0) {
            this._animate("top", 0);
            if (block.get_type() == 1 && block.get_object()) {
                check.push(true);
                this.power_up();
            }
            else {
                check.push(false);
            }
            this.y = block.get_y()
            this.x = block.get_x()
            this.row = block.get_row()
            this.column = block.get_column()
            check.push(block.get_x())
            check.push(block.get_y())
        }
        else {
            check.push(false);
        }
        return check;
    }

    move_left(map_blocks) {
        var check = new Array()
        this.element.style.backgroundImage = "url('img/" + this.name + "_left.png')";
        var block = map_blocks[this.row][this.column - 1]
        if (block.get_type() != 0 && block.get_state() != 0) {
            this._animate("left", 1);
            if (block.get_type() == 1 && block.get_object()) {
                check.push(true);
                this.power_up();
            }
            else {
                check.push(false);
            }
            this.y = block.get_y()
            this.x = block.get_x()
            this.row = block.get_row()
            this.column = block.get_column()
            check.push(block.get_x())
            check.push(block.get_y())
        }
        else {
            check.push(false);
        }
        return check;
    }

    move_right(map_blocks) {
        var check = new Array()
        this.element.style.backgroundImage = "url('img/" + this.name + "_right.png')";
        var block = map_blocks[this.row][this.column + 1]
        if (block.get_type() != 0 && block.get_state() != 0) {
            this._animate("left", 0);
            if (block.get_type() == 1 && block.get_object()) {
                check.push(true);
                this.power_up();
            }
            else {
                check.push(false);
            }
            this.y = block.get_y()
            this.x = block.get_x()
            this.row = block.get_row()
            this.column = block.get_column()
            check.push(block.get_x())
            check.push(block.get_y())
        }
        else {
            check.push(false);
        }
        return check;

    }

    power_up() {
        this.power++ 
    }

    _animate(style, direction) {
        var from = parseFloat(this.element.style[style].split("px")[0]);
        var to = direction == 0 ? from + this.size_block : from - this.size_block;
        var el = this.element;
        var start = new Date().getTime(),
            timer = setInterval(function() {
                var step = Math.min(1,(new Date().getTime()-start)/100);
    
                el.style[style] = (from+step*(to-from))+"px";
    
                if( step == 1){
                  clearInterval(timer);
                }
            },25);
        console.log(el.style[style])
        el.style[style] = from+"px";
    }

    bomb(map) {
        new Bomb(this.x, this.y, this.row, this.column, this.div_map, this.size_block, map);
    }
}