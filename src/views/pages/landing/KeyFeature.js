// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Container, Grid, Link, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

// assets
import imgSottttVp from 'assets/images/landing/logo-sotttt-vp.png';
import imgIaiTech from 'assets/images/landing/iai-tech-logo.png';
import imgDenChauAu from 'assets/images/landing/logo-denchauau.png';
import imgMep from 'assets/images/landing/logo-mep.png';
import imgJust from 'assets/images/landing/just.engineer.jpg';
// ============================|| LANDING - KEY FEATURE PAGE ||============================ //

const KeyFeaturePage = () => {
    const theme = useTheme();
    const avatarIconSx = {
        ...theme.typography.commonAvatar,
        cursor: 'initial',
        width: 72,
        height: 72
    };

    return (
        <Container>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={5} md={10}>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                            <Typography variant="h2" component="div">
                                Khách hàng tiêu biểu
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">Các khách hàng tin tưởng và lựa chọn đồng hành cùng chúng tôi</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={gridSpacing}>
                        <Grid item lg={3} md={4} xs={12} sm={6}>
                            <FadeInWhenVisible>
                                <Link style={{ textDecoration: 'none' }} href="https://vinhphuc.gov.vn/" target="_blank">
                                    <SubCard>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item>
                                                <Avatar
                                                    variant="rounded"
                                                    sx={{
                                                        ...avatarIconSx,
                                                        bgcolor: 'rgba(0,0,0,0)',
                                                        color: theme.palette.primary.main
                                                    }}
                                                >
                                                    <img src={imgSottttVp} alt="Sở TTTT Vĩnh Phúc" style={{ height: '100%' }} />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs zeroMinWidth>
                                                <Typography variant="h5">Sở thông tin và truyền thông tỉnh Vĩnh Phúc</Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </Link>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item lg={3} md={4} xs={12} sm={6}>
                            <FadeInWhenVisible>
                                <Link style={{ textDecoration: 'none' }} href="http://www.iaitechvn.com/" target="_blank">
                                    <SubCard>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item>
                                                <Avatar
                                                    variant="rounded"
                                                    sx={{
                                                        ...avatarIconSx,
                                                        bgcolor: 'rgba(0,0,0,0)',
                                                        color: theme.palette.primary.main
                                                    }}
                                                >
                                                    <img src={imgIaiTech} alt="IAI TECH" style={{ width: '100%' }} />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs zeroMinWidth>
                                                <Typography variant="h5">IAI TECH Vietnam</Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </Link>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item lg={3} md={4} xs={12} sm={6}>
                            <FadeInWhenVisible>
                                <Link style={{ textDecoration: 'none' }} href="http://www.thegioidendep.vn/" target="_blank">
                                    <SubCard>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item>
                                                <Avatar
                                                    variant="rounded"
                                                    sx={{
                                                        ...avatarIconSx,
                                                        bgcolor: 'rgba(0,0,0,0)',
                                                        color: theme.palette.primary.main
                                                    }}
                                                >
                                                    <img src={imgDenChauAu} alt="IAI TECH" style={{ width: '100%' }} />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs zeroMinWidth>
                                                <Typography variant="h5">thegioidendep.vn</Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </Link>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item lg={3} md={4} xs={12} sm={6}>
                            <FadeInWhenVisible>
                                <Link style={{ textDecoration: 'none' }} href="https://www.facebook.com/MEPGROUP.VN" target="_blank">
                                    <SubCard>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item>
                                                <Avatar
                                                    variant="rounded"
                                                    sx={{
                                                        ...avatarIconSx,
                                                        bgcolor: 'rgba(0,0,0,0)',
                                                        color: theme.palette.primary.main
                                                    }}
                                                >
                                                    <img src={imgMep} alt="MEP ENGINEERING JOINT STOCK" style={{ width: '100%' }} />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs zeroMinWidth>
                                                <Typography variant="h5">MEP ENGINEERING JOINT STOCK</Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </Link>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item lg={3} md={4} xs={12} sm={6}>
                            <FadeInWhenVisible>
                                <Link style={{ textDecoration: 'none' }} href="https://www.just.engineer/about-us" target="_blank">
                                    <SubCard>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item>
                                                <Avatar
                                                    variant="rounded"
                                                    sx={{
                                                        ...avatarIconSx,
                                                        bgcolor: 'rgba(0,0,0,0)',
                                                        color: theme.palette.primary.main
                                                    }}
                                                >
                                                    <img src={imgJust} alt="JUST ENGINEER" style={{ width: '100%' }} />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs zeroMinWidth>
                                                <Typography variant="h5">JUST.engineer</Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </Link>
                            </FadeInWhenVisible>
                        </Grid>
                        
                    </Grid>
                </Grid>
                {/* <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={gridSpacing}>
                        <Grid item lg={3} md={4} xs={12} sm={6}>
                            <FadeInWhenVisible>
                                <Link style={{ textDecoration: 'none' }} href="https://vinhphuc.gov.vn/" target="_blank">
                                    <SubCard>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item>
                                                <Avatar
                                                    variant="rounded"
                                                    sx={{
                                                        ...avatarIconSx,
                                                        bgcolor: 'rgba(0,0,0,0)',
                                                        color: theme.palette.primary.main
                                                    }}
                                                >
                                                    <img src={imgSottttVp} alt="Sở TTTT Vĩnh Phúc" style={{ height: '100%' }} />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs zeroMinWidth>
                                                <Typography variant="h5">Sở thông tin và truyền thông tỉnh Vĩnh Phúc</Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </Link>
                            </FadeInWhenVisible>
                        </Grid>
                        
                        
                    </Grid>
                </Grid> */}
                
            </Grid>
        </Container>
    );
};

export default KeyFeaturePage;
