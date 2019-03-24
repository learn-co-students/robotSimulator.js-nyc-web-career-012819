const directions = ["north", "east", "south", "west"]

class Robot {
	constructor(){
    this.coordinates = [0, 0]
    this.bearing = "north"
  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(direction){
    if (direction === "north" || direction === "south" || direction === "east" || direction === "west"){
      this.bearing = direction
    }else {
      throw 'Invalid Robot Bearing';
    }
  }

  place({x, y, direction}){
    this.coordinates = [x, y]
    this.bearing = direction
  }

  turnRight(){
    if (this.bearing === "west"){
      this.bearing = "north"
    }else{
      this.bearing = directions[directions.indexOf(this.bearing) + 1]
    }
  }

  turnLeft(){
    if (this.bearing === "north"){
      this.bearing = "west"
    }else{
      this.bearing = directions[directions.indexOf(this.bearing) - 1]
    }
  }

  advance(){

    let direction = this.bearing
    switch(direction) {
      case "north":
        this.coordinates[1] ++
        break;
      case "east":
      this.coordinates[0] ++
        break;
      case "south":
      this.coordinates[1] --
        break;
      case "west":
      this.coordinates[0] --
        break;
      default:
        // code block
    }
  }

  translateInstructions(instructions){
    for (var i = 0; i < instructions.length; i++) {
      let instruction = instructions[i]
      switch (instruction){
        case "R":
          console.log("This is: ", this)
          this.turnRight()
          break;
        case "L":
          this.turnLeft()
          break;
        case "A":
          this.advance()
          break;
        default:
      }
    }
  }

}
