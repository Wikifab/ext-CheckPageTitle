<?php
class CheckPageTitle {

	private static function getModalHtml() {
		$output =  '
		<div class="modal fade" id="ModalError" tabindex="-1" role="dialog" aria-labelledby="myModalError">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<span class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</span>
						<h4 class="modal-title">Erreur de saisie dans le nom du tutoriel</h4>
					</div>
					<div class="modal-body">
						<p>Vous avez entré un nom de page invalide avec un ou plusieurs caractères suivants : </p>
							<p> < > @ ~ : * € £ ` + = / \ | [  ] { } ; ? # </p>
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
		global $wgLegalTitleChars;
		$vars['wgCheckPageTitle'] = [
		    'legalTitleChars' => $wgLegalTitleChars,
		];
		return true;
	}
}
?>

