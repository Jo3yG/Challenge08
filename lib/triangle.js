const Shapes = require('./shapes.js');

class Triangle extends Shape{
    constructor(data){
        super(data);
    }
    render(){
        return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.colorLogoABC}" />`;
    }
}

module.exports = Triangle;
