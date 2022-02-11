var hero = null;
var map = null;
var blocks = null;
var bomb = null;

document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'ArrowUp':
            var move = hero.move_up(map.get_map());
            if (move[0]) {
                blocks[move[1]][move[2]].switch_state();
            }
            break;
        case 'ArrowDown':
            var move = hero.move_down(map.get_map());
            if (move[0]) {
                blocks[move[1]][move[2]].switch_state();
            }
            break;
        case 'ArrowLeft':
            var move = hero.move_left(map.get_map());
            if (move[0]) {
                blocks[move[1]][move[2]].switch_state();
            }
            break;
        case 'ArrowRight':
            var move = hero.move_right(map.get_map());
            if (move[0]) {
                blocks[move[1]][move[2]].switch_state();
            }
            break;
        case 'Space':
                hero.bomb(map.get_map());
            break;
        default:
            break;
    } 
});