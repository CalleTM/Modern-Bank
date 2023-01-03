            function checkPassword(form) { 

                Password = form.Password.value;

                CPassword = form.CPassword.value;

                if (Password == '') 

                    alert ("Please enter Password"); 

                else if (CPassword == '') 

                    alert ("Please enter confirm password"); 

                else if (Password != CPassword) { 

                    alert ("\nPassword did not match: Please try again...") 

                    return false; 

                } 

                else{ 
                    window.location = "Sign-In.html"; 
                    alert("Welcome") 
                    return true; 

                } 

            } 