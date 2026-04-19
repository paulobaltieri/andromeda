import { Card, CardContent, Box } from "@mui/material"

export default function Login() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            mt: 10,
        }}>
            <Card sx={{
                width: "440px",
                height: "500px",
                backgroundColor: "red",
                borderRadius: "15px",
            }}>
                <CardContent>
                    <h1>Login</h1>
                </CardContent>
            </Card>
        </Box>
    )
}