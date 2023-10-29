const Shapes = require('./shapes.js');

class Circle extends Shapes{
    constructor(data){
        super(data);
    }
    render(){
        return `<circle cx="50" cy="50" r="50" fill="${this.colorLogoABC}" />`;
    }
}

module.exports = Circle;
