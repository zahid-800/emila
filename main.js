// mobile menu show
function showSidebar(){
  const sidebar= document.getElementById('sidebar').style.display='flex'
}
// mobile menu hide
function hideSidebar(){
  const sidebar= document.getElementById('sidebar').style.display='none'
}
// nav function end


function leapYear(year){
  if((year % 400 === 0) || ((year % 4 === 0) &&  (year % 100 !== 0))){
      console.log(`${year} is a leap year`);
  }
  else
  {
    console.log(`${year} is a not leap year`);
  }
}


leapYear(2029)





 const vowles=['a','e', 'i', 'o', 'u' ,'A','E','I','O','U']
function vowlesCount(sentence){
   let count=0;
 
   const letters=Array.from(sentence);
   letters.forEach(function(value, index, array){
      if (vowles.includes(value)){
        count++;
     
      }
   });

return count;

}

console.log(vowlesCount('Where are you from my name is Zahid Hasan'));




const numbers=[2,4,6,3,2,8,9,3]
let xy=numbers.filter(function(value, index, array) {
  return array.indexOf(value) === index;
});

console.log(xy);