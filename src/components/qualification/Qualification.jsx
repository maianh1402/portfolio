import React, {useState} from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className='qualification section' id='qualification'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>Trình độ bản thân</span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div 
                    className={
                        toggleState === 1
                        ? 'qualification__button qualification__active button--flex'
                        : 'qualification__button button--flex'
                    }
                    onClick={()=> toggleTab(1)}
                >
                    <i className='uil uil-graduation-cap qualification__icon'></i>
                    Education
                </div>

                <div 
                    className={
                        toggleState === 2
                        ? 'qualification__button qualification__active button--flex'
                        : 'qualification__button button--flex'
                    }
                    onClick={()=> toggleTab(2)}
                >
                    <i className='uil uil-briefcase-alt qualification__icon'></i>
                    Experience
                </div>
            </div>

            <div className='qualification__sections'>
                <div 
                    className={
                        toggleState === 1
                        ? 'qualification__content qualification__content-active'
                        : 'qualification__content'
                    }
                >
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Trường ĐH Kinh doanh và Công nghệ Hà Nội</h3>
                            <span className='qualification__subtitle'>Lập trình website</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                2019 - hiện tại
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>CH vàng bạc phong thủy LuCa Charm</h3>
                            <span className='qualification__subtitle'>Nhân viên CSKH</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                3/2020 - 1/2021
                            </div>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Khóa học fullstack tại F8</h3>
                            <span className='qualification__subtitle'>Lập trình website</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                9/2022 - hiện nay
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>CH thực phẩm TTM Farm</h3>
                            <span className='qualification__subtitle'>Nhân viên thu ngân</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                4/2021 - 1/2022
                            </div>
                        </div>
                    </div>
                </div>


                <div 
                    className={
                        toggleState === 2
                        ? 'qualification__content qualification__content-active'
                        : 'qualification__content'
                    }
                >
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Trường ĐH Kinh doanh và Công nghệ Hà Nội</h3>
                            <span className='qualification__subtitle'>Lập trình website</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                2019 - hiện tại
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>Công ty công nghệ Sucses Parner</h3>
                            <span className='qualification__subtitle'>Nhân viên hậu kì video</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                4/2022 - 7/2022
                            </div>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Khóa học fullstack tại F8</h3>
                            <span className='qualification__subtitle'>Lập trình website</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>
                                9/2022 - hiện nay
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
