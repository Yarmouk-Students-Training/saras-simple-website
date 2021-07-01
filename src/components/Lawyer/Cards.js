import React from 'react';
import SideCard from './SideCard';
import Grid from '@material-ui/core/Grid';

const Cards = () =>{
   
   return ( 
      
    <Grid
    container
    direction="column"
    style={{marginTop: '8%'}}
    >
    <SideCard votes={12} name = "Maisam Khasawneh" img = 'https://www.jba.org.jo/CMS/UploadedFiles/Images/2116.jpg' specialization ="Personal Injury Lawyer" status ="Practiced" location= "Irbid" loclink ="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone ="0790749092" />
    <SideCard votes={12} name = "Batool Bataineh" img= 'https://www.jba.org.jo/CMS/UploadedFiles/Images/2142.jpg' specialization ="Personal Injury Lawyer" status ="Practiced" location= "Irbid" loclink ="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone ="0790749092"/>
    <SideCard votes={12} name = "Sara Aldamiri" img= '/LW4.jpg'  specialization ="Personal Injury Lawyer" status ="Practiced" location= "Irbid" loclink ="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone ="0790749092"/>
    <SideCard votes={12} name = "Boshra Aasi"  img= '/1.jpg' specialization ="Personal Injury Lawyer" status ="Practiced" location= "Irbid" loclink ="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone ="0790749092"/>
    <SideCard votes={12} name = "Mohammed Wahbeh" img= 'https://www.jba.org.jo/CMS/UploadedFiles/Images/9250.jpg' specialization ="Personal Injury Lawyer" status ="Practiced" location= "Irbid" loclink ="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone ="0790749092"/>
    <SideCard votes={12} name = "Abdalrahman Al-Ashgr" img= '3.jpg' specialization ="Personal Injury Lawyer" status ="Practiced" location= "Irbid" loclink ="https://goo.gl/maps/j5ngj88PhPhepdPW8/" phone ="0790749092"/>
   </Grid>
   )
   
}

export default Cards ;