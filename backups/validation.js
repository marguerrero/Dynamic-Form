$(document).ready(function(){
	$('#save').click(function(){
		return false;
//		var i = 0;
	//	var count = $(':hidden#list_size').val();
		//var j = 0;
	/*	for(i ; i < count; i ++)
		{
			var error_msg = check_errors(i);
			if( error_msg == "")
			{
				$('div#error_wrapper_'+i+' p').html("Student no."+i+"Successfully Added");
			}
			else 
			{
				$('div#error_wrapper_'+i+' p').html(error_msg);
			}
		}	
		
		*/
		//check all fields if filled up
		//apppend text to error div
		//control system
		}
	});
/*
	function check_errors(i){
		var msg ="";
			var lastname = $('input#lastname_'+i).val();
			var firstname = $('input#firstname_'+i).val();
			var address = $('input#address_'+i).val();
			var email = $('input#email'+i).val();
			var age = $('input#age_'+i).val();
			var course = $('input#course_'+i).val();
		       if(lastname == "")
		       {
		       		msg = msg+"Last Name is Required"	
		       }	       
		       if(firstname == "")
		       {
		       		msg = msg+"First Name is Required"	
		       }	       
		       if(address == "")
		       {
		       		msg = msg+"Address is Required"	
		       }	       
		
		       if(email == "")
		       {
		       		msg = msg+"Email is Required"	
		       }	       
		       if(age == "")
		       {
		       		msg = msg+"Age is Required"	
		       }	       
		       if(course == "")
		       {
		       		msg = msg+"Course is Required"	
		       }	       
		return msg;
	}*/
});
