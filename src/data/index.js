import { Header } from './Header';
import { SignupLawyer } from './SignupLawyer'; 
import { SignupRegular } from './SignupRegular';
import { Login } from './Login';
import { Comment , Post , Sidebar} from './Cases';
import { EditInfLawyer } from './EditInfLawyer'
import { NavInf } from './NavInf'

const data = {
    Header,
    SignupLawyer,
    SignupRegular,
    Login,
    Comment,
    Post,
    Sidebar,
    EditInfLawyer,
    NavInf
}

export const getData = (fileName, language, dataName) =>{
    return data[fileName][language][dataName];
}
export const getDataFile = (fileName, language) =>{
    return data[fileName][language];
}
