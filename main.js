const Player = function (name, hp, img, weapon, player) {
  this.name = name;
  this.hp = hp;
  this.img = img;
  this.weapon = weapon;
  this.player = player;
};

Player.prototype = {
  attack: function () {
    console.log(`${this.name} Fight...`);
  }
};

const player1 =  new Player ('SCORPION', 100, 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', ['gun, knife'], 1);
const player2 =  new Player ('SUB-ZERO', 100, 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif', ['gun, knife'], 2);

function createPlayer(numberPlayer, Player) {

  let container = document.querySelector('.arenas');
  let player = document.createElement('div');
  let progressbar = document.createElement('div');
  let life = document.createElement('div');
  let name = document.createElement('div');
  let character = document.createElement('div');
  let img = document.createElement('img');
  let button = document.querySelector('.button');
  
  player.setAttribute('class', `${numberPlayer}`);
  progressbar.classList.add('progressbar');
  life.classList.add('life');
  name.classList.add('name');
  character.classList.add('character');
  
  name.innerText = Player.name;
  img.src = Player.img;
  
  container.appendChild(player);
  player.appendChild(progressbar);
  player.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);

  function changeHp () {
    var hpLife = Player.hp;
    console.log(hpLife);
    if (hpLife <= 0) {
    hpLife = 0;
    life.innerText = hpLife;  
    life.style.width = `${hpLife}% `;
  } else if (hpLife >= 100) {
    hpLife = 100;
    life.innerText = hpLife;  
    life.style.width = `${hpLife}% `;
  } else {
    life.innerText = Player.hp;  
    life.style.width = `${hpLife}% `;};
    return hpLife;
   
  };

  changeHp();

    function getHp () {
      let resHp = Player.hp;
      function getRandomArbitrary(min, max) {
        return rand = Math.random() * (max - min) + min;
      }
      getRandomArbitrary(1, 20);
      resHp = resHp - Math.round(rand);

      if (resHp >= 0)  {
        life.innerText = resHp;
        life.style.width = `${resHp}% `;
        Player.hp = resHp;
      } else {resHp = 0;
        life.innerText = resHp;
        life.style.width = `${resHp}% `;
        Player.hp = 0;
        button.disabled = true;
        if (button.disabled = true) {alert(`${Player.name} looser`)};
      };
      
    };

    button.addEventListener('click', getHp);

  };

createPlayer('player1', player1);
createPlayer('player2', player2);




