(function() {
	
	$(document).ready(function() {
		conf = mw.config.get( 'wgCheckPageTitle' );
		
	
		$('.forminput_button').click(function(){
			var inputValue = $('.formInput').val();
			var regex =new RegExp("[^"+conf.legalTitleChars+ "]","g");
			var secondRegex = new RegExp("[\/.]","g"	);
			
			
			if ((monTableau = regex.exec(inputValue)) !== null || (monTableau = secondRegex.exec(inputValue)) !== null) {
				 $('#ModalError').modal('show');
				 return false;
				 evt.preventDefault();
			}
			else {
				var newValueInput = inputValue.trim(); // Modify me
				$('.formInput').val(newValueInput);		
				return true;
				
			}

		});
			
	});
		
})();
