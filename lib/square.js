const Shapes = require('./shapes.js');

class Square extends Shape{
    constructor(data){
        super(data);
    }
    render(){
        return `<rect width="100" height="100" rx="15" fill="${this.colorLogoABC}" />`;
    }
}

module.exports = Square;
