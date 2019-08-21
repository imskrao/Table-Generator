function tableLoop() {
    let inputNum = document.getElementById("myNum");
    let outputTable = "";

    if (inputNum.value == "") {
        // alert("Please input value");
        document.getElementById('myTable').innerHTML = "Please input value.";
    }
    else if (isNaN(inputNum.value)) {
        // alert('I am not a number');
        document.getElementById('myTable').innerHTML = "I am not a number.";
    }
    else {
        for (let i = 1; i <= 10; i++) {
            outputTable += parseInt(i * inputNum.value) + "<br/>";
        }
        document.getElementById("myTable").innerHTML = outputTable;
    }
}