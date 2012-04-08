<div id = "content_wrapper">
	<div id ="title_wrapper">
		<h1>Student info</h1>
	</div>
	<div id ="field_wrapper">
		<?php echo form_open('index.php/site/save');?>
		<input id = "list_size" type = "hidden" name = "list_size" value = "1"/>
		<ul><li id = "original">
			<div id = "forms">
					<div id ="error_wrapper_0">
					<p> </p>
					</div>
					<?php
					for($i = 1; $i <= 31; $i++)
						$days[$i]=$i;
						for($i = 1905; $i <= 2011 ; $i++)
							$year[$i] = $i;
						$year = array();
						$month = array();
						$days = array();
						echo "<h3>Student No.1</h3>";
						echo"<label for ='lastname_0'>Last Name : </label>".form_input('lastname', '','id = lastname_0 placeholder="Last Name"');
						echo "<label for = 'firstname_0'>First Name:</label>". form_input('firstname', '','id=firstname_0 placeholder = "First Name"');
						echo "<label for ='address_0'>Address</label>".form_input('address', '','id=address_0 placeholder = "Address"');
						echo "<label for ='email_0'>Email </label>".form_input('email', '','id = email_0 placeholder = Email');
						echo "<label for = 'age_0'>Age </label>".form_input('age', '','id=age_0 placeholder=Age onkeypress="return is_numberkey(event)"');
						echo "<label for ='course_0'>Course</label>".form_input('course', '','id = course_0 placeholder = Course');
						echo "<br />";
						echo "<label for ='year_0'>Birthday</label><br />".form_dropdown('year', $year,'','id=year_0');	
						echo form_dropdown('month', $month, '','id=month_0');
						echo form_dropdown('days', $days, '', 'id=days_0');	
						?>
			</div>
			<div id = "server_side_errors_0" class = "error_handling">
			</div>
		</li></ul>	
		<div id ="save">		
			<?php
		         echo form_submit('submit','Save','id=save');
			 echo form_close();?>
		</div>
		<div id = "options">
			<button class = "option_buttons" id = "add">Add More</button>
			<button class = "option_buttons" id = "delete">Remove</button>
		</div>
	</div>
	<div id ="display_list">
	
	</div>
</div>
</body>
</html>
