console.log("welcome to spotify")

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/Maan Meri Jaan.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitems = Array.from(document.getElementsByClassName('songtem'));
let songs = [
        {songName:"Kesariya", filepath:"songs/1.mp3", cover:"covers/kesariya.jpg"},
        {songName:"Dance Ka Bhoot", filepath: "songs/2.mp3", cover:"covers/dance ka bhoot.jpg"},       
        {songName:"Arambh Hai Prachand", filepath: "songs/3.mp3", cover:"covers/arambh.jpg"},       
        {songName:"Deva-Deva", filepath: "songs/4.mp3", cover:"covers/deva.jpg"},       
        {songName:"Bing Bing Boo", filepath: "songs/5.mp3", cover:"covers/bing.jpg"},       
        {songName:"Mahabharat Rap", filepath: "songs/6.mp3", cover:"covers/mahabharat.jpeg"},       
        {songName:"Ramayan Revist Rap", filepath: "songs/7.mp3", cover:"covers/ramayan.jpeg"},       
        {songName:"Pawansut(Rap)", filepath: "songs/8.mp3", cover:"covers/pawansut.jpeg"},       
        {songName:"Shiv Tandav Stotram", filepath: "songs/9.mp3", cover:"covers/shiv.jpeg"},       
        {songName:"Maan Meri Jaan", filepath: "songs/10.mp3", cover:"covers/maan.jpeg"},       
]

songitems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName; 
})

// audioElement.play();

//handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})