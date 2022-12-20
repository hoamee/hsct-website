import React from 'react';
import { Link } from '@mui/material';
import imgContactUs from 'assets/images/landing/contact-us.png';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Grid,
    Typography
} from '@mui/material';
import { gridSpacing } from 'store/constant';

// assets
import mailImg from 'assets/images/landing/img-contact-mail.svg';

// ===========================|| CONTACT CARD - FORMS ||=========================== //

const ContactCard = () => {
    const theme = useTheme();


    return (
        <Container>
            <Grid container justifyContent="center" spacing={gridSpacing}>
                <Grid item sm={10} md={7} sx={{ mt: { md: 12.5, xs: 2.5 }, mb: { md: 12.5, xs: 2.5 } }}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h1"
                                color="white"
                                component="div"
                                sx={{
                                    fontSize: '3.5rem',
                                    fontWeight: 900,
                                    lineHeight: 1.4,
                                    [theme.breakpoints.down('md')]: { fontSize: '1.8125rem', marginTop: '80px' }
                                }}
                            >
                                Trò chuyện cùng chuyên gia từ
                                <Box component="span" sx={{ ml: 1, color: '#DC143C' }}>
                                    HSCT
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ position: 'relative', display: { xs: 'none', lg: 'block' } }}>
                    <img
                        src={mailImg}
                        alt="Berry"
                        style={{
                            marginBottom: -0.625,
                            position: 'absolute',
                            bottom: -90,
                            right: '0',
                            width: 400,
                            maxWidth: '100%',
                            animation: '5s wings ease-in-out infinite'
                        }}
                    />
                </Grid>
                <Grid item xs={10} sx={{ mb: -37.5 }}>
                    <Card sx={{ mb: 6.25 }} elevation={4}>
                        <CardContent sx={{ p: 4 }}>
                            <img src={imgContactUs} alt="HSCT-Contact" />
                            <Typography variant="h2">Liên hệ với chúng tôi</Typography>
                            <br />
                            <Link style={{ textDecoration: 'none' }} href="mailto:toantv2@hsct.vn"><Chip label="toantv2@hsct.vn"/></Link> 
                            <Link style={{ textDecoration: 'none' }} href="mailto:tula@hsct.vn"><Chip label="tula@hsct.vn" /> </Link>
                            <Link style={{ textDecoration: 'none' }} href="tel:+84398718121"><Chip label="(+84) 398 718 121" /></Link>
                            
                            
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactCard;
