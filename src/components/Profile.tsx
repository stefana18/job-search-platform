import "./Profile.css"

type ProfileProps = {
    username: string
}


export default function Profile({username}: ProfileProps) {
    return (
        <div className="profile">
            <span className="username">{username}</span>
        </div>
    )
}