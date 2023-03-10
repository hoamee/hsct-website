// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Link, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import logoDark from 'assets/images/HSCT-logo-bold-white.png';

// styles
const FooterWrapper = styled('div')(({ theme }) => ({
    padding: '35px 0',
    color: '#fff',
    background: '#000000',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));

const FooterLink = styled(Link)({
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none !important',
    opacity: '0.8',
    '& svg': {
        fontsize: '1.125rem',
        marginRight: 8
    },
    '&:hover': {
        opacity: '1'
    }
});

// const FooterSubWrapper = styled('div')(({ theme }) => ({
//     padding: '20px 0',
//     color: '#fff',
//     background: theme.palette.secondary.dark,
//     [theme.breakpoints.down('md')]: {
//         textAlign: 'center'
//     }
// }));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterPage = () => {
    const theme = useTheme();
    return (
        <>
            <FooterWrapper>
                <Container>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                        <Grid item xs={12} sm={6}>
                            <img src={logoDark} alt="Berry" width="100" />
                            <br />
                            <br />
                            <br />
                            <Typography variant="h4" sx={{ color: 'white' }}>
                                CÔNG TY TNHH AN NINH MẠNG HSCT
                            </Typography>
                            <br />
                            <Typography sx={{ color: 'white' }}>
                                Địa chỉ ĐKKD: Số 2, Ngách 56, Ngõ 328, Nguyễn Trãi, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà
                                Nội, Việt Nam
                            </Typography>
                            <br />
                            <Typography sx={{ color: 'white' }}>Mã số doanh nghiệp 0110174908, cấp lần đầu ngày 08/11/2022</Typography>
                            <br />
                            <Typography sx={{ color: 'white' }}>Người đại diện: Ông Tống Viết Toàn</Typography>
                            <br />
                            <Typography sx={{ color: 'white' }}>&copy; HSCT 2022. All rights reserved</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid
                                container
                                alignItems="center"
                                spacing={2}
                                sx={{ justifyContent: 'flex-end', [theme.breakpoints.down('md')]: { justifyContent: 'center' } }}
                            >
                                <Grid item>
                                    <FooterLink
                                        href="https://www.facebook.com/profile.php?id=100088675544308"
                                        target="_blank"
                                        underline="hover"
                                    >
                                        <InstagramIcon />
                                        Blog
                                    </FooterLink>
                                </Grid>
                                <Grid item>
                                    <FooterLink
                                        href="https://www.facebook.com/profile.php?id=100088675544308"
                                        target="_blank"
                                        underline="hover"
                                    >
                                        <FacebookIcon />
                                        Facebook
                                    </FooterLink>
                                </Grid>
                                <Grid item>
                                    <FooterLink
                                        href="https://www.facebook.com/profile.php?id=100088675544308"
                                        target="_blank"
                                        underline="hover"
                                    >
                                        <TwitterIcon />
                                        Twitter
                                    </FooterLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </FooterWrapper>
        </>
    );
};

export default FooterPage;
