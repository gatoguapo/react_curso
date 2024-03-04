import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (username) => `@${username}`
    const gatoguapo = { format: format, username: "gat0guap00"}
    //const formattedUsername = <span>@chikis</span>
    return (
        <section className='App'>
            <TwitterFollowCard 
                {...gatoguapo}
                avatar="https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1600&h=900">                
                gatoguapo
            </TwitterFollowCard>

            <TwitterFollowCard
                format={format} 
                username="rogelio" 
                avatar="https://scontent.fcul1-1.fna.fbcdn.net/v/t39.30808-6/333683915_580093990812163_4505716697153649229_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGbdP_K8I213E2VDX9NsY_WqV_lcB6x3BWpX-VwHrHcFdlPLAfGwj9lSN3oKUgYjhPR8uQXLxBMOqwXNWKvP4ic&_nc_ohc=9qYX6Zj0i2UAX-PIzpG&_nc_ht=scontent.fcul1-1.fna&oh=00_AfAcWn-6PjJsDhV-kS-m4suBNKpDNpx1uYJAzoK350LVbw&oe=65E61A0C">                
                Rogelio Samuel 
           </TwitterFollowCard>

            <TwitterFollowCard 
                format={format}
                username="al4n" 
                avatar="https://scontent.fcul1-1.fna.fbcdn.net/v/t39.30808-6/339558057_242722181549298_1918349810592514625_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEgjs3NK3JOwC7gTaxyObEOu2gXVDWjUdm7aBdUNaNR2Vw6ruMVk1djMucwpE1205YNheDTt9MLBIs2lr9skXZC&_nc_ohc=_m6M0yTxwkgAX97Jg8_&_nc_ht=scontent.fcul1-1.fna&oh=00_AfAIabmluK2Qhivcld_m47LdXchAPOLv2IK5FNqP2qt5UA&oe=65E75939">                
                Alan Meza
            </TwitterFollowCard>
        </section>
    )
}