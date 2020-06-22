<HTML>
<HEAD>
<TITLE>Rekursif</TITLE>
</HEAD>
<BODY>
  <script type="text/javascript">
function faktorial(n) {
if (n == 0)
return(1);
else
return( n * faktorial(n-1));
}
var z = 77;
document.write("4! = " + faktorial(4));

</SCRIPT>
</BODY>
</HTML>

