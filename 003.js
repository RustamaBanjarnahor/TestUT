<!DOCTYPE html>
<html>
<head>
  <title>  Average  </title>
</head>
<body>

    <p>Click on the button below t
      o find out the minimum and
      maximum of the array
      [70, 60, 80, 30, 100]</p>

    <p>Min: <span class="min">
      </span>
        <br>Max: <span class="max">
      </span></p>
    <button onclick="findMinMax()">
      Click to check
  </button>
    <script>
        function findMinMax() {
            array = [70, 60, 80, 30, 100];
            minValue = Math.min(...array);
            maxValue = Math.max(...array);
            document.querySelector(
              '.min').textContent = minValue;
            document.querySelector(
              '.max').textContent = maxValue;
        }
    </script>
</body>

