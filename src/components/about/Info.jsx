import React from 'react'

export default function Info() {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i className='bx bx-award about__icon'></i>
        <h3 className='about__title'>Kinh nghiệm</h3>
        <span className='about__subtitle'>0</span>
      </div>

      <div className='about__box'>
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className='about__title'>Project</h3>
        <span className='about__subtitle'>3 +Project</span>
      </div>

      <div className='about__box'>
        <i className='bx bx-support about__icon'></i>
        <h3 className='about__title'>Support</h3>
        <span className='about__subtitle'>Online 24/7</span>
      </div>
    </div>
  )
}
