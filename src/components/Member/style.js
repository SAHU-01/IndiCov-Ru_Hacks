export default function style(theme) {
    return {
     
      infoHolder: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding: "0% 10%",
        background: theme.palette.background.containerColor,
        marginTop:'4rem',
        borderRadius:'8px'
      },
      infoHolder2: {
        display:'flex',
        alignItems:'center',
        width:'100%',
        background: theme.palette.background.containerColor,
        marginTop:'4rem',
        borderRadius:'8px',
        padding:'1rem 0rem'
      },
      role:{
        color: theme.palette.highlight.blue,
        fontWeight:'600'
      },
      image: {
        width: "180px",
        // height: '180px',
        margin:'0rem 4.5rem',
        border: '6.30612px solid' + theme.palette.background.containerColor,
        objectFit:'contain',
        borderRadius:'50%',
        marginTop:'-4rem'        
      },
      image2: {
        width: "120px",
        height: '120px',
        border: '6.30612px solid' + theme.palette.background.containerColor,
        objectFit:'contain',
        borderRadius:'50%',           
      },
      imageWrapper:{
        width:'80%',
        display:'flex',
        justifyContent:'center'
      },
      title: {
        color: theme.palette.text.primary,
        
      },
      description: {
        color: theme.palette.text.secondary,
      },
      member:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        margin:'1rem'
        
      },
      infoBox:{
        width:'100%',
        paddingTop:'1rem',
        
      }
    };
  }
  