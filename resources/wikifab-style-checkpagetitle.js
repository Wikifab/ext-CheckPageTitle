(function() {
	
	$(document).ready(function() {


		$('.forminput_button').click(function(event){
			var regex;
			var regexDefaultCompare;
			var regexAdd;
			var inputValue = $('.formInput').val();
			var conf = mw.config.get( 'wgCheckPageTitle' );
			
			var secondRegex = new RegExp("[\/.]","g");
			
			regex = new RegExp("[^"+conf.legalTitleChars+ "]","g");
			regexDefaultCompare = regex.exec(inputValue);
			regexAdd = secondRegex.exec(inputValue);

			if (regexDefaultCompare !== null || (regexAdd !== null)) {
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
		
})();
