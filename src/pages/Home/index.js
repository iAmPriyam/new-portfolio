import React from 'react'
import Header from '../../components/Header'
import './style.css'

function Home() {
  return (
    <div className='flex-col main-container'>
      <Header />
      <main className='flex-col main-content'>
        <div>
          <h1 className='headings highlighted'>Hi,</h1>
          <h1 className='headings'>I'm Aditya</h1>
        </div>
        <div>
          <h4 className='sub-headings'>Im a developer</h4>
          <h4 className='sub-headings'>Welcome to my portfolio</h4>
        </div>
      </main>
    </div>
  )
}

export default Home
