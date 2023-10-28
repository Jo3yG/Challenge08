const inquirer = require('inquirer');

inquirer
.createPromptModule([{
    type:'input',
    name:'logoABC',
    message:'Please enter 1-3 letters for your logo...or else',
},
{
    type:'input',
    name:'textColor',
    message:'Please enter color for your text with word or hexidecimal',
},
{
    type:'input',
    name:'colorLogoABC',
    message:'Please enter color for your logo background',
},
{
    type:'list',
    name:'shapeLogo'
    message:'Please choose a shape',
    choices:['Triangle','Circle','Square'],
},
])
.then((data) =>{
    
})
