const formatString = function(string) {
 
 let str = '';
    
  if (string.length > 40) {str = string.substr(0,40); str += '...';}
        else {str = string}   

return(str);
  };


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
