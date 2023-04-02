import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Bùi Thị Phương Anh</h1>

        <ul className='footer__list'>
            <li>
                <a href='#about' className='footer__link'>About</a>
            </li>
            <li>
                <a href='#project' className='footer__link'>Project</a>
            </li>
            <li>
                <a href='#testimonials' className='footer__link'>Testimonials</a>
            </li>
        </ul>

        <div className='footer__social'>
            <a href='https://www.instagram.com/bpa.02' className='footer__social-link' target='blank'>
                <i className='bx bxl-instagram'></i>
            </a>

            <a href='https://www.facebook.com/profile.php?id=100014931164175' className='footer__social-link' target='blank'>
                <i className="bx bxl-facebook"></i>
            </a>

            <a href='https://github.com/maianh1402' className='footer__social-link' target='blank'>
                <i className="bx bxl-github"></i>
            </a>
        </div>

        <span className='footer__copy'>
            &#169; 2022
        </span>
      </div>
    </footer>
  )
}

export default Footer
