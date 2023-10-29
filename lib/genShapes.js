const Triangle = require('./triangle.js');
const Square = require('./square.js');
const Circle = require('./circle.js');

const genShapes = (data) =>{
    const {shapeLogo} = data;
    switch(shapeLogo){
        case 'Triangle':
            const genTriangle = new Triangle(data);
            return genTriangle;
            break;

            case 'Square':
            const genSquare = new Square(data);
            return genSquare;
            break;

            case 'Circle':
            const genCircle = new Circle(data);
            return genCircle;
            break;
    }
};

module.exports = genShapes;
