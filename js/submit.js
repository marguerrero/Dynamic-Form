$(document).ready(function(){
	$('#save').click(function(){
		alert('the js works');
	
		var form_data = {
			name: $('#lastname_0').val();
		}
	});
});
/*
	$.ajax({
		url: "<?php echo site_url('index.php/site/validate'); ?>",
		type : 'POST',
		data: form_data,
		success: function(msg){
		alert(msg);
		}
	);
	});*/
