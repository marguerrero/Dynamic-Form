<?php

class Site extends CI_Controller{
	
	function index(){
		$this->load->view('template');
	}
	function validate(){
//validate server side
		$this->load->library('form_validation');
		$count = $this->input->get('list_size');
		$i = 1;
		$errors = 0;
		$information_list = "";
		$ci_lastname[0] = $this->input->get('lastname');
		$ci_firstname[0] = $this->input->get('firstname');
		$ci_address[0] = $this->input->get('address');
		$ci_email[0] = $this->input->get('email');
		$ci_age[0] = $this->input->get('age');
		$ci_course[0] = $this->input->get('course');
		$ci_year[0] = $this->input->get('year');
		$ci_month[0] = $this->month_converter($this->input->get('month'));
		$ci_days[0] = $this->input->get('days');
		for($i ; $i < $count; $i++){
			$ci_lastname[$i] = $this->input->get('lastname_'.$i.'');
			$ci_firstname[$i] = $this->input->get('firstname_'.$i.'');
			$ci_address[$i] = $this->input->get('address_'.$i.'');
			$ci_email[$i] = $this->input->get('email_'.$i.'');
			$ci_age[$i] = $this->input->get('age_'.$i.'');
			$ci_course[$i] = $this->input->get('course_'.$i.'');
			$ci_year[$i] = $this->input->get('year_'.$i.'');
			$ci_month[$i] =$this-> month_converter( $this->input->get('month_'.$i.''));
			$ci_days[$i] = $this->input->get('days_'.$i.'');		
		}

		for($i = 0 ; $i < $count; $i++){
			if(!isset($ci_lastname[$i])){
				$errors++;
				$information_list = $information_list."</p>Please Enter Your Last Name</p>";
			}else {
				$information_list = $information_list."<br />";
			}
			if(!isset($ci_firstname[$i])){
				$errors++;
				$information_list = $information_list."</p>Please Enter Your First Name</p>";
			}else {
				$information_list = $information_list."<br />";
			}
			if(!isset($ci_address[$i])){
				$errors++;
				$information_list = $information_list."</p>Please Enter Your Address</p>";
			}else {
				$information_list = $information_list."<br />";
			}
			if(!isset($ci_email[$i])){
				$errors++;
				$information_list = $information_list."</p>Please Enter Your Email</p>";
			}else {
				$information_list = $information_list."<br />";
			}
			if(!isset($ci_age[$i])){
				$errors++;
				$information_list = $information_list."</p>Please Enter Your Age</p>";
			}else {
				$information_list = $information_list."<br />";
			}
			if(!isset($ci_course[$i])){
				$errors++;
				$information_list = $information_list."</p>Please Enter Your Course</p>";
			}else {
				$information_list = $information_list."<br />";
			}
			if(($ci_year[$i] == "default")&&($ci_month[$i] == "default") && ($ci_days[$i])){
				$errors++;
				$information_list = $information_list."</p>Please Enter a Valid Birthday</p>";
			}else {
				$information_list = $information_list."<br />";
			}
			
		}
		if($errors == 0){
			$information_list = "<h2> List of Saved Information </h2>";
			for($i = 0; $i < $count; $i++){
				$information_list = $information_list."<div class = 'student_info'><br />";
				$information_list = $information_list."<h3> ".$ci_firstname[$i]." ".$ci_lastname[$i]."</h3>";
				$information_list = $information_list."<p>Address:".$ci_address[$i]."<p>";
				$information_list = $information_list."<p>Email:".$ci_email[$i]."<p>";
				$information_list = $information_list."<p>Age:".$ci_age[$i]."<p>";
				$information_list = $information_list."<p>Course:".$ci_course[$i]."<p>";
				$information_list = $information_list."<p>Birthday: ".$ci_month[$i]." ";
				$information_list = $information_list." ".$ci_days[$i]." ";
				$information_list = $information_list.", ".$ci_year[$i]."</p> ";
				$information_list .= "</div>";
			}
		}
		echo $information_list;	
	}		
	private function month_converter($data){
		$month;
		switch($data){
			case 1:
				$month = "January";
				break;
			case 2:
				$month = "Februrary";
				break;
			case 3:
				$month = "March";
				break;
			case 4:
				$month = "April";
				break;
			case 5:
				$month = "May";
				break;
			case 6:
				$month = "June";
				break;
			case 7:
				$month = "July";
				break;
			case 8:
				$month = "August";
				break;
			case 9:
				$month = "September";
				break;
			case 10:
				$month = "October";
				break;
			case 11:
				$month = "November";
				break;
			case 12:
				$month = "December";
				break;
		}
		return $month;
	}
}
