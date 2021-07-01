import { makeStyles } from '@material-ui/core';
 
export const useStyles = makeStyles({
    container: {
        maxWidth:650,
        padding:0,
        paddingBottom:25,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        borderRadius:"15px",
        backgroundColor:'#FFFFFF'
    },
    flexGroup: {
        display:'flex',
        flexDirection:'row',
    },
    fullWidth: {
        marginLeft:5,
        width:'98%'
    },
    centerItems: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    radio: {
        marginLeft:15,
        paddingTop:10,
        fontWeight:'bold',
    },
    genderPadding: {
        padding:5
    }
});
