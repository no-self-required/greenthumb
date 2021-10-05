import React from "react";
import "./SingleProduct.scss";
import { Button, Paper, Grid, Typography, CardActions } from "@mui/material";

import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";

function SingleProduct({ name, price, rating, img, details, clickSave }) {
  
  return (
    <Card sx={{ maxWidth: 330 }}>
      <div className="single_product">
        <div className="product">
          <div id="prodimg">
            <CardMedia>
              <img src={img} alt="" />
            </CardMedia>
          </div>
          <div id="rating">
            <CardContent>
              <Typography variant="body2">{`***** ${rating}`}</Typography>
            </CardContent>
          </div>
          <div id="cardcontent">
            <CardContent>
              <div className="info">
                <Typography variant="body2">{name}</Typography>
                <Typography variant="body2">{price}</Typography>
              </div>
            </CardContent>
          </div>
          <CardActions>
            <div className="buttons">
              <div className="left">
                <Button variant="outlined">
                  <a href={details}>See Details</a>
                </Button>
              </div>
              <div className="right">
                <Button variant="outlined" onClick={() => clickSave({name, price, rating, img, details})}>Save</Button>
                <Button variant="outlined">Share</Button>
              </div>
            </div>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}

export default SingleProduct;
