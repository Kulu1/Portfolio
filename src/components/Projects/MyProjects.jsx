import { useNavigate } from 'react-router-dom'
import OpenLink from './OpenLink'
import ProjectDetails from './ProjectDetails'
import ProjectList from './ProjectList'
import Thumbnail from './Thumbnail'

// project image:
import taxico from '../../assets/taxico.jpg'
import certifi from '../../assets/certifi.png'
import Medivault from '../../assets/Medivault.png'

const projects = [
    {
        id: 1,
        title: 'Certifi',
        image: certifi,
        stacks: 'React, Node.js, Solidity, IPFS, Truffle, & MongoDB',
        description: "Certifi is a blockchain-based platform that verifies the authenticity of certificates. This project demonstrates my and my team's ability to work with blockchain technology and create a secure and reliable platform for certificate verification.",
        link: 'https://certifi-oc8a5oicn-prj-certifi-frontend.vercel.app'
    },
    {
        id: 2,
        title: 'Medivault',
        image: Medivault,
        stacks: 'React, Tailwind CSS, Solidity, IPFS, Truffle, & MongoDB',
        description: "Medivault is a blockchain-based platform that stores and verifies medical records on the ipfs. This project showcases my and my team's ability to work with blockchain technology and create a secure and reliable platform for storing medical records promoting trust and reliability amongst patients.",
        link: 'https://gitlab.com/karma123/medivault.git'
    },
]

export default function MyProjects() {
    const direct = useNavigate();
    return (
        <section className='bg-[rgba(229,231,235,0.75)] dark:bg-[rgba(26,36,50,0.85)]'>
            <div className='py-5 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                <h2 className='font-bold text-xl tracking-wide'>My Projects</h2>

                {projects.map(project => (
                    <ProjectList key={project.id} >
                        <Thumbnail
                            image={project.image}
                            title={project.title}
                        />
                        <ProjectDetails project={project}>
                            <OpenLink link={project.link} />
                        </ProjectDetails>
                    </ProjectList>
                ))}

                <button onClick={() => direct('/projects')} className='mt-5 relative left-1/2 -translate-x-1/2 font-semibold flex items-center gap-1.5 text-red-500 dark:text-sky-500  border-b-2 border-transparent hover:border-red-400 hover:dark:border-sky-500 transition'>
                    View more projects
                    <svg className='fill-current' xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                </button>
            </div>
        </section>
    )
}