import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard username="gat0guap0" nickname="gatoguapo" 
            avatar="https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1600&h=900">                
            </TwitterFollowCard>
            <TwitterFollowCard username="burrelio" nickname="Rogelio Samuel" 
            avatar="https://scontent.fcul1-1.fna.fbcdn.net/v/t39.30808-6/333683915_580093990812163_4505716697153649229_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGbdP_K8I213E2VDX9NsY_WqV_lcB6x3BWpX-VwHrHcFdlPLAfGwj9lSN3oKUgYjhPR8uQXLxBMOqwXNWKvP4ic&_nc_ohc=xo0JjC3ZzCYAX8j7XDT&_nc_ht=scontent.fcul1-1.fna&oh=00_AfBI06vg8EMCHdNDFohH64pm2K9wanyNDXkH-bkOgUjayA&oe=65E02B4C">                
            </TwitterFollowCard>
            <TwitterFollowCard username="anal" nickname="Alan Meza" 
            avatar="https://scontent.fcul1-1.fna.fbcdn.net/v/t39.30808-6/339558057_242722181549298_1918349810592514625_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEgjs3NK3JOwC7gTaxyObEOu2gXVDWjUdm7aBdUNaNR2Vw6ruMVk1djMucwpE1205YNheDTt9MLBIs2lr9skXZC&_nc_ohc=1kK0S4Ru1HMAX_P4Uly&_nc_ht=scontent.fcul1-1.fna&oh=00_AfB8lafTm_7poQWIDUWUXtMtLpH55nwQJ2v1FLgB9pZVuQ&oe=65E16A79">                
            </TwitterFollowCard>
        </section>
    )
}