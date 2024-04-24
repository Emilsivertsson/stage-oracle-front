import logoHanger from './assets/logo hanger.png'
function Home() {

  return (
      <main className={'home'}>
          <img className="Logo" src={logoHanger} alt={'Stage Oracle'}/>
          <h1 id="home-h1">Welcome to Stage Oracle</h1>
          <p>Stage Oracle is a platform that connects Performers and Theatre/Opera Companies.</p>
      </main>
  )
}

export default Home
