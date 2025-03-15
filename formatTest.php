<!DOCTYPE html>
<html lang="en">
	<head>
		<?php include $_SERVER['DOCUMENT_ROOT']."/include/head.html"?>
		
		<title>Preparing With</title>
	</head>
	
	<body>
		<?php include $_SERVER['DOCUMENT_ROOT']."/include/navigation.html"?>
		<main class="pageBody">
			<h1>Header 1</h1>
			<h2>Header 2</h2>
			<h3>Header 3</h3>
			<h4>Header 4</h4>
			<h5>Header 5</h5>
			<h6>Header 6</h6>
			<button>Button</button>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			
			<details>
				<summary>Details</summary>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fuck you</p>
			</details>
			
			<figure>
				<img src="img/maurice.png" alt="Maurice">
				<figcaption>What is his problem?</figcaption>
			</figure>
			
			<blockquote>Blockquote</blockquote>
			
			<p><b>Bold</b>, <u>Underline</u>, <s>Strikeout</s>, <i>Italics</i>, <a href="" target="_parent">Link</a> <small>Small</small></p>
			
			<hr />
			
			<p>Ordered List</p>
			<ol>
				<li>Element 1</li>
				<li>Element 2</li>
				<li>Element 3</li>
			</ol>
			<p>Unordered List</p>
			<ul>
				<li>Element 1</li>
				<li>Element 2</li>
				<li>Element 3</li>
			</ul>
		</main>
		<?php include $_SERVER['DOCUMENT_ROOT']."/include/footer.html"?>
	</body>
	<?php include $_SERVER['DOCUMENT_ROOT']."/include/musicPlayer.php"?>
</html>