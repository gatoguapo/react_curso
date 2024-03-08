import { useState } from "react"

export function TwitterFollowCard ({format, username, children, avatar, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'md-followButton is-following'
    : 'md-followButton'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='md-followCard'>
            <header className='md-followCard-header'>
                <img alt = "Avatar" 
                className='md-followCard-avatar'
                src={`${avatar}`}>
                </img>

                <div className='md-followCard-info'>
                    <strong>
                        {children}
                    </strong>

                    <span className='md-followCard-username'>
                        {format(username)}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                    <span className="md-followCard-stopFollow">
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    )
}