$(document).ready(function(){
    $('.user').click(function(){
        $('.user_infor').fadeToggle('user_info')
    })
})

/* Dark - Light mode */
$(document).ready(function(){
	$('#dark').click(function(){
    	$('body').css("background-color","rgb(119, 120, 120)")
        $('.nav, .search, .search>input, .user, #new, #document, #admissions').css("background-color","rgb(103, 102, 102)")
        $('.notification').css("background-color","#f4f2f2bd")
        $('h4').css("color","white")
        $('#dark').css("display","none")
        $('#light').css("display","block")
    });
    $('#light').click(function(){
    	$('body').css("background-color","rgb(239, 236, 236)")
        $('.nav, .search, .search>input, .user, .notification, #new, #document, #admissions, #dark').css("background-color","rgb(196, 193, 193)")
        $('h4').css("color","black")
        $('#light').css("display","none")
        $('#dark').css("display","block")

    })
})