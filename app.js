calcsplit=()=>
{
    let amount=document.getElementById("amount");
    let persons=document.getElementById("person");

    let result=(amount.value/persons.value).toFixed(2);
    let finalResult=result+"Rs each!";
    
    amount.value='';
    persons.value='';

    document.getElementById('result').innerText = finalResult;
}
