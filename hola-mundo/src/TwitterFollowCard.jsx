import { useState } from "react"

export function TwitterFollowCard ({format, username, children, avatar}) {
    const [isFollowing, setIsFollowing] = useState(false)
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
                </button>
            </aside>
        </article>
    )
}