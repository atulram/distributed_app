var a, b, result

function onAdd(){
    getInputs()
    makeApiCall("python", "add")
}

function onSub(){
    getInputs()
    makeApiCall("python", "sub")
}

function onMul(){
    getInputs()
    makeApiCall("node", "mul")
}

function onDiv(){
    getInputs()
    makeApiCall("node", "div")
}

function getInputs(){
    a = parseInt(document.getElementById("inp1").value)
    b = parseInt(document.getElementById("inp2").value)
}

function showResult(){
    document.getElementById("ansWrap").style.display = "contents"
    try{
        document.getElementById("ans").innerHTML = result.toFixed(2);
    } catch(error) {
        document.getElementById("ans").innerHTML = "not defined"
    }
}

function makeApiCall(servername, operation){
    if(servername === "python"){
        url = "http://127.0.0.1:5000/"+operation
    } else if(servername === "node"){
        url = "http://127.0.0.1:8080/"+operation
    }
    const data = { "inp1": a, "inp2": b };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        result = data.ans
        showResult()
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}