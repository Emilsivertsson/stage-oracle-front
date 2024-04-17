import React from 'react'
function Home() {

  return (
      <main className={'home'}>
          <img className="Logo" src={'/src/assets/logo hanger.png'} alt={'Stage Oracle'}/>
          <h1 id="home-h1">Welcome to Stage Oracle</h1>
          <p>Stage Oracle is a platform that connects performers and productions.</p>
          <p>Performers can create a profile and upload their measurements.</p>
          <p>Productions can create a production and add performers to it.</p>
      </main>
  )
}

export default Home
