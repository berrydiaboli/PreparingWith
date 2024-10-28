let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

const AlbumAnimation = document.querySelectorAll('.track-art'); 

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
{
	name: "Gustavo & Brick",
	artist: "Bonegouls",
	image: "img/PWAlbum.png",
	path: "music/gustavo and brick.mp3"
},
{
	name: "Maurice Beat",
	artist: "Bonegouls",
	image: "img/PWAlbum.png",
	path: "music/maurice beat.mp3"
},
{
	name: "Pepperman Jazz",
	artist: "Bonegouls",
	image: "img/PWAlbum.png",
	path: "music/pepperman_jazz v3.mp3"
},
{
	name: "Pizzahead Scheme",
	artist: "Bonegouls",
	image: "img/PWAlbum.png",
	path: "music/pizzahead scheme.mp3"
},
{
	name: "Snick",
	artist: "Bonegouls",
	image: "img/PWAlbum.png",
	path: "music/snick v1.mp3"
},
{
	name: "The Vigi",
	artist: "Bonegouls",
	image: "img/PWAlbum.png",
	path: "music/vigi final.mp3"
},
];

// Shuffle function to randomize track order
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Randomize the order of track_list (YES)
shuffle(track_list);

// Load the first track in the randomized tracklist
loadTrack(track_index);
// playTrack(); (I can make it automatically play went entered, just not now)

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    curr_track.src = track_list[track_index].path;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;

    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.addEventListener("ended", nextTrack);
}

function resetValues() {
	curr_time.textContent = "00:00";
	total_duration.textContent = "00:00";
	seek_slider.value = 0;
}
  
function playpauseTrack() {
	if (!isPlaying) playTrack();
	else pauseTrack();
}
  
function playTrack() {
	curr_track.play();
	isPlaying = true;
	playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
	AlbumAnimation.forEach((box) => {
            box.classList.add('transformed');
    });
}
  
function pauseTrack() {
	curr_track.pause();
	isPlaying = false;
	playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';;
	AlbumAnimation.forEach((box) => {
		box.classList.remove('transformed');
	});
}
  
function nextTrack() {
    if (track_index < track_list.length - 1)
        track_index += 1;
    else
        track_index = 0;

    // Load the next track
    loadTrack(track_index);

    // Start playing the track after it's loaded
    curr_track.addEventListener("loadeddata", function() {
        playTrack();
    });
}
  
function prevTrack() {
	if (track_index > 0)
	  track_index -= 1;
	else track_index = track_list.length;
	loadTrack(track_index);
	playTrack();
}
  
function seekTo() {
	let seekto = curr_track.duration * (seek_slider.value / 100);
	curr_track.currentTime = seekto;
}
  
function setVolume() {
	curr_track.volume = volume_slider.value / 100;
}
  
function seekUpdate() {
	let seekPosition = 0;
  
	if (!isNaN(curr_track.duration)) {
	  seekPosition = curr_track.currentTime * (100 / curr_track.duration);
  
	  seek_slider.value = seekPosition;
  
	  let currentMinutes = Math.floor(curr_track.currentTime / 60);
	  let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
	  let durationMinutes = Math.floor(curr_track.duration / 60);
	  let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
  
	  if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
	  if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
	  if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
	  if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
  
	  curr_time.textContent = currentMinutes + ":" + currentSeconds;
	  total_duration.textContent = durationMinutes + ":" + durationSeconds;
	}
}