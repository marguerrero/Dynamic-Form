<div id = "content_wrapper">
	<h1>Student info</h1>
	<div id ="field_wrapper">
		<?php 
			echo form_open();
			echo form_input('lastname', 'Last Name');
			echo "<br />".form_input('firstname', 'First Name');
			echo "<br />".form_input('address', 'Address');
			echo "<br/>".form_input('email', 'Email');
			echo "<br />".form_input('age', 'Age');
			echo "<br />".form_input('course', 'Course')."<br />";
			$month = array('default' => 'month');
			$days = array('default' => 'day' );
			$year = array('default' => 'year');
			for ($i = 1 ; $i <= 12; $i++)
			{	$month[$i]=$i;}
			for($i = 1; $i <= 31; $i++)
				$days[$i]=$i;
			for($i = 1905; $i <= 2011 ; $i++)
				$year[$i] = $i;
			echo "<label for = 'month'>Birthday</label>".form_dropdown('month', $month, 'default' ,'id = "month"');
			echo form_dropdown('days', $days, 'default', 'id = "days" ');
			echo form_dropdown('year', $year, 'default', 'id = "year" ');
			echo "<br />".form_submit('add', 'Add More');
			echo form_close();
		?>
	</div>

</div
>
</body>
</html>
