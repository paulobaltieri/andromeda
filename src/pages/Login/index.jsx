import { Avatar, Box, Button, Card, CardContent, Link, TextField, Typography } from "@mui/material";
import UserPicture from "/avatar/avatar02.jpg"
import { showInfo } from "../../components/alert/AlertComponent.jsx"

export default function Login() { // Toast ou alerta

    const handleLogin = () => {
        showInfo("Email inválido");
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
            <Card sx={{ height: 580, width: 400, mt: 25, borderRadius: 5 }}>
                <Avatar
                    src="/avatar/avatar02.jpg"
                    sx={{
                        height: 190,
                        width: 190,
                        display: "flex",
                        justifyContent: "center",
                        margin: "0 auto",
                        mt: 5,
                    }}
                >
                    <img src={UserPicture} alt="imagem" />
                </Avatar>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3, fontWeight: "bold" }}> {/*Configuração do avatar */}
                    <Typography variant="h4">
                        Bem vindo
                    </Typography>
                </Box>
                <CardContent sx={{ mt: 0.1 }}>
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