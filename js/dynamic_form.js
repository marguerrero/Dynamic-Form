$(document).ready(function(){
//initialize
	var i = $('li').size();
	var k;
	$('input:hidden').val(i);
	$(':button#delete').hide();
//button add click function
	$(':button#add').click(function(){
		var form = html_form(i);
		$('<li>'+form+'</li>').appendTo('ul');
		$(':button#delete').show();
		i++;
		$('input:hidden').val(i);
		var count = $(':hidden#list_size').val();
		k = count - 1;	
		multiple_calendar(k);
	});
//button delete click function
	$(':button#delete').click(function(){
		i--;
		$('li:last').remove();
		$('input:hidden').val(i);
		var count = $(':hidden#list_size').val();
		k = count - 1;	
		multiple_calendar(k);
		if(i == 1)
		{
			$(this).hide();
		}
	});
//html form function, generate an html for forms
	function html_form(a){
		var i= a + 1;
		var form = '<div id ="error_wrapper_'+a+'"><p></p></div>';
		form = form+'<div id= "forms">';
		form = form+'<h3>Student No.'+i+'</h3>';
		form = form+'<label for = "lastname_'+a+'">Last Name</label><input type = "text" name = "lastname_'+a+'" placeholder ="Last Name" id = "lastname_'+a+'"/>';
		form = form+'<label for = "firstname_'+a+'>First Name</label><input type = "text" name = "firstname_'+a+'" placeholder = "First Name" id = "firstname_'+a+'"/>';
		form = form+'<label for = "address_'+a+'">Address</label><input type = "text" name = "address_'+a+'" placeholder = "Address" id = "address_'+a+'"/> ';
		form = form+'<label for = "email_'+a+'">Email</label><input type = "text" name = "email_'+a+'" placeholder = "Email" id = "email_'+a+'"/> ';
		form = form+'<label for = "age_'+a+'">Age </label><input type = "text" name = "age_'+a+'" placeholder = "Age" id = "age_'+a+'"/> ';
		form = form+'<label for = "course_'+a+'">Course</label><input type = "text" name = "course_'+a+'" placeholder = "Course" id = "course_'+a+'"/> ';
		form = form+'<label for = "year_'+a+'">Birthday</label><br /><select id = "year_'+a+'" name = "year_'+a+'" >';
		form = form+''+$('#year_0').html();
		form = form+'</select>';
		form = form+'<select id = "month_'+a+'" name = "month_'+a+'" >';
		form = form+''+$('#month_0').html();
		form = form+'</select>';
		form = form+'<select id ="days_'+a+'"name = "days_'+a+'" >';
		form = form+''+$('#days_0').html();
		form = form+'</select>';
		form = form+'</div>';
		return form;
	}
	function is_leap_year(a,b){
		if( a == 2 && b % 4 == 0)
		var feb = 29;
		return feb;
	}
	function no_days(a){
		var num_days ;
		if( a == 2)
		num_days = 28;
		else if((a % 2 == 1 && a <= 7) || (a % 2 == 0 && a > 7))
		num_days = 31;
		else if((a % 2 == 0 && a <= 7) || (a % 2 == 1 && a > 7))
		num_days = 30;
		return num_days;
	}
	function display_days(a,b ){
		var days = "<option value = 'default'>DAY</option>";
		var i = 1;		
		for(i; i <= a; i++){
			if(i == b)
				days = days+"<option selected ='selected' value = "+i+">"+i+"</option>";
			else				
				days = days+"<option value = "+i+">"+i+"</option>";
		}
		return days;
	}
	function multiple_calendar(k){
		$('#month_'+k+'').change(function(){
			var month = $('#month_'+k+'').val();	
			var selector = $('#days_'+k+'').val();
			var year = $('#year_'+k+'').val();
			var counter = no_days(month);
			$('#days_'+k+'').html("");
			$('#days_'+k+'').html(display_days(counter,selector));
		});
		$('#year_'+k+'').change(function(){
			var month = $('#month_'+k+'').val();	
			var selector = $('#days_'+k+'').val();
			var year = $('#year_'+k+'').val();
			var check_feb = is_leap_year(month,year);
			var counter = no_days(month);
			if(check_feb == 29){
				$('#days_'+k+'').html("");
				$('#days_'+k+'').html(display_days(check_feb,selector));
			}
			else{	
				$('#days_'+k+'').html("");
				$('#days_'+k+'').html(display_days(counter,selector));
			}
		});
	}
});
