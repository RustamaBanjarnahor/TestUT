 
<!--<HTML>
<HEAD>
<TITLE>Rekursif</TITLE>
</HEAD>
<BODY>
<script type="text/javascript">-->
 function ReverseString(str) { 
  
    if(!str || str.length <2 ||  
            typeof str!== 'string') { 
        return 'Not valid';  
    } 
      
    // Take empty array revArray 
    const revArray = []; 
    const length = str.length - 1; 
      
    // Looping from the end 
    for(let i = length; i >= 0; i--) { 
        revArray.push(str[i]); 
    } 
      
    // Joining the array elements 
    return revArray.join(''); 
} 
  
document.write(ReverseString("semua kata-kata")) 

<!--</SCRIPT>
</BODY>
</HTML>-->
