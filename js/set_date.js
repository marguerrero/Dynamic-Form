$(document).ready(function(){
	// student no 1 year
	$('<option value ="default" selected="selected">YEAR</option>').appendTo('select#year_0');	
	var i;
	for (i = 1905; i <= 2012; i++)
	{
		$('<option value ="'+i+'">'+i+'</option>').appendTo('select#year_0');	
	}
	// student no 1 month
	$('<option value ="default" selected="selected">MONTH</option>').appendTo('select#month_0');	
	$('<option value ="1" >January</option>').appendTo('select#month_0');	
	$('<option value ="2" >February</option>').appendTo('select#month_0');	
	$('<option value ="3" >March</option>').appendTo('select#month_0');	
	$('<option value ="4" >April</option>').appendTo('select#month_0');	
	$('<option value ="5" >May</option>').appendTo('select#month_0');	
	$('<option value ="6" >June</option>').appendTo('select#month_0');	
	$('<option value ="7" >July</option>').appendTo('select#month_0');	
	$('<option value ="8" >August</option>').appendTo('select#month_0');	
	$('<option value ="9" >September</option>').appendTo('select#month_0');	
	$('<option value ="10" >October</option>').appendTo('select#month_0');	
	$('<option value ="11" >November</option>').appendTo('select#month_0');	
	$('<option value ="12" >December</option>').appendTo('select#month_0');	
	// student no 1 days
	$('<option value ="default" selected="selected">DAYS</option>').appendTo('select#days_0');	
	var i;
	for (i = 1; i <= 31; i++)
	{
		$('<option value ="'+i+'">'+i+'</option>').appendTo('select#days_0');
	}	
});
