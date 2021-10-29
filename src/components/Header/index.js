import React from 'react'
import './style.css'

export default function Header() {
  return (
    <header>
      <navbar className='navigator'>
        <a href='/' className='active page-link'>
          home
        </a>
        <a href='/' className='page-link'>
          about
        </a>
        <a href='/' className='page-link'>
          projects
        </a>
        <a href='/' className='page-link'>
          skills
        </a>
        <a href='/' className='page-link'>
          certificate
        </a>
        <a href='/' className='page-link'>
          experience
        </a>
        <a href='/' className='page-link'>
          contact
        </a>
      </navbar>
    </header>
  )
}
