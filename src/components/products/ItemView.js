import React, { useState, useEffect } from 'react';
import products from '../../apis/products';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const ItemView = (props) => {
  const [ product ,setProduct ] = useState({});

  useEffect(() => {
    products.get(`/products/${props.match.params.id}`)
    .then(productInfo => {
      setProduct(productInfo.data.data.product);
    })
  }, [])

  return (
    <Grid item container>
      <Grid item s={6} md={6}>
        <img src={product.image} />
      </Grid>
      <Grid item s={6} md={6}>
        <h1>{product.itemName}</h1>
        <h3>{`$ ${product.price}.00`}</h3>
      </Grid>
      <Grid item s={12}>
        <Typography color="textSecondary" gutterBottom>
          Materials:
          <br/>
          {product.materials}
        </Typography>
      </Grid>
      <Grid item s={12}>
        <Typography variant="body2" component="p">
          Description:
          <br />
          {product.description}
        </Typography>
      </Grid>
    </Grid>
  )
}

//     return (
//       <div className="ui items">
//         <div className="item">
//           <div className="image ui medium round image">
//             <img src={this.state.product.image} />
//           </div>
//           <div className="content">
//             <h1 className="header">{this.state.product.itemName}</h1>
//             <h3 >{`$ ${this.state.product.price}.00`}</h3>
//           </div>
//         </div>
//         <div className="meta">
//           <div className="header">Item Materials: {this.state.product.materials}</div>
//         </div>
//         <div className="item">
//           {this.state.product.description}
//         </div>
//       </div>
//     )
//   }
// };

export default ItemView;