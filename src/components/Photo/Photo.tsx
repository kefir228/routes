import React from 'react';
import './Photo.css'

interface CatImage {
    id: number;
    src: string;
}

interface PhotoProps {
    images: CatImage[];
}

export const Photo: React.FC<PhotoProps> = ({ images }) => {
    return (
        <div className='photoContainer'>
            <ul className='photoList'>
                {images.map((image) => (
                    <li className='photoItem'>
                        <img key={image.id} src={image.src} alt={`Cat ${image.id}`} className='photoImage' />
                    </li>
                ))}
            </ul>
        </div>
    )
}