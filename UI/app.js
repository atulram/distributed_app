var a, b, result

function onAdd(){
    getInputs()
    makeApiCall("add")
}

function onSub(){
    getInputs()
    makeApiCall("sub")
}

function onMul(){
    getInputs()
    makeApiCall("mul")
}

function onDiv(){
    getInputs()
    makeApiCall("div")
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

function makeApiCall(operation){
    url = "http://127.0.0.1:8080/"+operation
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