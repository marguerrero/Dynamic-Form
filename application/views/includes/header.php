<html>
<head>
	<title> Dynamic Form </title>
	<link rel = "stylesheet" href="<?php echo base_url();?>css/style.css" type ="text/css" media = "screen" title="no title" charset = "utf-8" />
	<script src = "<?php echo base_url();?>js/jquery.js" type = "text/javascript"></script>
	<script src = "<?php echo base_url();?>js/calendar.js" type = "text/javascript"></script>
	<script src = "<?php echo base_url();?>js/dynamic_form.js" type = "text/javascript"></script>
	<script src = "<?php echo base_url();?>js/validation.js" type = "text/javascript"></script>
	<script src = "<?php echo base_url();?>js/set_date.js" type = "text/javascript"></script>
	<!--<script src = "<?php echo base_url();?>js/submit.js" type = "text/javascript"></script>-->
	<script type = "text/javascript">
	$('#save').click(function(){
		return false;
	}
	</script>	
	<script language = Javascript>
		<!--
		function is_numberkey(evt){
			var char_code = (evt.which) ? evt.which : event.keyCode
			if (char_code > 31 && (char_code < 48 || char_code > 57))
			{
				return false;
			}
			return true;
		}
		-->
	</script>
</head>
<body>
