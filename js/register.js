$(document).ready(function(){
	$("#register-btn").click(function(){
		var user_name = $("#username").val();
		var password = $("#password").val();

		var reqdata = {
			user_name : user_name,
			password : password
		};

		// $.post( "http://127.0.0.1:5000/api/v1.0/register/",
		//  { user_name: user_name, password: password},
		// 	function(data){
		// 		alert(data);
		// 	}
		// );
		$.ajax({
			url:encodeURI("http://127.0.0.1:5000/api/v1.0/register/"),
			type:"POST",
			data:{user_name: user_name, password: password },
			dataType:"json",
			success:function(data,textStatus,jqXHR){
				completetion(data,textStatus);
			},
			complete:function(XMLHttpRequest,textStatus){

			},
			error: function (xhr, ajaxOptions, thrownError) {

		    }
		 });	
	})
})