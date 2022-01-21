
musicName =document.getElementById('tenbaihat');
musicArtist = document.getElementById('casi');
var audio =document.getElementById('audio');
  const playbutton = document.getElementById('btn');
  const nextbutton = document.getElementById('next');
const prebutton = document.getElementById('pre');
const showbutton = document.getElementById('show');
const ulTag = document.getElementById('listsongs');
const musicImg =document.getElementById('music-img');
let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
let videoIndex = Math.floor((Math.random() * allVideo.length) + 1);
isMusicPaused = true;
const stopbutton = document.getElementById('stopbtn');
const backbutton = document.getElementById('backbtn');
const back_album_button = document.getElementById('back-album-btn');
const video = document.getElementById('vd');


playbutton.addEventListener("click",()=>{
 loadMusic(musicIndex);
  document.getElementById('vd').pause();

for (let i = 0; i < allMusic.length; i++) {
  let liTag = `<a class="ui item" a-index="${i + 1}" id="song" style="padding:10px;background:#1b1c1d;">
  <div class="ui small image">
      <img style="height:170px; object-fit: cover;border:2px solid white" id='songplaying' src="images/${allMusic[i].src}.jpg">
    </div>
<div class="middle aligned content">
      <div class="header">${allMusic[i].name}</div>
      <div class="meta">
        <span class="stay">${allMusic[i].casi}</span>
      </div>

      <div class="extra">
       <span id="${allMusic[i].path}" class="audio-duration" style="color:#21ba45"></span>
      </div>
  
                <audio class="${allMusic[i].path}" src="songs/${allMusic[i].src}.mp3"></audio>  
      </div>
      
              </a>`;
  ulTag.insertAdjacentHTML("beforeend", liTag);
}

  playingSong(); 

 $('#mainsongs')
  .transition({
    animation : 'scale',
  });
  $('#video').transition('fade up');
   $('#btn').transition('fade');
    $('#image-album').transition('scale');
setTimeout(()=>{
    $('#bg-album').transition('slide down');
$('#backbtn').transition('fade'); 
 $('#stopbtn').transition('fade');
},300);
setTimeout(()=>{
   audio.play();
$('#listsongs').transition('fade up');
},600);

setTimeout(()=>{
$('#bottom-sidebar').transition('slide up');
anime({
  targets: '#ys',
  fontSize : ['30px', '50px'],
});
},800)


});


audio.onplay=function(){
   stopbutton.innerHTML="TẠM DỪNG";
   stopbutton.className ="ui black button";
    document.getElementById('vd').pause();
   stopbutton.addEventListener('click',()=>{
  audio.pause();
});
}

audio.onpause=function(){
   stopbutton.innerHTML="TIẾP TỤC";
   stopbutton.className ="ui green button";
   stopbutton.addEventListener('click',()=>{
  audio.play();
});
}

back_album_button.addEventListener('click',()=>{
  $('#video').transition('fade up');
    $('#back-album-btn').transition('fade');
    $('#image-album').transition('scale');
setTimeout(()=>{
    $('#bg-album').transition('slide down');
$('#backbtn').transition('fade'); 
},300);
setTimeout(()=>{
$('#listsongs').transition('fade up');
},600);

setTimeout(()=>{
$('#bottom-sidebar').transition('slide up');
anime({
  targets: '#ys',
  fontSize : ['30px', '50px'],
});
},800)


});


backbutton.addEventListener('click',()=>{
  $('#bottom-sidebar').transition('slide up');
$('#listsongs').transition('fade up');
$('#backbtn').transition('fade');
setTimeout(()=>{
  $('#bg-album').transition('slide down');
$('#image-album').transition('scale');
$('#back-album-btn').transition('fade');
},300);
setTimeout(()=>{
 $('#video').transition('fade up');
 anime({
  targets: '#ys',
  fontSize : ['50px', '30px'],
});
},600)
});


function loadMusic(indexNumb){
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].casi;
  musicImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
  audio.src = `musics/${allMusic[indexNumb - 1].path}.mp3`;
  pre.innerHTML = '<i class="big arrow circle left icon"></i>'
  next.innerHTML ='<i class="big arrow circle right icon"></i>';
}

