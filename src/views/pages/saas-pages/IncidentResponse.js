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
                                    VỤ RÀ SOÁT PHÂN TÍCH, GỠ BỎ MÃ ĐỘC HẠI (MALWARE)
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
                                <typography>
                                    Thực hiện điều tra số nhằm xác định các vấn đề liên quan tới sự cố an ninh mạng, bao gồm:
                                </typography>
                                <ul>
                                    <li>
                                        <Typography>Các vấn đề về lỗ hổng bảo mật, mã độc</Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <Typography>Khoanh vùng phạm vị các hệ thống máy chủ/người dùng cuối bị ảnh hưởng</Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <Typography>Các dữ liệu/thông tin tài khoản bị ảnh hưởng</Typography>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Typography> Luồng tấn công của attacker</Typography>
                                    </li>
                                </ul>
                                <Typography>Thực hiện quá trình ứng phó sự cố theo từng giai đoạn theo tiêu chuẩn NIST:</Typography>
                                <ul>
                                    <li>
                                        <Typography>
                                            Identification: Xác định các yếu tố liên quan đến sự cố thông qua quá trình Forensic
                                        </Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <Typography>
                                            Containment: Triển khai các phương án ngăn chặn tạm thời, cách ly các đối tượng liên quan tới sự
                                            cố. Sau đó tập trung vào các ngăn chặn dài hạn bao gồm các khắc phục, vá lỗi.
                                        </Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <Typography>
                                            Remediation: Thực hiện quá trình khắc phục và giải quyết các vấn đề liên quan tới sự cố (loại bỏ
                                            mã độc, khắc phục lỗ hổng bảo mật, sao lưu dữ liệu,…)
                                        </Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <Typography>
                                            Recovery: Khôi phục lại các hệ thống bị ảnh hưởng, đưa ra các phương án giám sát nhằm xác định
                                            sự cố đã được giải quyết hoàn toàn và không có mối đe dọa tương tự đang tồn tại trong hệ thống.
                                        </Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <Typography>
                                            Lessons Learned: Tổng hợp báo cáo chi tiết về sự cố, đưa ra các giải pháp nhằm phát hiện, ngăn
                                            chặn sự cố có thể xảy ra trong tương lai, đúc rút các kinh nghiệm có được trong quá trình xử lý
                                            sự cố.
                                        </Typography>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <Typography>
                                            Xác định các chức năng của mã độc, đánh giá bản chất và mức độ của mối đe dọa.
                                        </Typography>
                                    </li>
                                </ul>

                                <Typography variant="h3">PHƯƠNG THỨC THỰC HIỆN</Typography>
                                <Typography>
                                    Các chuyên gia của HSCT thực hiện điều tra và xử lý sự cố sẽ tham gia theo các hình thức: onsite hoặc
                                    remote.
                                </Typography>
                                <Typography variant="h3">KẾT QUẢ</Typography>
                                <Typography>Báo cáo chi tiết quá trình thực hiện bao gồm:</Typography>
                                <ul>
                                    <li>
                                        <Typography>Các bước và công cụ thực hiện</Typography>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Typography>
                                            Các vấn đề ảnh hưởng và đề xuất phương án khắc phục, giảm thiểu rủi ro đối với các vấn đề an
                                            ninh đã phát hiện.
                                        </Typography>
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
