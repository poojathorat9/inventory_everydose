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
} from ".././utils/imports/Material_UI_ImportUtility";
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
    width: "10%",
    height: "13%",
  },
}));

const Lists = (props) => {
  const classes = useStyles();

  const [item, setItem] = useState("");
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
        qty: "0",
      },
    ]);
  };

  const handleItemName = (e) => {
    if (e.target.value !== "") {
      setItem(e.target.value);
    }
  };

  const removeItem = (sr) => {
    let before = data;
    let after = before.filter((item) => item.sr_no != sr);
    setData(after);
  };

  const handleClearAll = () => {
    setData([]);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item justifyContent={"center"} xs={12}>
          <h2>Edit List</h2>
        </Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={6}>
          <div style={{ backgroundColor: "white", padding: "5px" }}>
            <div className="mb-3">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Item Name *"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  onChange={(e) => {
                    handleItemName(e);
                  }}
                  id="item"
                />{" "}
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                  onClick={handleAddItem}
                >
                  Add
                </button>
              </div>
              <div className="form-text text-start">
                To get stated, add 1 or more items
              </div>
            </div>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 200 }} aria-label="customized table">
                <Typography
                  style={{
                    backgroundColor: "#f2f2f2",
                    width: "150%",
                    textAlign: "left",
                    padding: "5px",
                  }}
                >
                  Inventory List
                </Typography>

                <TableHead>
                  {/* <TableRow>
                  <TableCell>
                    {" "}
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow> */}
                </TableHead>
                <TableBody>
                  {data && (
                    <>
                      {data.map((row) => (
                        <TableRow key={row.sr_no}>
                          <TableCell>{row.item_name}</TableCell>
                          <TableCell align="right">
                            <CloseIcon
                              style={{ color: "#d73838", cursor: "pointer" }}
                              onClick={(e) => {
                                removeItem(row.sr_no);
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  )}
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
          </div>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export { Lists };
