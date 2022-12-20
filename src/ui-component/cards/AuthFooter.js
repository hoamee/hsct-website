// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://hsct.vn" target="_blank" underline="hover">
        hsct.vn
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://hsct.vn" target="_blank" underline="hover">
            &copy; hsct.vn
        </Typography>
    </Stack>
);

export default AuthFooter;
