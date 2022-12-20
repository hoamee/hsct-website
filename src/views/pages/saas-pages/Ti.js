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
                                <Typography variant="h3">Mục đích</Typography>

                                <Typography>
                                    Dịch vụ Threat Intelligence cung cấp các thông tin về ATTT sớm, chuẩn bị ứng phó với các cuộc tấn công
                                    và chủ động nâng cao bảo mật cho hệ thống thông tin của khách hàng
                                </Typography>
                                <Typography>
                                    Thông qua việc cung cấp thông tin tình báo, khách hàng sẽ nhận được các thông báo chủ động về các cuộc
                                    tấn công theo kế hoạch, những thay đổi trong TTPs (Tactics, Techniques, Procedures) và các hành vi mới
                                    của các tác nhân đe doạ nâng cao. Ngoài ra, dịch vụ Threat Intelligence còn bao gồm việc giám sát rò rỉ
                                    các dữ liệu nhạy cảm (thông tin nhận dạng cá nhân Personal Identifiable Information - PII, credit
                                    card,…) trong hệ thống của khách hàng
                                </Typography>
                                <Typography variant="h3">PHƯƠNG THỨC THỰC HIỆN</Typography>
                                <ul>
                                    <li>
                                        Bước 1:
                                        <Typography>
                                            cấp thông tin về dữ liệu bị đánh cắp, rò rỉ (compromised/leaked data) trên các diễn đàn,
                                            underground forum, chợ đen, deep/dark web, mạng xã hội, trang chia sẻ dữ liệu, kho mã nguồn
                                            (source code repository)…liên quan đến khách hàng
                                        </Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        Bước 2:<Typography>Cung cấp thông tin về các lỗ hổng bảo mật/mã độc tấn công</Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        Bước 3:
                                        <Typography>
                                            Cung cấp thông tin chung về các mối đe dọa, mã độc mới, sự cố về an ninh bảo mật mới xảy ra trên
                                            thế giới
                                        </Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        Bước 4:
                                        <Typography>
                                            Cung cấp các báo cáo thông tin phân tích chuyên sâu từ đội ngũ chuyên gia của HSCT
                                        </Typography>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Bước 5:<Typography>Hỗ trợ tích hợp với hệ thống ANBM của khách hàng</Typography>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Kết quả:
                                        <ul>
                                            <li>Các mối đe đọa sẽ được cung cấp tới khách hàng sớm nhất</li>
                                            <li>
                                                Các lỗ hổng bảo mật/mã độc hoặc các dữ liệu nhạy cảm bị rò rỉ liên quan tới khách hàng sẽ
                                                được cập nhật và gửi trực tiếp tới đầu mối liên hệ của khách hàng.
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
