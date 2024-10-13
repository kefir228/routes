import './Public.css';
import { Header } from './Header/Header';
import { Comment } from './Comment/Comment';
import { Footer } from './Footer/Footer';

import anakin from '../Img/anakin.jpg'
import anakinPost from "../Img/960x0.jpg"
import yoda from '../Img/yoda.jpg'
import yodaPost from '../Img/yoda-post.jpg'
import kenobi from '../Img/kenobi.jpg'
import kenobiPost from '../Img/kenobiPost.jpg'

const posts = [
    {
        id: 1,
        avatar: anakin,
        name: 'Anakin Skywalker',
        email: '@dart_vader',
        date: '26 лют.',
        postText: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
        image: anakinPost,
        comments: 482,
        shares: 146,
        likes: 887,
    },
    {
        id: 2,
        avatar: yoda,
        name: 'Yoda',
        email: '@master_yoda',
        date: '15 бер.',
        postText: 'Patience you must have, my young padawan.',
        image: yodaPost,
        comments: 389,
        shares: 205,
        likes: 990,
    },
    {
        id:3,
        avatar: kenobi,
        name:"Obi-Wan Kenobi",
        email:'@kenobi',
        date:'9 лип.',
        postText:'The Force will be with you, always.',
        image:kenobiPost,
        comments: 456,
        shares:675,
        likes:125,
    },
];

export const Public = () => {
    return (
        <div className="public-container">
            {posts.map((post) => (
                <div key={post.id} className='post'>
                    <Header
                        avatar={post.avatar}
                        name={post.name}
                        email={post.email}
                        date={post.date}
                    />
                    <Comment
                        postText={post.postText}
                        image={post.image}
                    />
                    <Footer
                        comments={post.comments}
                        shares={post.shares}
                        likes={post.likes}
                    />
                </div>
            ))}
        </div>
    )
}