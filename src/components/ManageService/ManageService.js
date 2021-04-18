import React, { useEffect, useState } from 'react';


const ManageService = (product) => {
  const {name, price, _id} = product.product;
  console.log(product.product);
      const deleteProduct =(event, id )=> {
        event.target.parentNode.parentNode.style.display = 'none';
          console.log(event.target.parentNode.parentNode.parentNode);

          fetch(`http://localhost:5000/delete/${id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if(data){
                  console.log(document.getElementById("item"));
                //   document.getElementById("item").style.display = "none";
                //   document.getElementById("item")
                //   event.target.parentNode.parentNode.parentNode.style.display = 'none';
              }
              })
      }
    return (
       <tbody style={{display:'block'}}>
          <tr id="item">
            <td>{name}</td>
            <td>{price}</td>
            <td>1</td>
            <td><button onClick={(event)=>deleteProduct(event,_id)}>Delete</button></td>
        </tr>
       </tbody>
    );
};

export default ManageService;