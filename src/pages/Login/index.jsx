import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import {
  showError,
  showSuccess,
} from "../../components/alert/AlertComponent.jsx";

export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loadButton, setloadButton] = useState(false);

  const changePass = (event) => {
    setPassword(event.target.value);
  };

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    if (password.length < 5) {
      return showError("A senha precisa ser maior");
    } else if (username.length < 5) {
      return showError("A usuario precisa ser maior");
    }
    showSuccess("Login efetuado com sucesso!");
    setloadButton(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundImage: "url('/background.svg')", // Papel de parede
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/*Form Login, aqui pode ser alterado a largura do card e o avatar */}
      <Card
        sx={{
          height: 540,
          width: 360,
          mt: 20,
          borderRadius: 5,
          boxShadow: "0px 0px 30px rgba(54, 134, 214, 0.38)",
        }}
      >
        <Avatar
          src="/avatar/avatar02.jpg"
          sx={{
            height: 150,
            width: 150,
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            mt: 5,
          }}
        ></Avatar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            fontWeight: "bold",
          }}
        >
          {" "}
          {/*Configuração do avatar */}
          <Typography variant="h4">Bem vindo</Typography>
        </Box>
        <CardContent sx={{ mt: 0.1 }}>
          <TextField
            onChange={changeUsername}
            value={username}
            fullWidth
            label="Username"
            margin="normal"
            size="small"
          />
          <TextField
            onChange={changePass}
            value={password}
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            size="small"
          />
          <Button
            loading={loadButton}
            loadingIndicator="Carregando..." //
            onClick={handleLogin}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1.2 }}>
            <Link href="#" underline="none">
              Esqueceu a senha?
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
