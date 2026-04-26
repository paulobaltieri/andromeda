import { Avatar, Box, Button, Card, CardContent, Link, TextField } from "@mui/material";
import { toast } from "react-toastify";


export default function Login() {
    const handleLogin = () => {
        toast.info("Email inválido");

    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",

                backgroundImage: "url('/background.svg')", // Papel de parede 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "90vh",
            }}
        >
            <Card sx={{ height: 540, width: 400, mt: 25, borderRadius: 5 }}>
                <Avatar
                    sx={{
                        height: 150,
                        width: 140,
                        display: "flex",
                        justifyContent: "center",
                        margin: "0 auto",
                        mt: 5,
                    }}
                >
                    <h1>Login</h1>

                </Avatar>
                <CardContent sx={{ mt: 5 }}>
                    <TextField fullWidth label="Username" margin="normal" size="small" />
                    <TextField fullWidth label="Password" type="password" margin="normal" size="small" />
                    <Button onClick={handleLogin} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1.2 }}>
                        <Link href="#" underline="none">
                            Esqueceu a senha?
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        </Box >
    )
}