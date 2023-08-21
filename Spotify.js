console.log("Welcome to Spotify");
let songsIndex = 0;
let audioElement = new Audio('songs/1.mp3');
//audioElement.play();

let masterPlay = document.getElementById('masterPlay') 
let myProgressBar = document.getElementById('myProgressBar')
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Let me Love you", filePath:"songs/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "In A Dream ", filePath:"2.mp3", coverPath:"cover/2.jpg"},
    {songName: "The Sad song", filePath:"3.mp3", coverPath:"cover/3.jpg"},
    {songName: "Free", filePath:"4.mp3", coverPath:"cover/4.jpg"},
    {songName: "See You Again", filePath:"5.mp3", coverPath:"cover/5.jpg"},
    {songName: "limit", filePath:"6.mp3", coverPath:"cover/6.jpg"},
    {songName: "Fitoor", filePath:"7.mp3", coverPath:"cover/7.jpg"}
]
songItems.forEach((element , i) =>{
    //console.log(element , i);
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();

//Handle play/pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// //Listen to Events
audioElement.addEventListener('timeupdate', () =>{
    console.log('timeupdate');
    //update see
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',() =>{
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100; 
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')
    })
}


    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();
            
            songsIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-play-circle')
            e.target.classList.add('fa-pause-circle')
            
            audioElement.src = `songs/${songsIndex+1}.mp3`;
            masterSongName.innerText = songs[songsIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle')
            masterPlay.classList.add('fa-pause-circle')
        })
      
    })
document.getElementById('next').addEventListener('click',() =>{
    if(songsIndex>=6){
songsIndex = 0;
    }else{
        songsIndex += 1;
    }
    audioElement.src = `songs/${songsIndex+1}.mp3`;
    masterSongName.innerText = songs[songsIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    
} )
document.getElementById('previous').addEventListener('click',() =>{
    if(songsIndex<0){
songsIndex = 0;
    }else{
        songsIndex -= 1;
    }
    audioElement.src = `songs/${songsIndex+1}.mp3`;
    masterSongName.innerText = songs[songsIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
   
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    
} )
  
