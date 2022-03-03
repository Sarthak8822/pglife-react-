import "./Lists.css";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardImg, CardTitle, CardText, Button } from "reactstrap";
import {RemoveScrollBar} from 'react-remove-scroll-bar';


export default function Lists() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Typography color="text.primary">Property_List</Typography>
        </Breadcrumbs>
      </div>
      <RemoveScrollBar />      
      <div className="py-3">
        <Card
          body
          inverse
          style={{
            backgroundColor: "#333",
            borderColor: "#333",
            width: "75%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <CardImg
            alt="Card image cap"
            src="../img/properties/1/46ebbb537aa9fb0a.jpg"
            left width="25%"
          />
          <CardTitle tag="h5">2-BHK Flat with all facilities</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Button</Button>
        </Card>
      </div>
    </>
  );
}
