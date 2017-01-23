import Greeting from './greeting';

let greetMe = new Greeting('Dániel');
document.getElementById('greeting').innerHTML = greetMe.toString();
