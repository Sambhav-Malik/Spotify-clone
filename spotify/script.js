console.log("Welcome to Spotify")
//Initialize the Variables
let songIndex =0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName: "Hold On - Chord Overstreet",filepath : "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songName: "Heeriye - Arijit Singh, Jasleen Royasl",filepath : "songs/2.mp3" , coverpath : "covers/2.jpg"},
    {songName: "Night Changes - One Direction",filepath : "songs/3.mp3" , coverpath : "covers/3.jpg"},
    {songName: "Pehle Bhi Main - Vishal Mishra",filepath : "songs/4.mp3" , coverpath : "covers/4.jpg"},
    {songName: "Waalian - Harnoor",filepath : "songs/5.mp3" , coverpath : "covers/5.jpg"},
    {songName: "Way Down We Go - KALEO",filepath : "songs/6.mp3" , coverpath : "covers/6.jpg"},
    {songName: "Wishes - Hasan Raheem , Talwiinder",filepath : "songs/7.mp3" , coverpath : "covers/7.jpg"},
]
songItems.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})


//audioElement.play();
//Handle play/pause click 
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100 );
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100 ;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
        

    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})  

document.getElementById('next').addEventListener('click' , ()=>{
    if (songIndex >=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if (songIndex <=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})