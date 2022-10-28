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

// importing react router components
import { Link, useNavigate } from "react-router-dom";

export default function UpdateInfo() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  const { updateEmail,updatePassword,currentUser } = useAuth();
  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError("Passwords not matched");
    }
    setLoading(true)

    const promises = []
    if (email !== currentUser.email) {
        promises.push(updateEmail(email))
    }
    if (password !== currentUser.password) {
        promises.push(updatePassword(password))
    }
    Promise.all(promises).then(()=> {
        navigate("/")
    }).catch(()=> {
        setError("Failed to update information")
        navigate("/")
    }).finally(()=> {
        setLoading(false)
    })

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
                  Update information
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
                        label= "Enter you Email"
                        placeholder="Leave empty to not change"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        multiline
                        placeholder="Leave empty to not change"
                        label="Enter your new Password"
                        type="password"
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        multiline
                        placeholder="Leave empty to not change"
                        label="Confirm Password"
                        type="password"
                        onChange={(e) => {
                          setpasswordConfirm(e.target.value);
                        }}
                        variant="outlined"
                        fullWidth
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
                        Update
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Typography sx={{ mt: 3, textAlign: "center" }}>
                  <Link to="/">Cancel</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
