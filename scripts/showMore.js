$(document).ready(function(){
    $('.col-xs-6').slice(0,2).show()

    $('#load-more-btn').on('click',function(){
        $('.col-xs-6:hidden').slice(0,2).show()

        if($('.col-xs-6:hidden').length == 0){
            $('#load-more-btn').fadeOut()
        }
    })
})

