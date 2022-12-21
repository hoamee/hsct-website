import React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Container, Box, Grid, Typography, Link } from '@mui/material';

// project imports
import AppBar from 'ui-component/extended/AppBar';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import mailImg from 'assets/images/landing/img-contact-mail.svg';
import headerBackground from 'assets/images/landing/header-bg.jpg';

// assets
import BugReportIcon from '@mui/icons-material/BugReport';
import SosIcon from '@mui/icons-material/Sos';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

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

const plans = [
    {
        active: false,
        icon: <BugReportIcon fontSize="large" color="inherit" />,
        title: 'PENESTRATION TESTING',
        header: 'DỊCH VỤ KIỂM THỬ XÂM NHẬP HỆ THỐNG/ỨNG DỤNG',
        descriptions: [
            'Dò quét lỗ hổng bảo mật trên máy chủ',
            'Dò quét lỗ hổng bảo mật mạng',
            'Thực hiện cuộc tấn công thực sự vào các cơ sở hạ tầng quan trọng và đánh giá mức độ rủi ro tồn tại tại thời điểm tấn công',
            'Đánh giá tất cả các lỗ hổng bảo mật liên quan đến cơ sở hạ tầng khách hàng',
            'Cung cấp các phương án khắc phục...'
        ],
        link: '/service/pentest'
    },
    {
        active: true,
        icon: <SosIcon fontSize="large" />,
        title: 'INCIDENT RESPONSE',
        header: 'DỊCH VỤ ĐIỀU TRA VÀ ỨNG CỨU SỰ CỐ AN NINH MẠNG',
        descriptions: [
            'Thực hiện điều tra số nhằm xác định các vấn đề liên quan tới sự cố an ninh mạng',
            'Các vấn đề về lỗ hổng bảo mật, mã độc',
            'Khoanh vùng phạm vị các hệ thống máy chủ/người dùng cuối bị ảnh hưởng',
            'Các dữ liệu/thông tin tài khoản bị ảnh hưởng',
            'Thực hiện quá trình ứng phó sự cố theo từng giai đoạn theo tiêu chuẩn NIST'
        ],
        link: '/service/IncidentResponse'
    },
    {
        active: false,
        icon: <LocalLibraryIcon fontSize="large" />,
        title: 'THREAT INTELLIGENCE',
        header: 'DỊCH VỤ CUNG CẤP THÔNG TIN TÌNH BÁO AN NINH MẠNG',
        descriptions: [
            'Dịch vụ Threat Intelligence cung cấp các thông tin về ATTT sớm, chuẩn bị ứng phó với các cuộc tấn công và chủ động nâng cao bảo mật cho hệ thống thông tin của khách hàng',
            'Thông qua việc cung cấp thông tin tình báo, khách hàng sẽ nhận được các thông báo chủ động về các cuộc tấn công theo kế hoạch, những thay đổi trong TTPs ...'
        ],
        link: '/service/ti'
    },
    {
        active: false,
        icon: <ModelTrainingIcon fontSize="large" />,
        title: 'CYBER TRAINING',
        header: 'DỊCH VỤ ĐÀO TẠO AN TOÀN THÔNG TIN',
        descriptions: [
            'Đào tạo nhận thức An toàn thông tin',
            'Đạo tạo chuyên môn/chuyên gia ATTT',
            'Tổ chức diễn tập ATTT',
            'Dịch vụ đào tạo an toàn thông tin cung cấp các kiến thức về an ninh mạng, tình huống có thể gây mất An toàn thông tin đối với người dùng thông thường, đào tạo chuyên môn, nghiệp vụ, cải thiện kỹ năng ...'
        ],
        link: '/service/training'
    },
    {
        active: false,
        icon: <CoronavirusIcon fontSize="large" />,
        title: 'MALWARE CLEANUP',
        header: 'DỊCH VỤ RÀ SOÁT PHÂN TÍCH, GỠ BỎ MÃ ĐỘC HẠI ',
        descriptions: [
            'Xác định các chức năng của mã độc, đánh giá bản chất và mức độ của mối đe dọa.',
            'Đưa ra dấu hiệu nhận biết hạ tầng và hành vị liên quan tới mã độc nhằm phục vụ quá trình dò quét, phát hiện các hệ thống bị lây nhiễm.',
            'Cung cấp các phương án khắc phục, giảm thiểu thiệt hại đối với các hệ thống đã bị lây nhiễm.'
        ],
        link: '/service/malware'
    }
];

// ============================|| SAAS PAGES - Services ||============================ //

const Services = () => {
    const theme = useTheme();
    return (
        <HeaderWrapper>
            <AppBar />
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
                                    Services
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{ fontWeight: 400, lineHeight: 1.4, [theme.breakpoints.up('md')]: { my: 0, mx: 12.5 } }}
                                    color="white"
                                >
                                    Please refer the Frequently ask question for your quick help
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
                    <Grid container spacing={gridSpacing}>
                        {plans.map((plan, index) => {
                            const darkBorder =
                                theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary[200] + 75;
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <MainCard
                                        boxShadow
                                        sx={{
                                            pt: 1.75,
                                            border: plan.active ? '2px solid' : '1px solid',
                                            borderColor: plan.active ? 'secondary.main' : darkBorder
                                        }}
                                    >
                                        <Grid container textAlign="center" spacing={gridSpacing}>
                                            <Grid item xs={12}>
                                                <Box
                                                    sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderRadius: '50%',
                                                        width: 80,
                                                        height: 80,
                                                        background:
                                                            theme.palette.mode === 'dark'
                                                                ? theme.palette.dark[800]
                                                                : theme.palette.primary.light,
                                                        color: theme.palette.primary.main,
                                                        '& > svg': {
                                                            width: 35,
                                                            height: 35
                                                        }
                                                    }}
                                                >
                                                    {plan.icon}
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontSize: '1.5625rem',
                                                        fontWeight: 500,
                                                        position: 'relative',
                                                        mb: 1.875,
                                                        '&:after': {
                                                            content: '""',
                                                            position: 'absolute',
                                                            bottom: -15,
                                                            left: 'calc(50% - 25px)',
                                                            width: 50,
                                                            height: 4,
                                                            background: theme.palette.primary.main,
                                                            borderRadius: '3px'
                                                        }
                                                    }}
                                                >
                                                    {plan.title}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2">{plan.header}</Typography>
                                            </Grid>
                                            <Grid item xs={12} style={{ alignItems: 'left' }}>
                                                <ul style={{ textAlign: 'left' }}>
                                                    {plan.descriptions.map((item, index) => {
                                                        return <li key={index}>{item}</li>;
                                                    })}
                                                </ul>
                                                <Link href={plan.link} target="_blank" style={{ textDecoration: 'none' }}>
                                                    Chi tiết
                                                </Link>
                                            </Grid>

                                            {/* <Grid item xs={12}>
                                                <Typography
                                                    component="div"
                                                    variant="body2"
                                                    sx={{
                                                        fontSize: '2.1875rem',
                                                        fontWeight: 700,
                                                        '& > span': {
                                                            fontSize: '1.25rem',
                                                            fontWeight: 500
                                                        }
                                                    }}
                                                >
                                                    <sup>$</sup>
                                                    {plan.price}
                                                    <span>/Lifetime</span>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="outlined">Order Now</Button>
                                            </Grid> */}
                                        </Grid>
                                    </MainCard>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>
        </HeaderWrapper>
    );
};

export default Services;
