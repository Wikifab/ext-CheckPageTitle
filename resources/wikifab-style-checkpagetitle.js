(function() {

	$(document).ready(function() {


		mw.loader.using( 'oojs' ).then(function () {
			$('.new-tutorial-page .forminput_button, .NewPageTabs .forminput_button, .NewCategoryTabs .btn-success, .EditCategoryTabs .btn-success').click(function(event){
				var regex;
				var regexDefaultCompare;
				var regexAdd;
				var form;
				var inputValue = [];

				var wgSimpleLangageSelectionLangList = mw.config.get('wgSimpleLangageSelectionLangList');

				if($(this).attr('class').includes("btn-success")){
					var parentClass = $(this).parent().attr('class');
					form = $(this).parent().parent(form);
					if(parentClass.includes("NewCategoryTabs")){
						inputValue.push($(form).find('input.form-control[name=title]').val());
					} else if(parentClass.includes("EditCategoryTabs")) {
						for(var j = 0; j < wgSimpleLangageSelectionLangList.length; j++) {
							var name = 'title' + wgSimpleLangageSelectionLangList[j].toUpperCase();
							inputValue.push($(form).find('input.form-control[name="'+name+'"]').val());
						}
					}
				} else {
					form = $(this).parent(form);
					inputValue.push($(form).find('input.formInput[name=page_name]').val());
				}
				var conf = mw.config.get( 'wgCheckPageTitle' );

				var regexResult1 = [];
				var regexResult2 = [];

				for(var i = 0; i < inputValue.length; i++) {
					if (conf) {
						regex = new RegExp("[^" + conf.legalTitleChars + "]", "g");
						regexDefaultCompare = regex.exec(inputValue[i]);
						if (regexDefaultCompare !== null) {
							$('.checkPageTitle-modalInvalidsCharslist').html(regexDefaultCompare);
							$('#ModalError').modal('show');
							event.preventDefault();
							return false;
						}
					}


					// original : " %!\"$'()*,\\-.\\/0-9@A-Z^_`a-z~\\x80-\\xFF+"+ "]","g");
					// allowed Chars :
					regex = new RegExp("[^" + " ',\\-.\\/0-9@A-Z_`a-z~\\xC0-\\xFF+" + "]", "g");

					var secondRegex = new RegExp("[\/:.]", "g");

					var reg1 = regex.exec(inputValue[i]);
					if(reg1 !== null){
						regexResult1.push(reg1);
					}
					var reg2 = secondRegex.exec(inputValue[i]);
					if(reg2 !== null){
						regexResult2.push(reg2);
					}
				}

				var invalidChars = false;
				if (regexResult1.length > 0) {
					invalidChars = regexResult1;
				} else if (regexResult2.length > 0) {
					invalidChars = regexResult2;
				}

				if (invalidChars !== false) {
					$('.checkPageTitle-modalInvalidsCharslist').html(invalidChars);
					$('#ModalError').modal('show');
					event.preventDefault();
					return false;
				} else {
					var newValueInput = inputValue[i-1].trim();
					$('.formInput').val(newValueInput);
					return true;
				}

			});
		});

	});

})();
