$(document).ready(function(){
    $('.main-nav li .bg').on({
        'click':function(){
            $('.pop-up').css({'transform':' scale(1,1)'})
            // $('body').css({'filter':'blur(20px)'})
            }
        }    
    )

    $('#close-pop-up-btn').on({
        'click':function(){
            $('.pop-up').css({'transform':' scale(0,0)'})
            // $('body').css({'filter':'blur(20px)'})
            }
        }    
    )

    
})