<!DOCTYPE html>
<html>

<head>
<title>
  Tahun Kabisat
</title>
</head>

<body>
Input Year: <input type="text" id = "year"/>

<input type="button" id="button" onClick="isTahunKabisat()"
        value="Check Leap Year">
<p id="True/False"></p>
<script>
    function isTahunKabisat() {
        var year= document.getElementById("year").value;

        document.getElementById("True/False").innerHTML
            = (year % 100 === 0) ? (year % 400 === 0)
                                 : (year % 4 === 0);
    }
</script>
</body>

</html>
