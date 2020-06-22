
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Nilai</title>
</head>
<body>
    <script>
        var nilai = prompt("Nilai Grade:");
        var grade = "";

        if(nilai >= 90) grade = "A"
        else if(nilai >= 80 ) grade = "B"
        else if(nilai >=70 ) grade = "C"
        else if(nilai >=60) grade = "D"
        else if(nilai <= 59) grade = "E"
        

        document.write(`<p>Grade: ${grade}</p>`);
    </script>
</body>
</html>
