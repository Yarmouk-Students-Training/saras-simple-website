const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/


const validatePassword = (password) => {
    return passwordRegex.test(password)
}

const validatePasswordWithConfirmPasswrod = (password, confirmPassword) => {
    return password === confirmPassword
}
export const validatePasswordAndComfirmPassord = (password, confirmPassword) => {
    if(validatePassword(password) === false){
        console.log(password,confirmPassword)
        throw new Error("passowrd Validation Error")}
    console.log(password, confirmPassword)
    if(validatePasswordWithConfirmPasswrod(password, confirmPassword) === false)
        throw new Error("confirm Password not equal to password")
    
        return true
}
