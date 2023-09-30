/*// Add an event listener to the button with the id "zero"
document.getElementById("zero").addEventListener("click", function() {
    // Get the text content of the clicked button
    var buttonText = this.textContent;
    
    document.getElementById("resultArea").innerHTML += buttonText;
    // Display the button's text content (in this case, "0")
});


document.getElementById("ac").addEventListener("click", function() {
    document.getElementById("resultArea").innerHTML = "";
});
*/

document.getElementById('buttonContainer').addEventListener('click', function(event) {
    // Check if the clicked element is a button
    if (event.target.tagName == 'BUTTON') {
        let buttondId = event.target.id;
        let buttonText = event.target.textContent;

    switch (buttondId) {
        case 'ac':
            document.getElementById('resultArea').innerHTML = "";
            break;
        case 'zero':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'one':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'two':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'three':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'four':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'five':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'six':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'seven':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'eight':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'nine':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'modulo':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'division':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'multipl':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'sub':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'add':
            document.getElementById('resultArea').innerHTML += buttonText;
            break;
        case 'del':
            let len = document.getElementById('resultArea').innerHTML.length;
            if (len > 0) {
                let str = document.getElementById('resultArea').textContent;
                document.getElementById('resultArea').innerHTML = str.substring(0, len - 1);
            }
            else{
                document.getElementById('resultArea').innerHTML = "";
            }
            break;
        case 'equ':
            try{
                let result = eval(document.getElementById('resultArea').innerHTML);
                document.getElementById('resultArea').innerHTML = result;
            } catch {
                alert("error");
            }
        default:
            break;
        }
    }
});