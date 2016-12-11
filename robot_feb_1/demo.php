<?php 
$fname = Request.Form("name");
echo "Dear " & fname & ". ";
echo "<br>"; 
$city=Request.Form("city");
echo "Hope you live well in " & city & ".";
?>