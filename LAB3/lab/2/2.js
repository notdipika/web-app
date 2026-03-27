document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    let valid = true;


    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
    document.querySelectorAll("input, select").forEach(el => el.classList.remove("error"));

    const username = document.getElementById("username").value.trim();
    const fullName = document.getElementById("fullName").value.trim();
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value.trim();
    const terms = document.getElementById("terms").checked;
    
    if(username === "")
    {
        valid = false;
        document.getElementById("usernameError").textContent = "Username is required.";
        document.getElementById("username").classList.add("error");
    }

    if(fullName === "") 
    {
        valid = false;
        document.getElementById("fullNameError").textContent = "Full name is required.";
        document.getElementById("fullName").classList.add("error");
    }

    if(role === "") 
    {
        valid = false;
        document.getElementById("roleError").textContent = "Please select a role.";
        document.getElementById("role").classList.add("error");
    }

    if(email === "") 
    {
        valid = false;
        document.getElementById("emailError").textContent = "Email is required.";
        document.getElementById("email").classList.add("error");
    } else 
    {
        if(role === "Student" && !email.endsWith("@student.edu.np")) 
        {
            valid = false;
            document.getElementById("emailError").textContent = "Student email must end with @student.edu.np";
            document.getElementById("email").classList.add("error");
        }
        if(role === "Teacher" && !email.endsWith("@tutor.edu.np")) 
        {
            valid = false;
            document.getElementById("emailError").textContent = "Teacher email must end with @tutor.edu.np";
            document.getElementById("email").classList.add("error");
        }
    }

    if(password === "") 
    {
        valid = false;
        document.getElementById("passwordError").textContent = "Password is required.";
        document.getElementById("password").classList.add("error");
    }

    if(confirmPassword !== password)
    {
        valid = false;
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        document.getElementById("confirmPassword").classList.add("error");
    }

    if(age === "" || age <= 0) 
    {
        valid = false;
        document.getElementById("ageError").textContent = "Please enter a valid age.";
        document.getElementById("age").classList.add("error");
    }

    if(gender === "") 
    {
        valid = false;
        document.getElementById("genderError").textContent = "Please select your gender.";
        document.getElementById("gender").classList.add("error");
    }

    if(course === "")
    {
        valid = false;
        document.getElementById("courseError").textContent = "Please enter a course.";
        document.getElementById("course").classList.add("error");
    }

    if(!terms) 
    {
        valid = false;
        document.getElementById("termsError").textContent = "You must accept the terms.";
    }

    if(valid) 
    {
        alert("Form submitted successfully!");
    }
});
