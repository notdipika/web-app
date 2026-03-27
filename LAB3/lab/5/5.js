const password = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");
const statusText = document.getElementById("status");
const icon = toggleBtn.querySelector("i");

let isVisible = false;

toggleBtn.addEventListener("click", () => {
    if (isVisible) 
    {
        password.type = "password";
        statusText.textContent = "Password is Hidden";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
        isVisible = false;
    } else 
    {
        password.type = "text";
        statusText.textContent = "Password is Visible";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        isVisible = true;
    }
});
