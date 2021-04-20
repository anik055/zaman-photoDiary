import React from 'react';

const BlogPost = (props) => {
    const {description, pg, pgImg} = props.pg;
    return (
        <div className="col-md-6 col-lg-4 text-center">
            <img className="PG-img" src={pgImg} alt=""/>
            <h3>{pg}</h3>
            <h6 className="text-muted">{description}</h6>
            <button className='btn btn-primary'>Hire Me</button>
            
       </div>
    );
};

export default BlogPost;