import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles({
    container: {
        padding:0,
        paddingBottom:25,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        borderRadius:"15px",
        backgroundColor: "#ffffff",
        marginTop: "2%"
    },
    centerItems: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    marginLeft: {
        marginLeft:1
    }
});