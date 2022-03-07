(function() {



    const submit = document.querySelector("#submit");
    const test = document.querySelector("#test");

    submit.addEventListener("submit", function(e) {
        console.log(e);
        e.preventDefault();


    });

    /* submit.disabled = true;
     */

    console.log(test);


})();