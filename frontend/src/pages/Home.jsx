import React from 'react'
import {Link} from 'react-router-dom'

const Home = ({datas}) => {
    return (
        datas.map(data => (
            <Link style={{ textDecoration: 'none' }} key={data._id} to={`categories/${data._id}`}>
                <div className="categorie">
                    <img src={data.urlimg} alt=""/>
                    <h2>{data.name}</h2>
                </div>
            </Link>
        ))
    )
}

export default Home