import React, { useEffect, useState } from 'react';


const ManageService = (product) => {
  const {name, price, _id} = product.product;
  console.log(product.product);
      const deleteProduct =(event, id )=> {
        event.target.parentNode.parentNode.style.display = 'none';
          console.log(event.target.parentNode.parentNode.parentNode);

          fetch(`https://hidden-mesa-38104.herokuapp.com/delete/${id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if(data){
                  console.log(document.getElementById("item"));
              }
              })
      }
    return (
       <tbody >
          <tr >
            <td scope='col'>{name}</td>
            <td scope='col'>{price}</td>
            <td scope='col'><button onClick={(event)=>deleteProduct(event,_id)}>Delete</button></td>
        </tr>
       </tbody>
    );
};

export default ManageService;