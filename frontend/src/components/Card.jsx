import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ModalPlat from '../components/ModalPlat'


const Card = ({plats, id}) => {

    const [modalVisible, setModalVisible] = useState(false)

    const handleClick = () => {
        setModalVisible(true)
    }

    return (
        <>
            <div onClick={handleClick} className="sous-bloc-plats-2">
                {
                    plats.map((plat, index) => {
                        if(plat.catid === id){
                            return  (
                                <div key={index} className="plat">
                                    <img src={plat.urlimg} alt=""/>
                                    <h2>{plat.name}</h2>
                                    <h3>{plat.prix} €</h3>
                                    {/* <ModalPlat onclick={onClick} /> */}
                                    {
                                        modalVisible && // Pour dire si modal est egale a true alors on fait ça
                                        <div className="modalBackground">
                                            <div className="modalContent">
                                                <h1>{plat.name}</h1>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt animi praesentium distinctio. Quia praesentium libero maxime impedit assumenda! Cumque, voluptatem! Eaque quasi excepturi nemo voluptatem facere est corporis rem voluptas.</p>
                                            </div>
                                        </div>
                                     }
                                </div>
                            )
                        }
                    })
                }
            </div>

            
        </>
    )
}

export default Card