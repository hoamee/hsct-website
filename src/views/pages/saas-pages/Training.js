// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Stack } from '@mui/material';

// project imports
import AppBar from 'ui-component/extended/AppBar';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import headerBackground from 'assets/images/landing/header-bg.jpg';

const HeaderWrapper = styled('div')(({ theme }) => ({
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: '100% 600px',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    paddingTop: 30,
    [theme.breakpoints.down('md')]: {
        paddingTop: 0
    }
}));

// ============================|| SAAS PAGES - PRIVCY POLICY ||============================ //

const PrivacyPolicy = () => {
    const theme = useTheme();

    return (
        <HeaderWrapper>
            <AppBar />
            <Container>
                <Grid container justifyContent="center" spacing={gridSpacing}>
                    <Grid item sm={10} md={7} sx={{ mt: { md: 12.5, xs: 2.5 }, mb: { md: 8, xs: 2.5 } }}>
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
                                    CYBER TRAINING
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{ fontWeight: 400, lineHeight: 1.4, [theme.breakpoints.up('md')]: { my: 0, mx: 12.5 } }}
                                    color="white"
                                >
                                    Last updated on 18th Nov 2022
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <MainCard elevation={4} border={false} boxShadow shadow={4} sx={{ mb: 3 }}>
                            <Stack spacing={2} sx={{ textAlign: 'left' }}>
                                <Typography variant="h3">M???c ????ch</Typography>
                                <Typography>
                                    D???ch v??? ????o t???o an to??n th??ng tin cung c???p c??c ki???n th???c v??? an ninh m???ng, t??nh hu???ng c?? th??? g??y m???t An
                                    to??n th??ng tin ?????i v???i ng?????i d??ng th??ng th?????ng, ????o t???o chuy??n m??n, nghi???p v???, c???i thi???n k??? n??ng ?????m b???o
                                    An to??n th??ng tin. N??ng cao kh??? n??ng ph???i h???p x??? l?? khi c?? s??? c??? m???t An to??n th??ng tin cho ?????i ng?? l??m
                                    c??ng t??c an ninh m???ng t???i t??? ch???c doanh nghi???p
                                </Typography>
                                <Typography variant="h3">C??c d???ch v??? ????o t???o ATTT</Typography>
                                <ul>
                                    <li>
                                        <Typography>????o t???o nh???n th???c An to??n th??ng tin</Typography>
                                    </li>
                                    <li>
                                        <Typography>?????o t???o chuy??n m??n/chuy??n gian ATTT</Typography>
                                    </li>
                                    <li>
                                        <Typography>T??? ch???c di???n t???p ATTT</Typography>
                                    </li>
                                </ul>
                                <Typography variant="h3">PH????NG TH???C TH???C HI???N</Typography>
                                <Typography>C??c chuy??n gia c???a HSCT th???c hi???n tham gia d???ch v??? ????o t???o. </Typography>
                            </Stack>
                        </MainCard>
                    </Grid>
                </Grid>
            </Container>
        </HeaderWrapper>
    );
};

export default PrivacyPolicy;
