import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import {
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Table,
  Grid,
  TableBody,
  TableCell,
  makeStyles,
} from ".././utils/imports/Material_UI_ImportUtility";
import Data from "./data";

const useStyles = makeStyles((theme) => ({
 
  button: {
    backgroundColor: '#0078C8',
    color: 'white',
    '&:hover': {
      backgroundColor: '#083f6a',
      color: 'white',
  },
  border:'none',
  borderRadius:'5px',
  width:'8%',
  height:'20%',

}

}));

const Home = (props) => {
  const classes = useStyles();

  useEffect(() => {
  console.log("data",Data)
  }, [Data])
  

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item justifyContent={"center"} xs={12}>
          <h1>Inventory List</h1>
        </Grid>
        <Grid item xs={3}>
          {" "}
        </Grid>
       
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Item Name</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Data.map((row) => (
                  <TableRow key={row.sr_no}>
                    <TableCell component="th" scope="row">
                      {row.sr_no}
                    </TableCell>
                    <TableCell>{row.item_name}</TableCell>
                    <TableCell>{row.qty}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      
        <Grid item xs={3}>
          {" "}
        </Grid>
      </Grid>

      <br />

      <Link to="lists">
        <button
          className={classes.button}
        >
          Edit List
        </button>
      </Link>
    </div>
  );
};
export { Home };
