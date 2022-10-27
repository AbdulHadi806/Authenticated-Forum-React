import React, {useState} from "react";

// importing mui components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Container } from '@mui/material';

// importing context
import { useAuth } from "../context/AuthContext";

// importing React Router Components
import { Link,useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [error, setError] = useState("")
  const { currentUser, logOut } = useAuth();
  const history = useNavigate ()

  async function handleLogOut() {
    setError('')
    try{
        await logOut()
        history('/Login')
    }catch {
        setError("Failed to Log out")
    }
  }

  return (
        <Container   sx ={{ width: "320px", mt: "70px",  display: "flex",justifyContent: "center" ,maxWidth: "1000px", flexWrap: "wrap"}}>
      <Card sx={{ width: "300px",textAlign: "center" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Current User
            </Typography>
            <Typography>
            {currentUser && currentUser.email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx ={{display: "flex",justifyContent: "center"}}>
          <Link to="/updateProfile" style={{textDecoration: "none"}}>
          <Button  size="small" sx ={{bgcolor:"#000", color: "#fff",p:1, ':hover': {
                      bgcolor: '#212121', 
                    },}}>
            Update Profile
          </Button>
          </Link>
        </CardActions>
      </Card>
      <Button onClick={handleLogOut} sx ={{fontSize:"20px" }}>Log Out</Button>
    </Container>
  );
}
