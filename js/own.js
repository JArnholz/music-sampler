$(document).ready(function(){
    
    function hideAll() {
        $('#breatheIntoMeName').hide();
        $('#mysteryOfYouName').hide();
        $('#facelessName').hide();
        $('#holdMeNowName').hide();
		$('#darkestPartName').hide();
    }
    
    hideAll();
    
    $('.albumArt').click (function() {

        hideAll();
                
        switch ( $(this).attr("id") ) {
            case "eos" :
				
                $('#breatheIntoMeName').slideToggle();
				
                break;
				
            case "iai" :
				
                $('#mysteryOfYouName').slideToggle();
				
                break;
            case "uwhf" :
				
                $('#facelessName').slideToggle();
				
                break;
            case "rtp" :

                $('#holdMeNowName').slideToggle();
			
                break;
			case "obar" :
				
                $('#darkestPartName').slideToggle();
				
                break;
        }
		
	
		
    });  
	
});