Tumblr Header Hider
===================

This is a userscript that hides the Tumblr header from your Dashboard when you 
scroll down, and shows it again when you scroll up.

Here is what the final result looks like.

![Result of header hiding](screenshots/result.gif?raw=true "Result of head 
hiding")

Installation
------------
Choose your browser:
* [Google Chrome](#chrome)
* [Firefox](#firefox)

### Google Chrome

**Note: Windows Users will first have to install the [Tampermonkey 
extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en-US) 
and attempt to follow the [Firefox](#firefox) instructions using Tampermonkey 
instead of Greasemonkey.**

#### Step 1
[Download the 
script](https://raw.githubusercontent.com/little-vince/tumblr-header-hider/master/tumblr.header.hider.user.js)
saving it somewhere convenient making sure that the file name ends in 
"user.js".

![Download the script](screenshots/chrome/01downloadscript.png?raw=true "Download the 
script")

#### Step 2
Navigate to your extensions page chrome://extensions either by typing it in, or 
going through Menu > Settings > Extensions, or Menu > More tools > Extensions.

![Extensions Page](screenshots/chrome/02extensionspage.png?raw=true "Extensions page")

#### Step 3
Drag and drop the downloaded script onto the extensions page.

![Drag and Drop](screenshots/chrome/03dragdrop.png?raw=true "Drag and Drop")

#### Step 4
Click add at the following prompt.

![Click 'Add' at the prompt](screenshots/chrome/04prompt.png?raw=true "Click 'Add' at 
the prompt")

#### Step 5
Success! Navigate to [Tumblr](http://www.tumblr.com) to check it action!

![Success](screenshots/chrome/05success.png?raw=true "Success")

### Firefox

> **Update: There seems to be an issue on Firefox where when you go to edit a 
> post, the body of the script gets inserted into the post.**
> 
> I have no idea why this is happening and it doesn't seem to occur on Chrome. 
> I'll try find a solution when my exams are over but for now: if you're an end 
> user, you can consider disabling the addon or removing the script text at the 
> end of each post (a huge hassle I know, I'm sorry), or if you're a developer 
> and you know the cause of the issue and know a solution, please let me know!

#### Step 1
Install the [Greasemonkey 
Addon](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).

![Install Greasemonkey](screenshots/firefox/01grease.png?raw=true "Install 
Greasemonkey")

#### Step 2
Click "Install Now" at the prompt and restart Firefox if necessary.

![Accept prompt](screenshots/firefox/02prompt.png?raw=true "Accept prompt")

#### Step 3
Once Greasemonkey is installed, [click 
here](https://raw.githubusercontent.com/little-vince/tumblr-header-hider/master/tumblr.header.hider.user.js) 
and accept the following prompt.

![Accept another prompt](screenshots/firefox/03promptagain.png?raw=true "Accept 
another prompt")

#### Step 4
Success! Navigate to [Tumblr](http://www.tumblr.com) to check it action!

![Success](screenshots/firefox/04success.png?raw=true "Success")

Changelog
---------

#### 0.6 (141103)
* Change notification colours back to red and white

#### 0.5 (141102)
* Fix header not showing when jumping to top of page

#### 0.4 (141101)
* Actually remove the bar -- not just transparent

#### 0.3 (141101)
* Only hide when scrolled past the header

#### 0.2 (141101)
* Added fade animation

#### 0.1 (141101)
* Initial release

More Userscripts
----------------
Check out my other userscripts:
* [Tumblr MP3 Downloader](https://github.com/little-vince/tumblr-download)
* [Google Play Music Close 
  Prompt](https://github.com/little-vince/google-music-prompt)
* [Memrise Course Pinner](https://github.com/little-vince/memrise-pinner)
