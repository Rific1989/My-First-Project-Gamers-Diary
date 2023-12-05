(function($){
    $(function(){
    /************Navigace pro mobilní telefony***************/
        $(".jq--nav-icon").click(function(){
            $(".mobile-nav-back").slideToggle()
            $("nav ul").slideToggle()
        })

        $(".jq--image-hamburger").click(function(){
            
            if($(".jq--image-hamburger").attr("src") == "images/hamburgerMenu.png")    
                    
            {
                $($(".jq--image-hamburger").attr("src", "images/crossMenu.png"))
            }
            else 
            {
                $($(".jq--image-hamburger").attr("src", "images/hamburgerMenu.png"))
            }
        })
})
})(jQuery)

