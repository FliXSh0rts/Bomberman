var num_monster = parseInt(document.getElementById("listbox-monsters").value);
var num_row = parseInt(document.getElementById("listbox-map").value.split(" ")[0]);

function start() {
    map = new Map(document.getElementById("map"), num_row);
    blocks = map.get_map();
    document.getElementById("modal").style.display = "none";
    hero = new Character(blocks[1][1], document.getElementById("map"), 0, map.get_size_block());
    bomb = new Bomb(null, null, null, null) 
}

    