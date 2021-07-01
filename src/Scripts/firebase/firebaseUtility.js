import firebase from './firebase'

export const createRecaptchaVerifier = (recaptcha) => {
    try{
        window.recaptchaVerfier = new firebase.auth.RecaptchaVerifier(recaptcha, {
        size: "invisible"
    })}
    catch(err){
        console.log(err)
    }
}

export const sendOTPCodeThrowFirebase = async (phoneNumber) => {
    console.log(phoneNumber)
    const recaptcha = window.recaptchaVerfier
    try{
        const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha);
        return confirmationResult;
    }catch(error){
        console.log(error)
        alert(error);

        throw new Error(error.message)

    }
}

export const verfiyOTPCode = async(confirmCode, code) => {
    try{
        const confirmedData = await confirmCode.confirm(code)
        return confirmedData
    }
    catch(error){
        throw new Error(error)
    }
}

export const getFirebaseUserToken = async(confirmedData) =>{
    try {
        const token = await confirmedData.user.getIdToken()
        return token
    }catch(error){
        throw new Error(error)
    }
}