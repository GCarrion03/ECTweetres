<?php
$config = require 'properties.php';
if ($_GET['run']) {
  # This code will run if ?run=true is set.
  exec("cd ". $config['title'] ." && ./start_harvesting.sh");
}
if ($_GET['stop']) {
  # This code will stop if ?stop=true is set.
  exec("cd ". $config['title'] ." && ./stop_harvesting.sh");
}
$logfile =  $config['title'] ."/log_harvester__.dat";  
?>
<script>
function displayOutput()
{
    var html = <?php
        echo filesize($logfile)
            ? json_encode(file_get_contents($logfile))
            : '"Log file is getting generated"'; 
        ?>;
    document.forms[0].text1.value = html;
}
</script>

<!-- This link will add ?run=true to your URL, myfilename.php?run=true -->
<form>
<textarea type="text" name="text1" id="text1" rows="10" cols="50">
</textarea>
<a href="?run=true">Start Harvesting</a>
<a href="?stop=true">Stop Harvesting</a>
<script>
displayOutput();
</script>
</form>
