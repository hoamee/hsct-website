import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
import imgLayout1 from 'assets/images/landing/hsct-header-img.png';

import imgLayoutGrid from 'assets/images/landing/img-lay-grid.png';
import imgLayoutDarkGrid from 'assets/images/landing/img-bg-grid-dark.svg';

const LayoutImageWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    position: 'relative',
    margin: '-70px 0px',
    [theme.breakpoints.down('lg')]: {
        margin: '-30px 0px'
    }
}));

const LayoutImage = styled('img')({
    position: 'absolute',
    top: 0,
    left: 150,
    height: '100%',
    animation: '5s wings ease-in-out infinite'
});

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
    const theme = useTheme();

    return (
        <Container>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={gridSpacing}
                sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
            >
                <Grid item xs={12} md={5}>
                    <Grid container spacing={gridSpacing} sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
                                        fontWeight: 900,
                                        lineHeight: 1.4
                                    }}
                                >
                                    Bảo vệ tài sản trí tuệ của bạn cùng
                                    <Box component="span" sx={{ ml: 2, color: '#DC143C' }}>
                                        HSCT
                                    </Box>
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.2
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="div"
                                    color="inherit"
                                    sx={{
                                        fontSize: { xs: '1rem', md: '1.125rem' },
                                        fontWeight: 400,
                                        lineHeight: 1.4
                                    }}
                                >
                                    Kiểm thử xâm nhập hệ thống, rà soát phân tích mã độc, điều tra và ứng cứu sự cố, đào tạo và tư vấn, đánh
                                    giá và đề xuất giải pháp.
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} sx={{ my: 3.25 }}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.4
                                }}
                            >
                                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Grid item>
                                        <AnimateButton>
                                            <Button
                                                component={RouterLink}
                                                to="/contact-us"
                                                target="_blank"
                                                size="large"
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Liên hệ với chúng tôi
                                            </Button>
                                        </AnimateButton>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            component={Link}
                                            href="#services"
                                            size="large"
                                            variant="text"
                                        >
                                            Chi tiết các dịch vụ
                                        </Button>
                                    </Grid>
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Box sx={{ position: 'relative', mt: 8.75 }}>
                        <LayoutImageWrapper>
                            <img
                                src={theme.palette.mode === 'dark' ? imgLayoutDarkGrid : imgLayoutGrid}
                                alt="Berry"
                                style={{ width: '100%' }}
                            />
                            <LayoutImage src={imgLayout1} alt="Berry" />
                        </LayoutImageWrapper>
                    </Box>
                </Grid>
            </Grid>
            <div  id='services'></div>
        </Container>
    );
};

export default HeaderPage;
