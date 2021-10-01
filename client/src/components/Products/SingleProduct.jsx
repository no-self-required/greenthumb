import React from "react";
import "./SingleProduct.scss";
import { Button, Paper, Grid, Typography, CardActions } from "@mui/material";

import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";

function SingleProduct({ name, price, rating, img, details }) {
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
                <Button variant="outlined">Save</Button>
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

// function SingleProduct({ name, price, rating, img, details }) {
//   return (
//     <div className="single_product">
//       <div className="product">
//         <img src={img} alt="" />
//         <span>{`***** ${rating}`}</span>
//         <div className="info">
//           <p>{name}</p>
//           <p>{price}</p>
//         </div>
//         <div className="buttons">
//           <div className="left">
//             <Button variant="outlined">
//               <a href={details}>See Details</a>
//             </Button>
//           </div>
//           <div className="right">
//             <Button variant="outlined">Save</Button>
//             <Button variant="outlined">Share</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function SingleProduct({ name, price, rating, img, details }) {
//   return (
//     // <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
//     <Grid container spacing={2}>
//       <div className="single_product">
//         <div className="product">
//           <Grid item >
//             <img src={img} alt="product-img" />
//           </Grid>
//           <Grid item >
//             <div className="info">
//               <Typography variant="body2">{name}</Typography>
//               <Typography variant="body2">{price}</Typography>
//             </div>
//           </Grid>
//           <Grid item>
//             <Typography variant="body2">{`***** ${rating}`}</Typography>
//           </Grid>
//           <div className="buttons">
//             <Grid item>
//               <div className="left">
//                 <Button variant="outlined">
//                   <a href={details}>See Details</a>
//                 </Button>
//               </div>
//             </Grid>
//             <div className="right">
//               <Grid item>
//                 <Button variant="outlined">Save</Button>
//               </Grid>
//               <Grid item>
//                 <Button variant="outlined">Share</Button>
//               </Grid>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Grid>
//     // </Paper>
//   );
// }
