//Write your solutions in this file, don't forget to test your functions.

    const countUpFromOne = (n) => {
        for(let i = 1; i <= n; i++) {
          console.log(i);
        }
      };

      countUpFromOne(10);

      
        const countEveryOdd = (n) => {
        for(i = 1; i <= n; i++) {
          if(i % 2 !== 0) {
            console.log(i);
          }
        }
    };
    countEveryOdd(10);


    const isNegative = (num) => {
       return num < 0; 
    };
           

    console.log(isNegative(3));

    const betweenFiveAndTwenty = (num) => {
        return num >= 5 && num <= 20;
    };
    console.log(betweenFiveAndTwenty(12));




