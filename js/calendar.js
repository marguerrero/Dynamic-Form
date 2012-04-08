$(document).ready(function(){
	$('#month_0').change(function(){
		var month = $('#month_0').val();	
		var selector = $('#days_0').val();
		var year = $('#year_0').val();
		var counter = no_days(month);
		$('#days_0').html("");
		$('#days_0').html(display_days(counter,selector));
	});
	$('#year_0').change(function(){
		var month = $('#month_0').val();	
		var selector = $('#days_0').val();
		var year = $('#year_0').val();
		var check_feb = is_leap_year(month,year);
		var counter = no_days(month);
		if(check_feb == 29){
			$('#days_0').html("");
			$('#days_0').html(display_days(check_feb,selector));
		}
		else{	
			$('#days_0').html("");
			$('#days_0').html(display_days(counter,selector));
		}
		});
	
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
			function display_days(a,b )
			{
				var days = "<option value = 'default'>DAY</option>";
			var i = 1;
			
			for(i; i <= a; i++)
			{
				if(i == b)
					days = days+"<option selected ='selected' value = "+i+">"+i+"</option>";
				else
				
					days = days+"<option value = "+i+">"+i+"</option>";
			}
			return days;
		}
	});
			
