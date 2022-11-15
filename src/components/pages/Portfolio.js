import React from 'react';
import playlistProducer from '../../assets/playlistproducer.png';
import happyLittleTrees from '../../assets/happylittletrees.png';
import noteTaker from '../../assets/notetaker.png';
import glimpse from '../../assets/glimpse.png';

export default function Portfolio() {
  return (
    <div>
<h1 className='m-5'>Portfolio</h1>
    <div class="row row-cols-1 row-cols-md-4 mw-100 mx-5">
  <div class="col mb-4">
    <div class="card">
      <a href='https://jessicamorse23.github.io/Playlist-Producer/' target={'blank'}><img src={playlistProducer} class="card-img-top" alt="playlist-producer"/></a>
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">Playlist Producer</h5>
        <p class="card-text">HTML, CSS, JS and Third-Party API</p>
        <a className='github-icon link-light' href='https://github.com/jessicamorse23/Playlist-Producer'><i className="bi bi-github"></i></a>
      </div>
    </div>
  </div>
  
  <div class="col mb-4">
    <div class="card">
      <a href='https://warm-castle-73528.herokuapp.com/' target={'blank'}><img src={happyLittleTrees} class="card-img-top" alt="playlist-producer"/></a>
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">Happy Little Trees</h5>
        <p class="card-text">Node.js, Express.js and MySQL</p>
        <a className='github-icon link-light' href='https://github.com/anguyen780/happy-little-trees'><i className="bi bi-github"></i></a>
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <a href='https://sleepy-gorge-71008.herokuapp.com/' target={'blank'}><img src={noteTaker} class="card-img-top" alt="playlist-producer"/></a>
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">Note Taker</h5>
        <p class="card-text">Express.js</p>
        <a className='github-icon link-light' href='https://github.com/anguyen780/CH11-Note-Taker'><i className="bi bi-github"></i></a>
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="card">
      <a href='https://glimpse-chat.herokuapp.com/' target={'blank'}><img src={glimpse} class="card-img-top" alt="playlist-producer"/></a>
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">Glimpse</h5>
        <p class="card-text">React, Websockets, Apollo Graphql</p>
        <a className='github-icon link-light' href='https://github.com/Shengaero/glimpse'><i className="bi bi-github"></i></a>
      </div>
    </div>
  </div>

</div>
    </div>
  );
}
