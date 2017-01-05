<?php
	$first = $_REQUEST['first'];
	$last = $_REQUEST['last'];
	$email = $_REQUEST['email'];
	$phone = $_REQUEST['phone'];
?>


<html>
<head>
	<title>A Submission</title>
	<link rel="stylesheet" href="css.css"/>

</head>
<body>
	<h1>You have made a submission</h1>
	
	First: <?php echo $first ?><br/>
	Last: <?php echo $last ?><br/>
	email: <?php echo $email ?><br/>
	phone: <?php echo $phone ?><br/>

<script src="js.js"></script>
</body>
</html>