
 
function getElementsByClass(node,searchClass,tag) {
var classElements = new Array();
var els = node.getElementsByTagName(tag); // use "*" for all elements
var elsLen = els.length;
var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
for (i = 0, j = 0; i < elsLen; i++) {
if ( pattern.test(els[i].className) ) {
classElements[j] = els[i];
j++;
}
}
return classElements;
}

  function toggle(selectedLayer){
  // Written By: WillyDuitt@hotmail.com || 03-22-2005 \\;
   var div = getElementsByClass(document, 'toggleFAQ', '*');
    for(var i=0; i<div.length; i++){ 
         div[i].style.visibility = 'hidden';
		 div[i].style.display = 'none';
      }  

         document.getElementById(selectedLayer).style.visibility = 'visible';
		 document.getElementById(selectedLayer).style.display = "block";

  }
   var tk=1;
   function toggleAll(){ //this is for the button that expands or closes all answers.
   var div = getElementsByClass(document, 'toggleFAQ', '*');
  
   if (tk==0){
	for(var m=0; m<div.length; m++){ 
         div[m].style.visibility = 'hidden';
		 div[m].style.display = 'none';
      } //end for  
	  tk=1;
   }//end if t==0
   
   else  {//t==1
   for(var k=0; k<div.length; k++){ 
         div[k].style.visibility = 'visible';
		 div[k].style.display = 'block'
		 } //end for
		 tk=0;
   }//end else
  }//end function