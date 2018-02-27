(function() {

	$(document).ready(function() {


		mw.loader.using( 'oojs' ).then(function () {
			$('.new-tutorial-page .forminput_button, .NewPageTabs .forminput_button').click(function(event){
				var regex;
				var regexDefaultCompare;
				var regexAdd;
				var form = $(this).parent(form);
				var inputValue = $(form).find('input.formInput[name=page_name]').val();

				var conf = mw.config.get( 'wgCheckPageTitle' );

				if (conf) {
					regex = new RegExp("[^"+conf.legalTitleChars+ "]","g");
					regexDefaultCompare = regex.exec(inputValue);
					if (regexDefaultCompare !== null) {
						$('.checkPageTitle-modalInvalidsCharslist').html(regexDefaultCompare);
						$('#ModalError').modal('show');
						event.preventDefault();
						return false;
					}
				}

				// original : " %!\"$'()*,\\-.\\/0-9@A-Z^_`a-z~\\x80-\\xFF+"+ "]","g");
				// allowed Chars :
				regex = new RegExp("[^"+" \"',\\-.\\/0-9@A-Z_`a-z~\\xC0-\\xFF+"+ "]","g");

				var secondRegex = new RegExp("[\/:.]","g");
				regexResult1 = regex.exec(inputValue);
				regexResult2 = secondRegex.exec(inputValue);

				var invalidChars = false;
				if(regexResult1 !== null) {
					invalidChars = regexResult1;
				} else if (regexResult2 !== null) {
					invalidChars = regexResult2;
				}

				if (invalidChars !== false ) {
					$('.checkPageTitle-modalInvalidsCharslist').html(invalidChars);
					$('#ModalError').modal('show');
					event.preventDefault();
					return false;
				}
				else {
					var newValueInput = inputValue.trim();
					$('.formInput').val(newValueInput);
					return true;
				}

			});
		});

	});

})();
