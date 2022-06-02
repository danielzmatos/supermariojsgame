const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const reset = document.querySelector('.btn') 
const sun = document.querySelector('.sun')


const resetGame = () =>{
    location.reload()

}

const jump = () =>{
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);


}

const loop = setInterval(() => {

    const pipePostion = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPostion = +window.getComputedStyle(clouds).left.replace('px', '')
    const sunPosition = +window.getComputedStyle(sun).left.replace('px', '')

    if(pipePostion <= 120 &&  pipePostion > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePostion}px`
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPostion}px` 
        sun.style.animation = 'nome';
        sun.style.left = `${sunPosition}px`

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        var button = document.createElement("button");
        button.innerHTML = "Try Again";
        button.classList.add("btn");
        document.body.appendChild(button);
        clearInterval(loop)

        button.addEventListener('click', resetGame)

}},10)

document.addEventListener('keydown',jump)

