var video = document.querySelector("#player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("The current volume is " + video.volume)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate * 0.95)
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate * 1.05)
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = (video.currentTime + 15)
	console.log("Position is " + video.currentTime);
});

var volume = document.querySelector("#volume");
volume.innerHTML = (video.volume * 100) + "%"
