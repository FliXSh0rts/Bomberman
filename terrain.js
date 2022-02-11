class Map{
    constructor(element, map_size) {
        this.num_block = map_size;
        this.origin_x = 0;
        this.origin_y = 0;
        this.max_x = window.innerWidth;
        this.max_y = window.innerHeight;
        let ref = this.max_x > this.max_y ? this.max_y : this.max_x;
        this.size_block = ref / map_size;
        this.rows = parseInt(this.max_y/this.size_block) % 2 == 0 ? parseInt(this.max_y/this.size_block) -1 : parseInt(this.max_y/this.size_block);
        this.columns = parseInt(this.max_x/this.size_block) % 2 == 0 ? parseInt(this.max_x/this.size_block) -1 : parseInt(this.max_x/this.size_block);
        document.querySelector('style').innerHTML = '.block {width: ' + this.size_block  + 'px;height: ' + this.size_block  + 'px; background-position: center;background-repeat: no-repeat;background-size:100%;position: absolute;display: block;}';
        this.container_map = element;
        this.blocks = new Array();
        for (var i = 0; i < this.rows; i++) {
            this.blocks.push(new Array());
        }
        this._generate_map();
        this._generate_blocks();
    }
    
    _generate_map(){
        var block = null;
        var posX = 0;
        var posY = 0;

        for (var row = 0; row < this.rows; row++) {
            posY = 0;
            for (var column = 0; column < this.columns; column++) {
                if (row == 0 || row == (this.rows - 1)){
                    block = new Block(posX, posY, row, column, 0, this.container_map, this.size_block);
                }
                else if (row % 2 == 0) {
                    if (column % 2 == 0) {
                        block = new Block(posX, posY, row, column, 0, this.container_map, this.size_block);
                    }
                    else {
                        block = new Grass(posX, posY, row, column, 1, this.container_map, this.size_block);
                    }
                }
                else {
                    if (column == 0 || column == (this.columns - 1)) {
                        block = new Block(posX, posY, row, column, 0, this.container_map, this.size_block);
                    }
                    else {
                        block = new Grass(posX, posY, row, column, 1, this.container_map, this.size_block);
                    }
                }
                posY += this.size_block;
                this.blocks[row].push(block);
            }
            posX += this.size_block;
        }
    }

    _generate_blocks() {
        var blocks_available = new Array();
        var max_row = this.blocks.length;
        var max_column = this.blocks[0].length;
        for (var row = 0; row < this.rows; row++) {
            for (var column = 0; column < this.columns; column++) {
                var block = this.blocks[row][column];
                var pos1 = (row == 1 && column == 1);
                var pos2 = (row == 2 && column == 1);
                var pos3 = (row == 1 && column == 2);
                var pos4 = (row == 1 && column == max_column - 1);
                var pos5 = (row == 2 && column == max_column - 1);
                var pos6 = (row == 1 && column == max_column - 2);
                var pos7 = (row == max_row - 1 && column == max_column - 1);
                var pos8 = (row == max_row - 2 && column == max_column - 1);
                var pos9 = (row == max_row - 1 && column == max_column - 2);
                var pos10 = (row == max_row - 1 && column == 1);
                var pos11 = (row == max_row - 2 && column == 1);
                var pos12 = (row == max_row - 1 && column == 2);
                if (!(block.get_type() == 0 || pos1 || pos2 || pos3 || pos4 || pos5 || pos6 || pos7 || pos8 || pos9 || pos10 || pos11 || pos12)) {
                    blocks_available.push(block);
                }
            }
        }

        var num_block_destructible = this.random_int(parseInt(blocks_available.length / 2), blocks_available.length);
        for (var i = 0; i < num_block_destructible; i++) {
            var block = blocks_available[this.random_int(0, blocks_available.length-1)];
            if (this.blocks[block.get_row()][block.get_column()].get_state() != 0) {
                this.blocks[block.get_row()][block.get_column()].set_state(0);
            }
        }

        var num_block_object = this.random_int(4, parseInt(blocks_available.length / 4));
        for (var i = 0; i < num_block_object; i++) {
            var block = blocks_available[this.random_int(0, blocks_available.length - 1)];
            if (this.blocks[block.get_row()][block.get_column()].get_state() == 0) {
                this.blocks[block.get_row()][block.get_column()].set_object(true);
            }
            else if (this.blocks[block.get_row()][block.get_column()].get_state() == 1) {
                this.blocks[block.get_row()][block.get_column()].set_state(2);
            }
            else {
                i--;
            }
        }
    }

    random_int(min, max) { 
        return parseInt(Math.random() * (max - min) + min);
    } 

    get_map() {
        return this.blocks;
    }

    get_size_block() {
        return this.size_block;
    }
}

