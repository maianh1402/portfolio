import React, {useEffect, useState} from 'react'
import { projectData, projectNav } from './Data'
import WorksItem from './WorksItem'

const Works = () => {
    const [item, setItem] = useState({name: 'all'})
    const [project, setProject] = useState([])
    const [active, setActive] = useState(0)


    useEffect(() =>{
        if(item.name === 'all'){
            setProject(projectData)
        } else{
            const newProjects = projectData.filter((project) =>{
                return project.category.toLowerCase() === item.name;
            })
            setProject(newProjects)
        }
    }, [item]);

    const handleClick = (e, index) =>{
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index)
    }
  return (
    <>
        <div className='work__filters'>
            {projectNav.map((item, index) =>{
                return(
                    <span 
                        onClick={(e) =>{
                            handleClick(e, index);
                        }}
                        className={`${active === index ? 'active-work' : ''} work__item`} 
                        key={index}
                    >
                        {item.name}
                    </span>
                )
            })}
        </div>

        <div className='work__container container grid'>
            {project.map((item)=>{
                return <WorksItem item={item} key={item.id}/>
            })}
        </div>
    </>
  )
}

export default Works
