const isColor = require('is-css3-color');

class Shapes{
    constructor({logoABC, textColor, colorLogoABC, shapeLogo}){
        this.logoABC = logoABC;
        this.textColor = textColor;
        this.colorLogoABC = colorLogoABC;
        this.shapeLogo = shapeLogo;
    }
    ifNoResponse(input){
        if(!input)throw new Error('Need an answer');
    }
    render(){
        throw new Error('need a render method');
    }
}
module.exports = Shapes;
