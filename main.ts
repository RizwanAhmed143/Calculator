
 import inquirer from "inquirer"


    
    let calculatorInputs = await inquirer.prompt ([
    
       {  
         type :"number",
         name :"numberone",
         message:"enter your first number"
    
       },
        
       {  
         type :"number",
         name :"numbertwo",
         message :"enter your second number"
      },
      {
        type :"list",
        name :"operation",
        message: "which operation you want to select",
        choices:["addition", "substraction", "multiplication", "division"]
      }   

     ])
         console.log(calculatorInputs.operation);

         if (calculatorInputs.operation==='addition') {
          console.log(calculatorInputs.numberone + calculatorInputs.numbertwo);
         } else if (calculatorInputs.operation==='substraction') {
          console.log(calculatorInputs.numberone - calculatorInputs.numbertwo); }
          
            else if (calculatorInputs.operation==='multiplication') {
              console.log(calculatorInputs.numberone * calculatorInputs.numbertwo);
          }
            else if (calculatorInputs.operation==='division') {
              console.log(calculatorInputs.numberone / calculatorInputs.numbertwo);
          }































     
    //       const{numberone, numbertwo, operator} = answer

    //  if (numberone && numbertwo && operator) {
    //     let result :number =0
        
    //     if(operator ==="Addition(+)"){

    //         result = numberone + numbertwo
    //     } else if (operator ==="Substraction(-)") {

    //         result = numberone - numbertwo
    //     }  if (operator ==="Multiplication(*)") {

    //         result = numberone * numbertwo
    //     } if (operator ==="Division(/)") {

    //         result = numberone / numbertwo
        
    //       console.log("Your result is:", result)}
    //  }       
    
    //   else {console.log("Enter valid operator")} 
