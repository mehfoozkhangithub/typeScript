// type Direction = 'east' | 'west' | 'south' | 'north';
/*
//! this is numaric enum

enum Direction {
  East,
  Weast,
  North,
  South,
}
 */
var Direction;
(function (Direction) {
    Direction["East"] = "east";
    Direction["West"] = "west";
    Direction["North"] = "north";
    Direction["South"] = "south";
})(Direction || (Direction = {}));
let a = Direction.East;
