import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "@assets/images/010203.jpg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";



const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }));
      
      const StyledImg = styled("img")(({}) => ({
        width: "90%",
        borderRadius: "50%",
        border: "1px solid white",
      }))

    return (
      <>
         <StyledHero>
            <Container  maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position={"relative"}>
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                        <Box position={"relative"} textAlign={"center"}>
                            <StyledImg src={Avatar} />
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center">Anne Melo</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent={"center"}>
                                <StyledButton>
                                    <FileDownloadIcon />
                                    <Typography>
                                        Dowloand CV
                                    </Typography>
                
                                </StyledButton>
                            </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent={"center"}>
                                <StyledButton>
                                    <AlternateEmailIcon /> 
                                        <Typography>
                                            Contact me
                                        </Typography>
                                </StyledButton>
                </Grid>
            </Grid>
            </Grid>
            </Grid>   
          </Container>
        </StyledHero>
     
       </> 
      
    )
  }
  
  export default Hero