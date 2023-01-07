import React, { useState, useEffect } from "react";
import {
  TextField,
  Grid,
  Button,
  Table,
  TableCell,
  TableRow,
  TableContainer,
  TableBody,
  Paper,
  TableHead,
  Typography,
  CloseIcon,
  makeStyles,
} from "../utils/imports/Material_UI_ImportUtility";
import Data from "./data";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#0078C8",
    color: "white",
    "&:hover": {
      backgroundColor: "#083f6a",
      color: "white",
    },
    border: "none",
    borderRadius: "5px",
    width: "12%",
    height: "12%",
  },
}));

const AddBonus = (props) => {
  const classes = useStyles();

  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  const handleAddItem = () => {
    setData([
      ...data,
      {
        sr_no: data.length + 1,
        item_name: item,
        qty: qty,
      },
    ]);
  };

  const removeItem = (sr) => {
    let before = data;
    let after = before.filter((item) => item.sr_no != sr);
    setData(after);
  };

  const handleClearAll = () => {
    setData([]);
  };

  const handleItemDetails = (e) => {
    if (e.target.id === "item") {
      setItem(e.target.value);
    } else if (e.target.id === "qty") {
      setQty(e.target.value);
    }
  };

  const handleItemDetailsQty = (e) => {
    if (e.target.id === "qty2") {
      setQty(e.target.value);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item justifyContent={"center"} xs={12}>
          <h1>Bonus Quantity</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} justifyContent={"center"}>
          <TextField
            id="item"
            variant="outlined"
            helperText="To get started, add 1 or more items"
            placeholder="Item Name"
            onChange={(e) => {
              handleItemDetails(e);
            }}
          />
          &nbsp;&nbsp;&nbsp;
          <TextField
            onChange={(e) => {
              handleItemDetails(e);
            }}
            placeholder="Quantity"
            id="qty"
            variant="outlined"
          />
          <button
            className={classes.button}
            onClick={(e) => {
              handleAddItem(e);
            }}
          >
            Add
          </button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {" "}
                    <Typography>Inventory List</Typography>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.item_name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Grid className="d-flex" item form="maincomponent" xs>
                        <p>Quantity : &nbsp;</p>{" "}
                        <input
                          style={{ width: "50px", height: "-20px" }}
                          type="number"
                          InputProps={{
                            inputProps: {
                              max: 100,
                              min: 1,
                            },
                          }}
                          value={row.qty}
                          id="qty2"
                          onChange={(e) => {
                            handleItemDetailsQty(e);
                          }}
                        />
                      </Grid>
                    </TableCell>
                    <TableCell align="right">
                      <CloseIcon
                        style={{ color: "#d73838" }}
                        onClick={(e) => {
                          removeItem(row.sr_no);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="outlined"
                style={{
                  marginRight: "2%",
                  color: "#747474",
                  borderRadius: "5px",
                  marginBottom: "12px",
                  marginTop: "12px",
                }}
                onClick={handleClearAll}
              >
                Clear All
              </Button>
            </Grid>
          </TableContainer>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export { AddBonus };
