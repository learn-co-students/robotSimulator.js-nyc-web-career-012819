const Bearing = Object.freeze([
  'north',
  'east',
  'south',
  'west',
]);

class Robot {
	constructor() {
    this.coordinates = [0, 0];
    this.bearing = Bearing[0];
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(bearing) {
    if (Bearing.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw new Error('Invalid Robot Bearing');
    }
  }

  place(specs) {
    this.setCoordinates(specs.x, specs.y);
    this.setBearing(specs.direction);
  }

  turnRight() {
    let current = Bearing.indexOf(this.bearing);
    if (++current < Bearing.length) {
      this.setBearing(Bearing[current]);
    } else {
      this.setBearing(Bearing[0]);
    }
  }

  turnLeft() {
    let current = Bearing.indexOf(this.bearing);
    if (current !== 0) {
      this.setBearing(Bearing[--current]);
    } else {
      this.setBearing(Bearing[3]);
    }
  }

  advance() {
    switch(this.bearing) {
      case 'north':
        this.setCoordinates.call(this, this.coordinates[0], ++this.coordinates[1]);
        break;
      case 'east':
        this.setCoordinates.call(this, ++this.coordinates[0], this.coordinates[1]);
        break;
      case 'south':
        this.setCoordinates.call(this, this.coordinates[0], --this.coordinates[1]);
        break;
      case 'west':
        this.setCoordinates.call(this, --this.coordinates[0], this.coordinates[1]);
        break;
      default:
        throw new Error('Unable to advance. This object\'s bearing property has been corrupted.');
    }
  }

  translateInstructions(string) {
    string.split('').forEach((letter) => {
      switch(letter) {
        case 'A':
          this.advance.call(this);
          break;
        case 'L':
          this.turnLeft.call(this);
          break;
        case 'R':
          this.turnRight.call(this);
          break;
        default:
          throw new Error('Instructions include invalid letters.');
      }
    });
  }
}