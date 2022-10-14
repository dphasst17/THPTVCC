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
        $('.nav, .search, .user,#dark, .notification').css("border-style","none")
        $('h4').css("color","white")
        $('#dark').css("display","none")
        $('#light').css("display","block")
    });
    $('#light').click(function(){
    	$('body').css("background-color","rgb(239, 236, 236)")
        $('.nav, .search, .search>input, .user, .notification, #new, #document, #admissions, #dark').css("background-color","rgb(247, 246, 246)")
        $('.nav, .search, .user,#dark, .notification').css("border-style","solid")
        $('.search>input').css("color","#000")
        $('h4').css("color","black")
        $('#light').css("display","none")
        $('#dark').css("display","block")
    })
})


$(function(){
    
    var iFrames = $('iframe');
  
    function iResize() {
    
        for (var i = 0, j = iFrames.length; i < j; i++) {
          iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';}
        }
        
        if ($.browser.safari || $.browser.opera) { 
        
           iFrames.load(function(){
               setTimeout(iResize, 0);
           });
        
           for (var i = 0, j = iFrames.length; i < j; i++) {
                var iSource = iFrames[i].src;
                iFrames[i].src = '';
                iFrames[i].src = iSource;
           }
           
        } else {
           iFrames.load(function() { 
               this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
           });
        }
    
    });
