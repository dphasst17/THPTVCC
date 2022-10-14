$(document).ready(function(){
    $('.user').click(function(){
        $('.user_infor').fadeToggle('user_info')
    })
})

$(document).ready(function(){
	$('#dark').click(function(){
    	$('body').css("background-color","rgb(103, 102, 102)")
        $('#dark').css("display","none")
        $('#light').css("display","block")
    })
})
$(document).ready(function(){
	$('#light').click(function(){
    	$('body').css("background-color","white")
        $('#light').css("display","none")
        $('#dark').css("display","block")
    })
})