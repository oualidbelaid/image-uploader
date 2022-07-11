$(document).ready(function () {
        $(".child").click(function () {
                
        $('#file').trigger('click'); 
        })
        $("#file").change(function (e) { 
                e.preventDefault();
                var fd = new FormData();
                var filename = $("#file")[0].files[0]; 
                fd.append('file',filename)
                console.log($("#file")[0].files[0]); 
                $.ajax({  
                        url: "upload.php", 
                        type:"post",
                        data: fd,
                        contentType:false,
                        processData:false,
                        success: function ( data) { 
                                if ( data!=0) {
                                $("img").attr('src', data);
                                $(".link p").text("http://localhost/"+ data); 
                                } else {
                                        console.log("error");
                                }
                        }
                });
                $(".one").hide();
                $(".loading").css("display","flex"); 
                $(".loading  div span").animate({
                        width:"100%"
                },2000,function(){
                        $(".loading").hide(); 
                        $(".two").css("display","flex");
                        // for copy
                        $(".link button").click(function (e) { 
                                element=$(".link p")
                                e.preventDefault();
                                var $temp = $("<input>");
                                $("body").append($temp);
                                $temp.val($(element).text()).select();
                                document.execCommand("copy");
                                $temp.remove();
                        });
                }) 
        });
})