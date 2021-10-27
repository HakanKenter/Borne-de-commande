import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import PlatsDataService from '../services/plats'
import Card from '../components/Card'


const Categories = () => {

    const [plats, setPlats] = useState()
    const {id} = useParams()

    const onClick = (e) => {
        e.stopPropagation()
        console.log('yess')
    }

    useEffect(() => {
        PlatsDataService.getAll()
        .then(res => {
            if(res.status === 200) {
                setPlats(res.data)
            }
        })
        .catch(err => console.log(err))
    }, [])

    if(!plats){
        return null
    }

    console.log(plats)

    return (
        <Card onclick={onClick} plats={plats} id={id} />
    )
}

export default Categories