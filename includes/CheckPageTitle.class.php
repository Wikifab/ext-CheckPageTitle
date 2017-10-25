<?php
class CheckPageTitle {

	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
		$out->addModules('ext.checkpagetitle.js');
		$out->addModuleStyles('ext.checkpagetitle.css');

	}
}
?>

