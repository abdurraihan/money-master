
//function for take all input value;
function getInputValue(inputName){

   const inputValue = document.getElementById(inputName).value;
   const givInput = parseFloat(inputValue);
   if(givInput>0){
   return  givInput;
   }

   //for showing error message if input value is -number of string;
   else{
      const error =  document.getElementById('error-message'); 
       error.style.display='block';
   }
} 


//handle clanculat-btn
document.getElementById('calculat-btn').addEventListener('click',function(){

    
  const  totalExpense = document.getElementById('total-expense-balance');
    totalExpense.innerText =  getInputValue('food') + getInputValue('rent') + getInputValue('clothes');

    const  totalExpenseValue = parseFloat(totalExpense.innerText);
    const balance = document.getElementById('balance');

    const income =  getInputValue('income') 
    balance.innerText = income - totalExpenseValue;

    //for showing error massage
    if(totalExpenseValue>income){
        const error =  document.getElementById('error-message-balance'); 
        error.style.display='block';
    }

 

   
})


// handle save btn
document.getElementById('save-btn').addEventListener('click', function(){

    //for saving valance valance
    const saveInput = getInputValue('save-input');
    const income =  getInputValue('income');

    const savingAmount = document.getElementById('saving-amount');

    savingAmount.innerText = (income / 100 ) * saveInput; 

    const savingAmountValue = parseFloat(savingAmount.innerText);


    //for reamaining balance
    const balance = document.getElementById('balance');
    const balanceValue = parseFloat(balance.innerText) ;

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balanceValue -  savingAmountValue ;

    //for show error message;
    if(savingAmountValue > balanceValue )
    {
        const error =  document.getElementById('error-message-rem-balance'); 
        error.style.display='block';
    }


})