# What is PreparingWith github?
This is the github for making the website of Peparing With! Please ask permission before using any assets and be sure to credit the creators!

## Contact and Information
For more information and or wanting to get in contact with me you can join my discord as my dms are closed! https://discord.gg/vTcbDnGmYa

# Filesystem
This is where SKL starts typing. Hello. I'm going to explain the filesystem and how everything works.
The site was initially programmed in HTML and JavaScript only, but now it's programmed with PHP too. This means I had to restructure the way the site was organized a little.

## `include`
This folder holds common files pages will reference.
- `head.html`: This holds common settings in the `<head></head>` tags, like the favicon, site-wide style, etc.
- `navigation.html`: This is the main header and the navigation links!!
- `footer.html`: The footer of the page. This holds copyright information about Pizza Tower.
- `musicPlayer.php`: This is the music player embedded on every page. Reason this is a PHP file is in case in the future, this gets re-written, but for now it's just HTML.
- `musicplayerStyle.css`: The style for the music player.

## `js`
This holds common JavaScript files used around the site. Reason this isn't in `include` is both for semantic and organization purposes.

- `footerscript.js`: Used to allow the user to open and close the music player. Also a Peppino will come out if you open it for the first time.
- `MusicShuffler.js`: Handles the music playing part. This is where music files are listed to pull from.

## `music`
Store the music files here!

## `font`
Where the fonts for the website are stored.

## `error`
This holds error pages for the website. Controlled by `.htaccess` in the root directory.
- `404.php`: Not found.

## `recipes/kitchen`
This holds behind-the-scenes information about episodes. This hasn't really been worked on though since we're not sure about how they'll be formatted...
- `TEMPLATE.php`: The template file. Pages relating to episodes should be titled `(Episode Name without Spaces).php`.
- `style.css`: Page-exclusive styling, in case anything needs special style rules.

## Everything else
Sections of the website are in folders, and tend to be relatively self-explanatory.