import "./Comment.css"

interface CommentProps {
    postText:string
    image:string
}

export const Comment:React.FC<CommentProps> = ({postText,image}) => {
    return (
        <div className="content">
            <p className="content__post">{postText}</p>
            <img className="img" src={image} alt="" />
        </div>
    )
}