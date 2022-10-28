import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

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

import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  const { Login } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await Login(email, password);
      setEmail("");
      navigate("/");
    } catch {
      setError("Fail to login");
    }
    setLoading(false);
  }

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 20, mb: 47 }}>
        <Grid
          container
          sx={{
            mt: 15,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid item xs={12} sm={7}>
            <Card
              style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}
            >
              <CardContent>
                {error && <Alert severity="error">{error}</Alert>}

                <Typography gutterBottom variant="h5">
                  Sign in
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  Please Sign in to Verify Your Self
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        name="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
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
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                        disabled={Loading}
                        color="primary"
                        fullWidth
                      >
                        Sign in
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Typography sx={{ mt: 3, textAlign: "center" }}>
                  Already forgot the password?{" "}
                  <Link to="/forgotpassword">Reset Password</Link>
                </Typography>
                <Typography sx={{ mt: 3, textAlign: "center" }}>
                  Don't have an account? <Link to="/SignUp">Sign Up</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
