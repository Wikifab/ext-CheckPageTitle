<?php
class CheckPageTitle {

	private static function getModalHtml() {
		$output =  '
		<div class="modal fade" id="ModalError" tabindex="-1" role="dialog" aria-labelledby="myModalError">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<span class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</span>
						<h4 class="modal-title">'.wfMessage("checkpagetitle-errormodal-title").'</h4>
					</div>
					<div class="modal-body">
						<p>'.wfMessage("checkpagetitle-errormodal-invalidsCharsintitle").'</p>
							<p class="checkPageTitle-modalInvalidsCharslist"> < > @ ~ : * € £ ` + = / \ | [  ] { } ; ? # </p>
					</div>
					<div class="modal-footer">
					</div>
				</div>
			</div>
		</div>';
		return ($output);

	}

	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
		$out->addModules('ext.checkpagetitle.js');
		$out->addModuleStyles('ext.checkpagetitle.css');
 		$out->addHTML(self::getModalHtml());

	}

	public static function onResourceLoaderGetConfigVars( &$vars ) {
		global $wgLegalTitleChars, $wgcptLegalTitleChars, $wgSimpleLangageSelectionLangList;
		/*var_dump($vars);
		$vars['wgCheckPageTitle'] = [
		    'legalTitleChars' => $wgcptLegalTitleChars,
		];*/
		$vars['wgSimpleLangageSelectionLangList'] = $wgSimpleLangageSelectionLangList;
		return true;
	}
}
?>

