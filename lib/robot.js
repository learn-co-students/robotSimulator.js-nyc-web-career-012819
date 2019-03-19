class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0, 0];
    this.directions = ["east", "west", "south", "north"];
    this.bearing = 'north';
  }

  setCoordinates(x, y){
    this.coordinates = [x, y];
  }

  setBearing(movingDirection) {
    if (this.directions.includes(movingDirection)) {
      this.bearing = movingDirection;
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  place(nextMove) {
    this.setCoordinates(nextMove.x, nextMove.y);
    this.setBearing(nextMove.direction);
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.setBearing('east');

    } else if (this.bearing === 'south') {
      this.setBearing('west')

    } else if (this.bearing === 'east') {
      this.setBearing('south')

    } else if (this.bearing === 'west') {
      this.setBearing('north')
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.setBearing('west');

    } else if (this.bearing === 'south') {
      this.setBearing('east')

    } else if (this.bearing === 'east') {
      this.setBearing('north')

    } else if (this.bearing === 'west') {
      this.setBearing('south')
    }
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1]++;

    } else if (this.bearing === 'south') {
      this.coordinates[1]--;

    } else if (this.bearing === 'east') {
      this.coordinates[0]++;

    } else if (this.bearing === 'west') {
      this.coordinates[0]--;
    }
  }

  translateInstructions(input) {
    let instruction = input.split('');
    instruction.forEach(move => {
      if (move === 'L') {
        this.turnLeft();
      } else if (move === 'R') {
        this.turnRight();
      } else if (move === 'A') {
        this.advance();
      }
    })
  }

}
