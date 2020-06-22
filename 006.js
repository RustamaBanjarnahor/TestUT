<HTML>
<HEAD>
<TITLE>Rekursif</TITLE>
</HEAD>
<BODY>
<PRE>
<script type="text/javascript">

var baris, i = 0;
var nilai_prompt = prompt("Tinggi: ", 0);
var tinggi = parseInt(nilai_prompt);
for (baris = 1; baris <= tinggi ; baris++) {

for (i = 1; i <= tinggi - baris; i++) {
document.write(" ");
}
for (i = 1; i < 2 * baris; i++) {
document.write("*");
}
document.write("\n");
}

</SCRIPT>
</PRE>
</BODY>
</HTML>
