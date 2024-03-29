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
                                <Typography variant="h3">Mục đích</Typography>
                                <Typography>
                                    Dịch vụ đào tạo an toàn thông tin cung cấp các kiến thức về an ninh mạng, tình huống có thể gây mất An
                                    toàn thông tin đối với người dùng thông thường, đào tạo chuyên môn, nghiệp vụ, cải thiện kỹ năng đảm bảo
                                    An toàn thông tin. Nâng cao khả năng phối hợp xử lý khi có sự cố mất An toàn thông tin cho đội ngũ làm
                                    công tác an ninh mạng tại tổ chức doanh nghiệp
                                </Typography>
                                <Typography variant="h3">Các dịch vụ Đào tạo ATTT</Typography>
                                <ul>
                                    <li>
                                        <Typography>Đào tạo nhận thức An toàn thông tin</Typography>
                                    </li>
                                    <li>
                                        <Typography>Đạo tạo chuyên môn/chuyên gian ATTT</Typography>
                                    </li>
                                    <li>
                                        <Typography>Tổ chức diễn tập ATTT</Typography>
                                    </li>
                                </ul>
                                <Typography variant="h3">PHƯƠNG THỨC THỰC HIỆN</Typography>
                                <Typography>Các chuyên gia của HSCT thực hiện tham gia dịch vụ Đào tạo. </Typography>
                            </Stack>
                        </MainCard>
                    </Grid>
                </Grid>
            </Container>
        </HeaderWrapper>
    );
};

export default PrivacyPolicy;
