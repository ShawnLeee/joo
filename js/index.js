data = {
      "like_count" : "56",
      "post_text" : "年终了，就存了这么多过年，筒子们，你们能不能少炫富行吗？",
      "post_id" : "100630702",
      "user_id" : "21739009",
      "created_time" : "2015-02-15",
      "comment_count" : "1"
    };
$(document).ready(function(){
	$.showLoading("正在加载...");
	$(".joo-btn").click(function(){
		$("body").append("<p>I LOVE JOO</p>");
	})
	senddata()
})
function senddata(){
$.ajax({
	url:encodeURI("http://127.0.0.1:5000/api/v1.0/posts/"),
	type:"POST",
	data:JSON.stringify(data),
	contentType:"application/json",
	dataType:"json",
	success:function(data,textStatus,jqXHR){
		completetion(data,textStatus);
		},
	complete:function(XMLHttpRequest,textStatus){
		// console.log("dhgidhgi");
		// alert("complete");
		},
	error: function (xhr, ajaxOptions, thrownError) {
        // alert(xhr.status);
        // alert(thrownError);
	    }
 });
}

