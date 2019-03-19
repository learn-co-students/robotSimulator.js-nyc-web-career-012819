class Robot {
	constructor(){
    this.coordinates = [0,0]
    this.bearing = "north"
  }
  setCoordinates(cord1, cord2){
   return this.coordinates = [cord1, cord2]
  }
  setBearing(bearing){
    const validBearings = ["north", "south", "east", "west"]
    if (validBearings.includes(bearing)){
    this.bearing = bearing
  } else {
    throw new Error('Invalid Robot Bearing');
    }
  }
  place(obj){
    this.setCoordinates(obj["x"], obj["y"])
    this.setBearing(obj["direction"])
  }
  turnRight(){
    if(this.bearing === "north"){
      this.bearing = "east"
    } else if (this.bearing === "east") {
      this.bearing = "south"
    } else if (this.bearing === "south") {
      this.bearing = "west"
    } else if (this.bearing === "west") {
      this.bearing = "north"
    }
  }
  turnLeft(){
    if(this.bearing === "north"){
      this.bearing = "west"
    } else if (this.bearing === "east") {
      this.bearing = "north"
    } else if (this.bearing === "south") {
      this.bearing = "east"
    } else if (this.bearing === "west") {
      this.bearing = "south"
    }
  }
  advance(){
    if(this.bearing === "north"){
      this.coordinates[1]++
    } else if (this.bearing === "east") {
      this.coordinates[0]++
    } else if (this.bearing === "south") {
      this.coordinates[1]--
    } else if (this.bearing === "west") {
      this.coordinates[0]--
    }
  }
  translateInstructions(instruction){
    instruction.split("").forEach(function(instruct){
      console.log(this)
      if (instruct === "L"){
        return this.turnLeft()
      }else if (instruct === "R") {
        return this.turnRight()
      }else if (instruct === "A") {
        return this.advance()
      }
    }.bind(this))

  }
}
