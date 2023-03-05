(function($) {

	function common(){

        var $header = $("#header"),
        $profile = $header.find(".profile");

		$profile.on("click", "button", function(){
			if ( $(this).siblings("nav").is(":hidden") ){
				$(this).siblings("nav").show();
			} else {
				$(this).siblings("nav").hide();
			}
		});

		$profile.on("mouseleave", function(){
			$(this).find("nav").hide();
		});

    }

	// Execute
	common();
	
})(jQuery);