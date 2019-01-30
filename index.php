<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Belajarphp.net</title>
    </head>
<script src="js/jquery-1.4.2.js"></script>
<script src="js/jquery.hotkeys.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
    $(document).bind('keydown', 'f2', function() {
        alert('Save Data');
    });
    $(document).bind('keydown', 'f3', function() {
        alert('Clear Data');
    });
    $(document).bind('keydown', 'return', function() {
        alert('INI ENTER');
    });
});
</script>
    <body>
         SAVE [F2]<br/> 
         CLEAR [F3]<br/> 
		COBA TEKAN ENTER<br/>
    </body>

</html>