const togglePassword =
document.getElementById("togglePassword");

const password =
document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if(password.type === "password")
    {
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
    else
    {
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});

document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const pass =
    document.getElementById("password").value;

    if(email === "" || pass === "")
    {
        alert("Please fill all fields");
        return;
    }

    alert("Login Successful!");

    window.location.href = "dashboard.html";
});

const resetForm =
document.getElementById("resetForm");

if(resetForm)
{
    resetForm.addEventListener("submit", function(e)
    {
        e.preventDefault();

        const email =
        document.getElementById("resetEmail").value;

        alert(
            "Password reset link sent successfully to:\n\n" +
            email
        );

        window.location.href = "index.html";
    });
}