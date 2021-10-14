const Player = function (name, hp, img, weapon) {
  this.name = name;
  this.hp = hp;
  this.img = img;
  this.weapon = weapon;
};

Player.prototype = {
  attack: function () {
    console.log(`${this.name} Fight...`);
  }
};

const player1 =  new Player ('SCORPION', 50, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', ['gun, knife']);
const player2 =  new Player ('SUB-ZERO', 100, 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif', ['gun, knife']);

function createPlayer(numberPlayer, Player) {

  const container = document.querySelector('.container');
  const arenas = document.createElement('div')
  const player = document.createElement('div');
  const progressbar = document.createElement('div');
  const life = document.createElement('div');
  const name = document.createElement('div');
  const character = document.createElement('div');
  const img = document.createElement('img');
  
  player.setAttribute('class', `${numberPlayer}`);
  arenas.classList.add('arenas');
  progressbar.classList.add('progressbar');
  life.classList.add('life');
  name.classList.add('name');
  character.classList.add('character');
  
  name.innerText = Player.name;
  img.src = Player.img;
  life.innerText = Player.hp;
  
  container.appendChild(arenas);
  arenas.appendChild(player);
  player.appendChild(progressbar);
  player.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);
};

createPlayer('player1', player1);
createPlayer('player2', player2);
