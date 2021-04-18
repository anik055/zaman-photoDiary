import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Package = ({packagee}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
        {
            packagee.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${packagee.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${packagee.img}`} alt=""/>
        }
            <h4>{packagee.name}</h4>
            <h5>{packagee.price}</h5>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
            <button>book now</button>
        </div>
    );
};

export default Package;