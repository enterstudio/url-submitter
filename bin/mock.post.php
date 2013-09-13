<?php 

	header('Content-type: application/json');

	if ($_GET["fail"] === 'true') {

		echo "{success : fail , message : 'Something went wrong with your submission'}"; 


	} else {

		echo "{success : true , message : 'Url has been submitted'}"; 


	}

?>