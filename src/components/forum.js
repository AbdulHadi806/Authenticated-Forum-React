import React, { useState } from "react";

// importing mui components
import {
  Container,
  Typography,
  Button,
  CardActions,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";


// importing actions

export default function Forum() {
  const [userLogin, setUserLogin] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Address: "",
    Number: "",
  });
  const {FirstName,LastName,Email,Address,Number} = userLogin
  let name, value
  const submitForm = (e) => {
    e.preventDefault()
    name = e.target.name
    value = e.target.value
    setUserLogin({...userLogin, [name]: value})
  }
  const postData = async(e) => {
    e.preventDefault()
    const response =await fetch("https://reactauthenticatedform-default-rtdb.firebaseio.com//ReactAuthanticatedForum.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        FirstName,
        LastName,
        Email,
        Address,
        Number
      })
    } )
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
                <Typography gutterBottom variant="h5">
                  React Authentication Form
                </Typography>
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        value={userLogin.FirstName}
                        onChange={submitForm}
                        name= "FirstName"
                        placeholder="Enter first name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        value={userLogin.LastName}
                        onChange={submitForm}
                        placeholder="Enter last name"
                        name= "LastName"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        value={userLogin.Email}
                        name= "Email"
                        onChange={submitForm}
                        type="email"
                        placeholder="Enter email"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        value={userLogin.Number}
                        onChange={submitForm}
                        name ="Number"
                        type="number"
                        placeholder="Enter phone number"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        value={userLogin.Address}
                        onChange={submitForm}
                        name= "Address"
                        multiline
                        placeholder="Type your address here"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        onClick={postData}
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
