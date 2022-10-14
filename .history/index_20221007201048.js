$(document).ready(function(){
    $('.user').click(function(){
        $('.user_infor').fadeToggle('user_info')
    })
})

$(document).ready(function(){
	$('#dark').click(function(){
    	$('body').css("background-color","rgb(119, 120, 120)")
        $('.nav').css("background-color","rgb(103, 102, 102)")
        $('.search').css("background-color","rgb(103, 102, 102)")
        $('.search>input').css("background-color","rgb(103, 102, 102)")
        $('.user').css("background-color","rgb(103, 102, 102)")
        $('#dark').css("display","none")
        $('#light').css("display","block")
    })
})
$(document).ready(function(){
	$('#light').click(function(){
    	$('body').css("background-color","rgb(225, 228, 228)")
        $('.nav').css("background-color","rgb(196, 193, 193)")
        $('.search').css("background-color","rgb(196, 193, 193)")
        $('.search>input').css("background-color","rgb(196, 193, 193)")
        $('.user').css("background-color","rgb(196, 193, 193)")
        $('#light').css("display","none")
        $('#dark').css("display","block")
        $('#dark').css("background-color","rgb(196, 193, 193)")

    })
})