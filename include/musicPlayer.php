<!--Peppino Hit-->
<img id="peppinohitimg" class="peppinohit" aria-hidden="true" src="../img/pwp-pep-fling.gif" style="pointer-events: none">

<!--Button Stuff-->
<div class="FooterTab">
	<img id="FooterTabImg" alt="Footer Tab" src="/img/tabfoot.png" style="cursor: pointer;">
</div>
<!--End of Button-->

<div class="footergroups">
	<img src="/img/Mort_The_Chicken_Mambo.png">

	<div class="track-art-wrap">
		<div class="track-art"></div>
	</div>
	
	<div class="musicsection">
		<div class="details">
			<div class="track-name">Track Name</div>
			<div class="track-artist">Track Artist</div>
		</div>

		<div class="buttons">
			<div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa-1x"></i></div>
			<div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-2x"></i></div>
			<div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa-1x"></i></div>
		</div>

		<div class="slider_container">
			<div class="current-time">00:00</div>
			<input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
			<div class="total-duration">00:00</div>
		</div>

		<div class="slider_container" style="padding-bottom: 10px;">
			<i class="fa fa-volume-down"></i>
			<input type="range" min="1" max="100" value="50" class="volume_slider" onchange="setVolume()">
			<i class="fa fa-volume-up"></i>
		</div>

		<!-- Load the main script for the player -->
		<script src="/js/MusicShuffler.js"></script>
		<!-- Don't touch this again, you know what happened last time -->
	</div>

</div>

<!--This is for the button-->
<script src="/js/footerscript.js"></script>