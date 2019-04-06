// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attrs) {
//   this.length = attrs.length;
//   this.width = attrs.width;
//   this.height = attrs.height;
// }

// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }



class CuboidMaker {
  constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

// this assignment seems a bit silly.  Either I'm completely overwriting the method to use the 'size' property, and basically ignoring inheritance,
// or I'm using inheritance, such as below, and have no need to change the methods at all.
// and allowing access to length, width, and height directly would make no sense in something specified to be a cube.
class CubeMaker extends CuboidMaker {
  constructor({ size }) {
    super({
      length: size,
      width: size,
      height: size
    });
  }
}

const cube = new CubeMaker({
  size: 4
});

console.log(cube.volume());
console.log(cube.surfaceArea());