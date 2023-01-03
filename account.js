function depositeMoney(){

    var AccountBalance = parseFloat(document.getElementById("balanceAmount").value);

    var AddMoney = parseFloat(document.getElementById("labelText").value);

    document.getElementById("balanceAmount").value = AccountBalance + AddMoney;


    alert( "Your Deposite of $"+ AddMoney + " Has been deposited Succesfully");

}

function withdrawMoney() {

    var AccountBalance = parseFloat(document.getElementById("balanceAmount").value);

    var MinusMoney = parseFloat(document.getElementById("labelText").value);

    document.getElementById("balanceAmount").value = AccountBalance - MinusMoney;

    alert("Withdrawl of $"+MinusMoney+" Successful 🤑");

}

