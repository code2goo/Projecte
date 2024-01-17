# BMI Calculator as Function
## 1. Calculate BMI
- Create a function named `calculateBMI`
- It takes two arguments:
  - `weight` (number) and
  - `height` (number)
- It returns the BMI value calculated as below:   
BMI = `weight / ( height / 100 * height / 100 )`
* Make sure to round the output to 2 decimal places

## 2. Compare BMIs
- Create a function named `whoIsBiggest`
- It takes four arguments:
  - two name strings and
  - two bmi numbers
- It returns the name string of the bigger person  

Example:  
`whoIsBiggest("Frank", "Mark", 26.72, 28.33)` => "Mark"

**Bonus**

- Rewrite the **whoIsBiggest** function to take six arguments: `Person 1 name`, `Person 2 name`, `Person 1 weight`, `Person 2 weight`, `Person 1 height`, `Person 2 height`
- The **whoIsBiggest** function should use the **calculateBMI** function to calculate the BMI for both people, before comparing them and returning the name of the person with the bigger BMI (that means that in the global scope only the **whoIsBiggest** function is called)