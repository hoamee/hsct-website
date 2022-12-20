// material-ui
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// project imports
import FadeInWhenVisible from './Animation';
import { gridSpacing } from 'store/constant';

// assets
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import SubCard from 'ui-component/cards/SubCard';


// ==============================|| LANDING - DEMOS PAGE ||============================== //

const DemosPage = () => {
    const theme = useTheme();

    return (
        <Container>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={5} md={10}>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                            <Typography variant="h2" component="div">
                                Nghi ngờ về những rủi ro, đối mặt với sự cố?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                <Box component="span" sx={{ ml: 2, color: '#DC143C' }}>
                                    HSCT
                                </Box>{' '}
                                Luôn đồng hành cùng tổ chức trong mọi hoàn cảnh, từ phát hiện các rủi ro tới giải quyết các sự cố.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <a href="/service/pentest" style={{ textDecoration: 'none' }}>
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
                                                    <PlaylistAddCheckIcon fontSize="large" />
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
                                </a>
                            </FadeInWhenVisible>
                        </Grid>

                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <a href="/service/malware" style={{ textDecoration: 'none' }}>
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
                                                    <CoronavirusIcon fontSize="large" />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h3">MALWARE CLEANUP</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2">
                                                    DỊCH VỤ RÀ SOÁT PHÂN TÍCH, GỠ BỎ MÃ ĐỘC HẠI TRONG HỆ THỐNG
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </SubCard>
                                </a>
                            </FadeInWhenVisible>
                        </Grid>

                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <a href="/service/IncidentResponse" style={{ textDecoration: 'none' }}>
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
                                                    <ManageSearchIcon fontSize="large" />
                                                </Avatar>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h3">INCIDENT RESPONSE</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body2">DỊCH VỤ ĐIỀU TRA VÀ ỨNG CỨU SỰ CỐ AN NINH MẠNG </Typography>
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

export default DemosPage;
