const Circle = require('../lib/circle.js');

describe('Circle',() =>{
    describe('Method', () =>{
        it('should return the circle string',() =>{
            const circle = new Circle({
                logoABC:'ABC',
                textColor:'blue',
                shapeLogo:'Circle',
                bgColor:'green',
            });
            expect(circle.render()).toBe(
                `<circle cx='50' cy='50' r='50' fill='blue'/>`
            );
        });
    });
});
