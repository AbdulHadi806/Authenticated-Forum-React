import React, { useRef, useState } from "react";
import {useAuth} from "../context/AuthContext"

// importing mui components
import {
  Container,
  Typography,
  Button,
  Alert,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";


import { Link,useNavigate  } from "react-router-dom";



export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [passwordConfirm, setpasswordConfirm] = useState("")
    const [error, setError] = useState('')
    const [Loading, setLoading] = useState(false)
    const { Login } = useAuth()

    const history = useNavigate ()

    async function handleSubmit (e) {
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await Login(email, password)
            setEmail("")
            setEmail("")
            setpasswordConfirm("")
            history("/Dashboard")
        } catch{
            setError("Fail to login")
        }
        setLoading(false)
    }

  return (
    <>
      <Container maxWidth="xl" sx={{mt: 20, mb: 47 }}>
        <Grid container sx={{mt: 15, display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <Grid item xs={12} sm={7}>
            <Card
              style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}
            >
              <CardContent>
              {error && <Alert severity="error">{error}</Alert>}

                <Typography gutterBottom variant="h5">
                  Sign Up
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  Fill up the form and our team will get back to you within 24
                  hours.
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        name="email"
                        onChange = {(e)=>{setEmail(e.target.value)}}
                        placeholder="Enter email"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                   
                    <Grid item xs={12}>
                      <TextField
                        multiline
                        placeholder="Type Password"
                        type="password"
                        onChange = {(e)=>{setpassword(e.target.value)}}
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        onChange = {(e)=>{setpassword(e.target.value)}}
                        disabled={Loading}
                        color="primary"
                        fullWidth
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Typography sx={{mt: 3, textAlign: "center"}}>Don't have an account? <Link to='/'>Sign Up</Link></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}