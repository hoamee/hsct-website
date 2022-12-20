// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets
import HubIcon from '@mui/icons-material/Hub';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeaturePage = () => {
    const theme = useTheme();
    return (
        <Container >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={5} md={10}>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                            <Typography variant="h2" component="div">
                                <Box component="span" sx={{ ml: 2, color: '#DC143C' }}>
                                    HSCT
                                </Box>{' '}
                                mang tới điều gì cho bạn?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">Tri thức an toàn thông tin toàn diện cho doanh nghiệp & tổ chức</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                        {/* <Grid item md={6} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.primary.light,
                                                    color: theme.palette.primary.main
                                                }}
                                            >
                                                <PaletteTwoToneIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">PENESTRATION TESTING</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">DỊCH VỤ KIỂM THỬ XÂM NHẬP HỆ THỐNG/ỨNG DỤNG</Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid> */}
                        <Grid item md={6} sm={6}>
                            <FadeInWhenVisible>
                                <a href="/service/ti" style={{ textDecoration: 'none' }}>
                                    <SubCard>
                                        <Grid container justifyContent="center" spacing={2}>
                                            <Grid item>
                                                <Avatar
                                                    size="xl"
                                                    variant="rounded"
                                                    sx={{
                                                        background:
                                                            theme.palette.mode === 'dark'
                                                                ? theme.palette.dark[900]
                                                                : theme.palette.secondary.light,
                                                        color: theme.palette.secondary.main
                                                    }}
                                                >
                                                    <HubIcon fontSize="large" />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h3">THREAT INTELLIGENCE</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2">DỊCH VỤ CUNG CẤP THÔNG TIN TÌNH BÁO AN NINH MẠNG</Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </a>
                            </FadeInWhenVisible>
                        </Grid>
                        {/* <Grid item md={6} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.success.light,
                                                    color: theme.palette.success.dark
                                                }}
                                            >
                                                <SpeedTwoToneIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">MALWARE CLEANUP</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">DỊCH VỤ RÀ SOÁT PHÂN TÍCH, GỠ BỎ MÃ ĐỘC HẠI</Typography>
                                            
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid> */}
                        <Grid item md={6} sm={6}>
                            <FadeInWhenVisible>
                                <a href="/service/training" style={{ textDecoration: 'none' }}>
                                    <SubCard>
                                        <Grid container justifyContent="center" spacing={2}>
                                            <Grid item>
                                                <Avatar
                                                    size="xl"
                                                    variant="rounded"
                                                    sx={{
                                                        background:
                                                            theme.palette.mode === 'dark'
                                                                ? theme.palette.dark[900]
                                                                : theme.palette.success.light,
                                                        color: theme.palette.success.dark
                                                    }}
                                                >
                                                    <LaptopWindowsIcon fontSize="large" />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h3">CYBER TRAINING</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2">DỊCH VỤ ĐÀO TẠO AN TOÀN THÔNG TIN.</Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </a>
                            </FadeInWhenVisible>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FeaturePage;
