import React, { useState } from 'react'
import '../styles/Collection.css'
import img1 from '../assets/images/img-1.jpeg'
import img2 from '../assets/images/img-2.jpeg'
import img3 from '../assets/images/img-3.jpeg'
import img4 from '../assets/images/img-4.jpg'
import img5 from '../assets/images/img-5.jpg'
import img6 from '../assets/images/img-6.jpeg'
import img7 from '../assets/images/img-7.jpeg'
import img8 from '../assets/images/img-8.jpg'
import img9 from '../assets/images/img-9.jpeg'
import img10 from '../assets/images/img-10.jpg'

const CollectionContent = () => {
    return (
        <div className="collection-content">
            <img src={img1} className="images"/>
            <img src={img2} className="images"/>
            <img src={img3} className="images"/>
            <img src={img4} className="images"/>
            <img src={img5} className="images"/>
            <img src={img6} className="images"/>
            <img src={img7} className="images"/>
            <img src={img8} className="images"/>
            <img src={img9} className="images"/>
            <img src={img10} className="images"/>
        </div>
    )
}

export default CollectionContent