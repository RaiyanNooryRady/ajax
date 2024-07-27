// script.js

$(document).ready(function() {

    $('#submit').click(function(){
        let username=$('#username').val();
        let password=$('#password').val();
        console.log(username, password);
        if(username==''||password==''){
            return false;
        }
        $.ajax({
            type:"POST",
            url:'post.php',
            data:{
                username:username,
                password:password
            },
            cache:false,
            success:function(response){
                alert(response);
            },
            error: function(xhr,status,err){
                console.error(xhr);
            }
        })
    })
});
