#Description

This MediaWiki extension add to the title input field a control about what users put in it. So if it's a wrong chars, a modal box appears and block the next page. Also if there is a space at the end of the string, this one is removed.   

1. Clone CheckTitlePage into the 'extensions' directory of your mediawiki installation
2. Add the folling Line to your LocalSettings.php file :

    wfLoadExtension('CheckPageTitle');

3. Add this line too to your LocalSettings.php file : 

    $wgLegalTitleChars = " %!\"$&'*()\\-\\/0-9A-Z_.`a-z\\x80-\\xFF";
	

#MediaWiki Versions

This extension has been tested on MediaWiki version 1.27.1