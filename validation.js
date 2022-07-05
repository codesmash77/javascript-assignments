const form = document.getElementById('myform');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorElement = document.getElementById('errors');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let valid = true;
    let errors = [];
    let checked=0;
    const mail= "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";

    for(const element of form.permissions)
    {
        if(element.checked === true)
            checked++;
    }

    if(checked<2)
    {
        errors.push("Atleast two permissions must be ticked out!  ");
        valid = false;
    }
    
    if(!email.value.match(mail))
    {
        errors.push("Invalid Email!  ");
        valid=false;
    }

    console.log(valid,errors)

    if(valid === false)
        errorElement.innerText = errors.join('\n');

    else{
        element = document.getElementById("myform");
        element.remove();

        const title = document.createElement("formtitle");
        title.className = "confirmtitle";
        const lineBreak = document.createElement('br');

        let formtitle = document.createTextNode("Confirm Your Details!");
        title.appendChild(formtitle);
        document.getElementById("registerForm").appendChild(title);
        document.getElementById("registerForm").appendChild(lineBreak);

        let details = []
        details.push(email.value, password.value, form.gender.value, form.role.value);
        
        let confirm = document.createTextNode([...details])
        const userdetails = document.createElement("userdetails")
        userdetails.appendChild(confirm);
        userdetails.className = "confirmdetails"
        document.getElementById("registerForm").appendChild(userdetails);
        document.getElementById("registerForm").appendChild(lineBreak);
        document.getElementById("registerForm").appendChild(lineBreak);

        let confirmbtn = document.createElement("button");
        confirmbtn.innerHTML = "Confirm Details";
        confirmbtn.className = "confirmBtn";
        document.getElementById("registerForm").appendChild(confirmbtn);
        confirmbtn.onclick = () => {
            alert("User details has been registered successfully!");
        }
    }
})

