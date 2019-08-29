$(document).ready(function(){
    
    
    $("ul").on("click", "li", function(){
        $(this).toggleClass("completed");
    });

    $("ul").on("click", ".delete", function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    });

    $("input[type = 'text']").keypress(function(event){
        if(event.which === 13){
            var toDoText = $(this).val();
            $(this).val("");
            $("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span><span class='text'>" + toDoText + "</span></li>");
        }

    })

    $(".fa-plus").click(function(){
        $("input[type='text']").fadeToggle();
        $("input[type='text']").focus();
    })
})
