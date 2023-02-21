/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    const performOperation = operation => {
        let result;
        switch(operation) {
            case document.getElementById("addition").onclick:
                result = parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value);
                break;
            case 'substraction':
                result = parseInt(document.getElementById("op-one").value) - parseInt(document.getElementById("op-two").value);
                break;
            case 'multiplication':
                result = parseInt(document.getElementById("op-one").value) * parseInt(document.getElementById("op-two").value);
                break;
            case 'division':
                result = parseInt(document.getElementById("op-one").value) / parseInt(document.getElementById("op-two").value);
                break;
        }
        console.log(result);
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();