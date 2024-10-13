import React from 'react'
import './Section.css'

interface SectionProps {
    contents:{
        list:string
        add:string
        cont:string
    }
}

export const Section:React.FC<SectionProps> = ({ contents }) => {
    return (
        <div>
            <ul className='sect__list'>
                <li className='sect__item'>
                    {contents.list}
                </li>
                <li className='sect__plus'>
                    {contents.add}
                </li>
            </ul>
            <p className='sect__cont'>{contents.cont}</p>
        </div>
    )
}