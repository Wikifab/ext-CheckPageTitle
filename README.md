# Description

This MediaWiki extension controls that the name entered into the Page Form's input title field doesn't contains some specific caracters. If the extension detects a wrong characters, a modal box appears and prevent the user to create the page with the entered title.

Also if there is a blank space at the end of the entered string, the blank space is removed automactically.

We have create this extension to avoid people to create pages with weird characters.

# How it works?

The extensions checks the "formInput" class.

# Installation

1. Clone CheckTitlePage into the 'extensions' directory of your mediawiki installation

2. Add the folling Line to your LocalSettings.php file :

    wfLoadExtension('CheckPageTitle');

3. Add this line too to your LocalSettings.php file : 

	$wgLegalTitleChars = " %!\"$'()*,\\-.\\/0-9@A-Z\^_`a-z~\\x80-\\xFF+";
	
# Dependencies	

This extension works with the Extension:PageForms.

# MediaWiki Versions

This extension has been tested on MediaWiki version 1.27.1
