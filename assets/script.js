function loginUser(event){
      event.preventDefault();
      const email = document.getElementById("email").value;
      const pass  = document.getElementById("password").value;
      const msg   = document.getElementById("message");

      if(email === "user@example.com" && pass === "password123"){
        msg.innerHTML = "<span class='text-success'>Login successful!</span>";
      } else {
        msg.innerHTML = "<span class='text-danger'>Invalid credentials</span>";
      }
    }

