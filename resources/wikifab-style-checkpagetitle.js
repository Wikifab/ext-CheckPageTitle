(function() {
	
	$(document).ready(function() {


		$('.forminput_button').click(function(evt){
			var regex;
			var inputValue = $('.formInput').val();
			var conf = mw.config.get( 'wgCheckPageTitle' );
			var secondRegex = new RegExp("[\/.]","g");
			// TO DO : Manque la valeur de conf qui n'est pas récupérée correctement 
			if (conf == null){
				regex = new RegExp("[^ %!\"$&'*()\-\/0-9A-Z_.`a-z\x80-\xFF]","g");
					
			}
			else {
				var regex = new RegExp("[^"+conf.legalTitleChars+ "]","g");
			}

			if ((monTableau = regex.exec(inputValue)) !== null || (monTableau = secondRegex.exec(inputValue)) !== null) {
				$('#ModalError').modal('show');
				 evt.preventDefault();				
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
