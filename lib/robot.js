class Robot {
	
	constructor(coordinates = [0,0], bearing = 'north'){
		this.coordinates = coordinates
		this.bearing = bearing
	}

	setCoordinates(x, y){
		this.coordinates[0] = x
		this.coordinates[1] = y
	}

	setBearing(bear){
		if (bear === 'north' || bear === 'south' || bear === 'east' || bear === 'west'){
			this.bearing = bear
		} else {
			throw "Invalid Robot Bearing"
		}
	}

	place(obj){
		this.setCoordinates(obj.x, obj.y)
		this.setBearing(obj.direction)
	}
	turnRight(){
		if (this.bearing === 'north'){
			this.setBearing('east')
		} else if (this.bearing === 'east'){
			this.setBearing('south')
		} else if (this.bearing === 'south'){
			this.setBearing('west')
		} else if (this.bearing === 'west'){
			this.setBearing('north')
		}
	}

	turnLeft(){
		if (this.bearing === 'north'){
			this.setBearing('west')
		} else if (this.bearing === 'west'){
			this.setBearing('south')
		} else if (this.bearing === 'south'){
			this.setBearing('east')
		} else if (this.bearing === 'east'){
			this.setBearing('north')
		}
	}

	advance(){
		if (this.bearing === 'north'){
			++this.coordinates[1]
		} else if (this.bearing === 'south'){
			--this.coordinates[1]
		} else if (this.bearing === 'east'){
			++this.coordinates[0]
		} else if (this.bearing === 'west'){
			--this.coordinates[0]
		}
	}

	translateInstructions(inst){
		if (inst.length === 1){
			if (inst === "L"){
				this.turnLeft()
			} else if (inst === "R"){
				this.turnRight()
			} else if (inst === "A"){
				this.advance()
			}
		} else {
			let directions = inst.split("")
			directions.forEach(element => {
				this.translateInstructions(element)
			});
		}
	}

}
