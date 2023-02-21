console.log("Welcome to CLOUD")



let songIndex = 0;
let audioElement = new Audio('NF-The Search.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "NF-The Search" , filePath: "SONGS/NF-The Search.mp3" , coverPath: "COVERS/nftscover"}
    
    
]




let HTMLaudioElement = new Audio('NF-The Search.mp3');
// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-circle-play');
        masterPlay.classList.add('fa-solid fa-circle-pause');
        gif.style.opacity = 1; 
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-circle-pause');1
        masterPlay.classList.add('fa-solid fa-circle-play');
        gif.style.opacity = 0;
    }
})
// listen to Events
audioElement.addEventListener('timeupdate', ()=>{
        //Update Seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
        myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})






