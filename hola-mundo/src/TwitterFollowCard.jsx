export function TwitterFollowCard ({username, nickname, avatar}) {
    return (
        <article className='md-followCard'>
            <header className='md-followCard-header'>
                <img alt = "Avatar" className='md-followCard-avatar'
                src={`${avatar}`}></img>
                <div className='md-followCard-info'>
                    <strong className='md-followCard-nickname'>{nickname}</strong>
                    <span className='md-followCard-username'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className='md-followButtton'>Seguir</button>
            </aside>
        </article>
    )
}