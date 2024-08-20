/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export const text = [`Hello everyone, I am Karma Wangchuk, a 21 year old student of Gyalpozhing College of IT, Bhutan. I specialize in blockchain development along side front end frameworks like react.js.`]

export function AboutContent({ aboutToggle }) {
    const [typing] = useTypewriter({
        words: text
    })
    return (
        <>
            <p ClassName="text-2xl">About Me👇</p>
            <p className='whitespace-pre-line mt-2 leading-6'>
                {aboutToggle ? typing : 'See you 👋'}
                <Cursor />
            </p>
        </>
    )
}