import React from 'react';
import Project from './Project';
import AllProjects from './AllProjects';

const Projects: React.FC = () => {
  return (
    <>
      <div
        className='experience mb-24 mx-8'
        id='projects'>
        <h2 className='title'>Projects</h2>
        <div className='flex md:flex-row justify-around'>
          <div className='flex items-center text-sm mb-8 mx-2'>
            <span className='inline-block'>Proficient</span>
            <span className='inline-block mx-2'> — </span>
            <span className='inline-block border-2 border-gray-400 w-16 rounded-md h-6'></span>
          </div>
          <div className='flex items-center text-sm mb-8 mx-2'>
            <span className='inline-block border-2 w-16 border-gray-400 border-dashed rounded-md h-6'></span>
            <span className='inline-block mx-2'> — </span>
            <span className='inline-block'>Familiar</span>
          </div>
        </div>

        <div className='project'>
          <Project
            imgsrc={'/src/assets/asayaketaiko.gif'}
            title={'Asayake Taiko Website Renewal'}
            skillsHighlight={[
              'Svelte',
              'JavaScript',
              'HTML',
              'SCSS',
              'Responsive UI',
            ]}
            skills={['Sendgrid', 'Vercel']}
            link={'https://asayake.vercel.app/'}>
            <div className='text-sm'>
              <div className='mb-2'>
                Revamped Asayake Taiko website using Svelte. The new website
                boasts a responsive design that seamlessly adapts to various
                devices, including mobile phones, tablets, and PCs.
              </div>
              <div className='mb-2'>
                From conceptualization to implementation, I handled every aspect
                of the project, taking charge of both design and development.
              </div>
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/aikomicare.gif'}
            title={'Aikomiケア Website'}
            skillsHighlight={[
              'JavaScript',
              'HTML',
              'SCSS',
              'TailwindCSS',
              'Responsive UI',
            ]}
            skills={['Vite', 'PHP', 'MySQL', 'AWS Lightsail']}
            link={'https://aikomicare.com/'}>
            <div className='text-sm'>
              <div className='mb-2'>
                A website designed to introduce users to Aikomi Care and
                step-by-step guidance throughout their entire service
                experience.
              </div>
              <div className='mb-2'>
                Utilized PHP and MySQL to create a functional contact form.
              </div>
              <div>
                Implemented automated cron jobs to execute a script, ensuring
                SSL certificate renewal.
              </div>
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/minimalistblog.gif'}
            title={'Minimalist | Personal Blog'}
            skillsHighlight={[
              'Next.js',
              'TypeScript',
              'TailwindCSS',
              'Styled Component',
            ]}
            skills={['Vercel']}
            link={'https://www.bepersistent.dev/'}>
            <div className='text-sm'>
              Created a minimalist-inspired blog featuring clean aesthetics and
              a focus on simplicity, providing users with a distraction-free
              reading experience.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/artlog.gif'}
            title={'Artlog'}
            skillsHighlight={['React.js', 'Redux', 'TypeScript', 'SCSS']}
            skills={['Node.js', 'Express.js', 'MongoDB', 'Axios']}
            link={'https://artlogs.netlify.app/'}>
            <div className='text-sm'>
              Created Artlog as a personal endeavor, curating a visual diary of
              my daily outfits as a hobby artist, fostering creativity and
              self-expression in the realm of minimalist fashion.
            </div>
          </Project>
          <Project
            imgsrc={'/src/assets/portfolio.gif'}
            title={'www.jiiyoo.me'}
            skillsHighlight={[
              'React.js',
              'React Hooks',
              'TypeScript',
              'TailwindCSS',
              'SCSS',
            ]}
            skills={[]}
            link={'https://www.jiiyoo.me'}>
            <div className='text-sm'>A portfolio website built with React.</div>
          </Project>
        </div>
      </div>
      <AllProjects />
    </>
  );
};

export default Projects;
