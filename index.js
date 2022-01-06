              // =============================================  1  ==================================================

// getFirstValue([-500, 0, 50]) ➞ -500

        function getFirstValue(arr){
           console.log(arr[0]);
        }
        getFirstValue([-500,0,50])

               // =============================================  2  ==================================================
//     isLastCharacterN("Aiden") ➞ tr
//     isLastCharacterN("Piet") ➞ false

    function isLastCharacterN(str){
              if(str.match(/n+/gi)) console.log(true);
              else console.log(false);
         }
          isLastCharacterN("Aiden")
          isLastCharacterN("Piet")

               // =============================================  3  ==================================================
//  detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

    function detectWord(str){
         console.log(str.match(/[a-z]/g).join(''));
       }
    detectWord('bEEFGBuFBRrHgUHlNFYaYr')

               // =============================================  4  ==================================================
// 
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

     const minMax = (arr) => {
          if (arr.leangth === 1){
             console.log(Math.min(...arr));
        }else{
          console.log(Math.min(...arr),Math.max(...arr));
        }
     }
  minMax([45,2993,24])