//play music function
function playMusic(){
  audio.play();
}


audio.onended = function (){
  nextMusic();
}




//prev music function
prebutton.onclick =function prevMusic(){
  musicIndex--; //decrement of musicIndex by 1
  //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
  musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong(); 
}

function nextMusic(){
musicIndex++; //increment of musicIndex by 1
  //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
  musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong();

}

//next music function
nextbutton.onclick =function(){
  musicIndex++; //increment of musicIndex by 1
  //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
  musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong(); 
}

// play or pause button event
playPauseBtn.addEventListener("click", ()=>{
  const isMusicPlay = wrapper.classList.contains("paused");
  //if isPlayMusic is true then call pauseMusic else call playMusic
  isMusicPlay ? pauseMusic() : playMusic();
  playingSong();
});



//play particular song from the list onclick of li tag
function playingSong(){
   const allLiTag = ulTag.querySelectorAll("a");
  
  for (let j = 0; j < allLiTag.length; j++) {

    let audioTag = allLiTag[j].querySelector(".audio-duration");

    if(allLiTag[j].classList.contains("playing")){
      allLiTag[j].classList.remove("playing");
      audioTag.innerHTML ='';
    }

  
    if(allLiTag[j].getAttribute("a-index") == musicIndex){
      allLiTag[j].classList.add("playing");
      $('html,body').animate({
          scrollTop: $(".playing").offset().top},
          'slow');
     
    }

    allLiTag[j].setAttribute("onclick", "clicked(this)");
  }
}

//particular li clicked function
function clicked(element){
  let getLiIndex = element.getAttribute("a-index");
  musicIndex = getLiIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong();
}

function playvideo(){
 loadVideo(videoIndex);
video.play();
 video.onplay=function(){

anime({
  targets: '#video ',
  width:'400px',
 easing: 'easeInOutQuad',
});
$('#nextvideo').transition('slide right');

setTimeout(()=>{
anime({
  targets: '#video-img1 ',
  height : '0px',
 easing: 'easeInOutQuad',
});

anime({
  targets: '#video #vd',
  height : '400px',
 easing: 'easeInOutQuad',
});


},1000);

setTimeout(()=>{
$('html,body').animate({
          scrollTop: $("#video #vd").offset().top},
          'slow');

},1350);


   document.getElementById('but1').innerHTML="<i class='pause icon'></i> Tạm dừng"
   audio.pause();
  document.getElementById('but1').onclick=function(){
    document.getElementById('but1').innerHTML="<i class='play icon'></i> Tiếp tục"
    video.pause();
  }
 }

video.onpause=function(){
   document.getElementById('but1').innerHTML="<i class='play icon'></i> Tiếp"

anime({
  targets: '#video ',
  width:'250px',
 easing: 'easeInOutQuad',
});
$('#nextvideo').transition('slide right');


setTimeout(()=>{
anime({
  targets: '#video-img1 ',
  height : '200px',
 easing: 'easeInOutQuad',
});

anime({
  targets: '#video #vd',
  height : '0px',
 easing: 'easeInOutQuad',
});


},1000);

  document.getElementById('but1').onclick=function(){
    document.getElementById('but1').innerHTML="<i class='play icon'></i> Tạm dừng"
    video.play();
  }
 }



}



function loadVideo(indexNumb2){
  video.src = `videos/${allVideo[indexNumb2 - 1].src}.mp4`;
  document.getElementById('tenvideo').innerText = `${allVideo[indexNumb2 - 1].ten}`
}

 function nextvideo(){
  videoIndex++; //increment of musicIndex by 1
  //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
  videoIndex > allVideo.length ? videoIndex = 1 : videoIndex = videoIndex;
  loadVideo(videoIndex);
  video.play();
  $('#nextvideo').transition('slide right');
 }


 function show(){
   $('.ui.demo.sidebar')
  .sidebar('setting', 'transition', 'scale down')
  .sidebar('toggle')
;
}

