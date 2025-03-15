<!DOCTYPE html>
<html lang="en">
	<head>
		<?php include $_SERVER['DOCUMENT_ROOT']."/include/head.html"?>>
		
		<title>Preparing With: Not Found</title>
	</head>
	
	<body>
		<?php include $_SERVER['DOCUMENT_ROOT']."/include/navigation.html"?>
		<main class="pageBody">
			<h1>Not Found</h1>
			<p>Whatever you were looking for, it's not here. You may have taken a wrong turn, or we screwed something up. One of those is true.</p>
			<img id="notFoundImg" src="/img/gustavobrick_lost.gif" alt="A lost Brick and Gustavo." />
			<button style="margin:0.5em auto;" onclick="history.back()">Go back</button>
		</main>
		<?php include $_SERVER['DOCUMENT_ROOT']."/include/footer.html"?>
	</body>
	<?php include $_SERVER['DOCUMENT_ROOT']."/include/musicPlayer.php"?>
</html>