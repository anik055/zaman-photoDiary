import React from 'react';
import Photographer from '../Photographer/Photographer';

import './photographers.css'
import karim from '../../../images/PG1.jpg'
import rahim from '../../../images/PG2.jpg'
import fahim from '../../../images/PG3.jpg'


const PGData = [
    {
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        pg:'Karim uddin',
        pgImg : karim
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        pg:'Rahim Uddin',
        pgImg : rahim
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        pg:'Fahim uddin',
        pgImg : fahim
    },
]

const Photographers = () => {
    return (
       <section className="my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h1 className="text-primary">Our Professional Photographer</h1>
               </div>
               <div className="row my-4 py-4">
                    {
                        PGData.map(pg => <Photographer pg={pg}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Photographers;