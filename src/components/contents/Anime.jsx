import React from 'react'

import { AnimeText } from '../../data/anime'
import { Link } from 'react-router-dom'


const Anime = () => {
  return (
    <section id='movie'>
      <h2>😍추천 애니를 소개합니다.</h2>
      <div className='video__inner'> 
        {AnimeText.map((anime, key) => (
          <div className="video" key={key}>
              <div className="video__thumb play__icon">

                  {/* /video/HjP_yAa2E1c */}
                  <Link to={`/video/${anime.videoId}`}>
                    <img src={anime.img} alt= {anime.title}/>
                  </Link>
              </div>
          </div>

        ))}

      </div>
    </section>
  )
}

export default Anime