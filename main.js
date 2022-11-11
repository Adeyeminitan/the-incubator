email = document.getElementById('email');
submit = document.getElementById("submit");
message = document.getElementById("error-message");

submit.addEventListener("click", submitForm);

    function submitForm()
    {
        const data = { email: email.value };

        if (email.value != "") {
            fetch('https://php.techtrend.africa/subscribe.php', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },

            body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                message.innerHTML = data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        else{
            message.innerHTML = "Please provide your email";
        }
        
        

}



