import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProjectList from "../components/Projects/ProjectList";
import Thumbnail from "../components/Projects/Thumbnail";
import ProjectDetails from "../components/Projects/ProjectDetails";
import OpenLink from "../components/Projects/OpenLink";
// project image:
import taxico from '../assets/taxico.jpg'
import certifi from '../assets/certifi.png'
import Medivault from '../assets/Medivault.png'

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
    {
        id: 3,
        title: 'Taxico',
        image: taxico,
        stacks: 'Pure HTML, CSS, Vanilla JS, & node.js',
        description: 'Taxico is revolutionizing the Bhutanese taxi industry by providing a platform for drivers and passengers to connect. This project showcases my and my teams ability to create a user-friendly interface and a seamless user experience.',
        link: 'https://wdp-12.github.io/Finalproject1_Kelompok1/',
    },
   
   
]

export default function ProjectPage() {
    return (
        <>
            <Header />
            <section >
                <div className='pt-5 pb-8 px-4 w-full mx-auto max-w-2xl md:px-0 lg:max-w-screen-lg'>
                    <h2 className='font-bold text-xl tracking-wide'>My Projects</h2>
                    <p className='mt-3 text-gray-600 dark:text-gray-400'>
                        My projects reflect my journey in exploring various technologies and problem-solving. From web development to experimenting with data, each project is a step in my learning process. I enjoy creating user-friendly solutions that make a positive impact.
                    </p>

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
                </div>
            </section>
            <Footer />
        </>
    )
}