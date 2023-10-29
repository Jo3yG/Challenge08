const Square = require('../lib/square.js');

describe('Square',() =>{
    describe('Method', () =>{
        it('should return the square string',() =>{
            const square = new Square({
                logoABC:'ABC',
                textColor:'blue',
                shapeLogo:'Square',
                bgColor:'green',
            });
            expect(square.render()).toBe(
                `<rect width='100' height='100' rx='15' fill='green'>/>`
            );
        });
    });
});
