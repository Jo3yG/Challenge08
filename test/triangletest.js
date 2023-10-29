const Triangle = require('../lib/triangle.js');

describe('Triangle',() =>{
    describe('Method', () =>{
        it('should return the triangle string',() =>{
            const triangle = new Triangle({
                logoABC:'ABC',
                textColor:'blue',
                shapeLogo:'Triangle',
                bgColor:'#000',
            });
            expect(triangle.render()).toBe(
                `<polygon points='100 0, 0 ,0 50, 00' fill='#000'/>`
            );
        });
    });
});
