import {
  Button,
  Icon,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",
    marginLeft: "40vw",
    marginTop: "10vh",
    padding: "10px",
    width: "90vw",
  },
  formgroup: {
    margin: "10px",
    width: "100vw",
  },
  textF: {
    width: "20vw",
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
      color:'rgb(0,0,0,1)'
  }
}));

function Contact() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
    <Typography className={classes.title} variant="h3" component="h2">Contact Us!</Typography> 
      <form action="/" method="GET">
        <div className={classes.formgroup}>
          <TextField
            className={classes.textF}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
        </div>
        <div className={classes.formgroup}>
          <TextField
            className={classes.textF}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </div>
        <div className={classes.formgroup}>
          <TextField
            className={classes.textF}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue="Enter your message"
            variant="outlined"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          type="submit"
        >
          Send
        </Button>
      </form>
    </section>
  );
}

export default Contact;
