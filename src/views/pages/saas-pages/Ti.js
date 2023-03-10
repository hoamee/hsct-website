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
                                    THREAT INTELLIGENCE
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
                                    D???ch v??? Threat Intelligence cung c???p c??c th??ng tin v??? ATTT s???m, chu???n b??? ???ng ph?? v???i c??c cu???c t???n c??ng
                                    v?? ch??? ?????ng n??ng cao b???o m???t cho h??? th???ng th??ng tin c???a kh??ch h??ng
                                </Typography>
                                <Typography>
                                    Th??ng qua vi???c cung c???p th??ng tin t??nh b??o, kh??ch h??ng s??? nh???n ???????c c??c th??ng b??o ch??? ?????ng v??? c??c cu???c
                                    t???n c??ng theo k??? ho???ch, nh???ng thay ?????i trong TTPs (Tactics, Techniques, Procedures) v?? c??c h??nh vi m???i
                                    c???a c??c t??c nh??n ??e do??? n??ng cao. Ngo??i ra, d???ch v??? Threat Intelligence c??n bao g???m vi???c gi??m s??t r?? r???
                                    c??c d??? li???u nh???y c???m (th??ng tin nh???n d???ng c?? nh??n Personal Identifiable Information - PII, credit
                                    card,???) trong h??? th???ng c???a kh??ch h??ng
                                </Typography>
                                <Typography variant="h3">PH????NG TH???C TH???C HI???N</Typography>
                                <ul>
                                    <li>
                                    <Typography variant="h4">B?????c 1:</Typography>
                                        <Typography>
                                            c???p th??ng tin v??? d??? li???u b??? ????nh c???p, r?? r??? (compromised/leaked data) tr??n c??c di???n ????n,
                                            underground forum, ch??? ??en, deep/dark web, m???ng x?? h???i, trang chia s??? d??? li???u, kho m?? ngu???n
                                            (source code repository)???li??n quan ?????n kh??ch h??ng
                                        </Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                    <Typography variant="h4">B?????c 2:</Typography><Typography>Cung c???p th??ng tin v??? c??c l??? h???ng b???o m???t/m?? ?????c t???n c??ng</Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                    <Typography variant="h4">B?????c 3:</Typography>
                                        <Typography>
                                            Cung c???p th??ng tin chung v??? c??c m???i ??e d???a, m?? ?????c m???i, s??? c??? v??? an ninh b???o m???t m???i x???y ra tr??n
                                            th??? gi???i
                                        </Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                    <Typography variant="h4">B?????c 4:</Typography>
                                        <Typography>
                                            Cung c???p c??c b??o c??o th??ng tin ph??n t??ch chuy??n s??u t??? ?????i ng?? chuy??n gia c???a HSCT
                                        </Typography>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                    <Typography variant="h4">B?????c 5:</Typography><Typography>H??? tr??? t??ch h???p v???i h??? th???ng ANBM c???a kh??ch h??ng</Typography>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                    <Typography variant="h4">K???t qu???:</Typography>
                                        <ul>
                                            <li>C??c m???i ??e ?????a s??? ???????c cung c???p t???i kh??ch h??ng s???m nh???t</li>
                                            <li>
                                                C??c l??? h???ng b???o m???t/m?? ?????c ho???c c??c d??? li???u nh???y c???m b??? r?? r??? li??n quan t???i kh??ch h??ng s???
                                                ???????c c???p nh???t v?? g???i tr???c ti???p t???i ?????u m???i li??n h??? c???a kh??ch h??ng.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                            </Stack>
                        </MainCard>
                    </Grid>
                </Grid>
            </Container>
        </HeaderWrapper>
    );
};

export default PrivacyPolicy;
