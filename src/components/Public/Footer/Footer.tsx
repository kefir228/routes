import './Footer.css'

interface FooterProps {
    comments: number
    shares: number
    likes: number
}

export const Footer: React.FC<FooterProps> = ({ comments, shares, likes }) => {
    return (
        <div className='footer'>
            <ul className="footer__list">
                <li className="footer__item" dangerouslySetInnerHTML={{ __html: `&#128172 ${comments}` }} />
                <li className="footer__item" dangerouslySetInnerHTML={{ __html: `&#128257  ${shares}` }} />
                <li className="footer__item" dangerouslySetInnerHTML={{ __html: `&#9829  ${likes}` }} />
                <li className="footer__item" dangerouslySetInnerHTML={{ __html: '&#128190' }} />
            </ul>
        </div>
    )
}