<html>

<body>
  <script type="text/javascript">
    function checkPalindrome() {
      var revStr = "";
      var str = document.getElementById("str").value;
      var i = str.length;
      for (var j = i; j >= 0; j--) {
        revStr = revStr + str.charAt(j);
      }
      if (str !== revStr) {
        alert("True");
      } else {
        alert("False");
      }
    }
  </script>
  <form>

    palindrome <input type="text" id="str" name="string" />
    <br />
    <input type="submit" value="Check" onclick="checkPalindrome();" />
  </form>
</body>

</html>
