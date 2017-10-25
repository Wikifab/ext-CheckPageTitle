(function() {
	
	$(document).ready(function() {
		

		$('.forminput_button').click(function(){
			
			var inputValue = $('.formInput').val();
			var result1=inputValue.match(/[<>@&~:!$*€£`+=\/\\|\[\]{};?#]/g);
			var result2=inputValue.match(/\s$/);
			
			if ((result1) || (result2)){
				$('#ModalError').modal('show');
  				return false;
                evt.preventDefault();
			}
//			if (){
//					
//				alert(inputValue.trim());
//				newInputValue = $('.formInput').val();
//				$('.formInput').val() = inputValue.trim();
//				return false;
//	            evt.preventDefault();
//
//
//			}
			
			else { 
				
				return true;
			}
		});
			
	});
		
})();
