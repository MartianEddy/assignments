

     // Write a program that prints numbers from 1 to 100. But for multiples of three print
     // ‘FIZZ’ instead of the number and for the multiples of five print ‘BUZZ’ and finally for
     // the multiples of three and five print ‘FIZZBUZZ’.

     for (var i = 1; i < 101; i++) {                                    
         
     if (i % 15 == 0) console.log("FizzBuzz");
     else if (i % 3 == 0) console.log("Fizz");
     else if (i % 5 == 0) console.log("Buzz");
     else console.log(i);
      }  
    
      // Given an array of integers nums and an integer target, return indices of the two
      // numbers that up to target

      for(int i=0;i<nums.size()-1;i++)
            {
            for(int j = i+1;j<nums.size();j++)

            {
            if(nums[i]+nums[j]==target)

            }

            }



      // Given an integer x, return true if x is a palindrome integer. //NB: An integer is a
     // palindrome when it reads the same backward as forward e.g 121.

     const isPalindrome2 = n => {
      if (n < 0) { return false; }
      let num = Math.abs(n);
      const arr = [];                                    ///anagram///
      let i = 1;
      while (num > 0) {
        const min = num % (10 ** i);
        num = num - min;
        i++;
        arr.push(min);
      }
      i = i - 2;
      let j = 0;
      return n === arr.reduce((res, x) => {
        const add = (x/ (10 ** j)) * (10 ** i);
        res += add;
        i--;
        j++;
        return res;
      }, 0);
    };
    
    console.log(isPalindrome2(121));     

      // Write a program that takes a set of numbers and return the sum of all the numbers
     // passed. (Rest and spread operators)

     var arr = [1, 2, 4, 3, 2]

	var sum = 0;

	arr.forEach(x => {
		sum += x;
	});

	document.write("Sum is " + sum);


	////
	function printsum(...num){
		let total=0
		for ( let i=0;i<=numslenght; i++)
	}                            