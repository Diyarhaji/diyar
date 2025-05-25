import React from 'react'
import Tiltle from '../componant/Tiltle'
import ProjectFilter  from '../componant/ProjectFilter'
import { useTranslation } from 'react-i18next';
const Projects = () => {
  const { t } = useTranslation();
  return (
    <div id='projects' className="h-auto  ">
       <Tiltle text={t('project_title')} />
      <ProjectFilter />
    </div>
  )
}

export default Projects
