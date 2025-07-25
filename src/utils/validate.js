export const checkValidation =(email,password,name)=>{
//  if(email.length===0||name.length==0|| password.length==0){
//   return 'inncreas length!'
//  }

if(name){
     const nameRegex = /^[a-zA-Z]+(?:[ '\\-a-zA-Z]+)*$/;

    const isname = nameRegex.test(name)
  
      if(!name) return 'Please Enter a valid name'
  return null
}

    const emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const isEmailValid=emailPattern.test(email);

     const passwordPattern = /^(?=.{8,})((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    const isPasswordValidation = passwordPattern.test(password)

  if(!isEmailValid) return 'Email is not valid'
  if(!isPasswordValidation) return 'Password is not valid'
 
}