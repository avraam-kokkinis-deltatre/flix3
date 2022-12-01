import {Link} from "react-router-dom";
import {BsFillPlayCircleFill} from 'react-icons/bs';

const MovieInner = () => {


    return (

        <>

        <header className="fixed left-0 top-0 z-50 bg-black p-5 min-w-full">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>


        <div className="grid grid-rows-1 grid-flow-col gap-9">
            <Link to="/moviePlayer">
                <div className="wrapper relative video-thumbnail">
                    <img src="https://picsum.photos/600/508" className="w-full aspect-video" />
                </div>
            </Link>
            <div>
                <h2 className="text-4xl mb-5">Title</h2>
                <p className="text-left">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                    Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                    and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC.
                </p>

                <Link to="/moviePlayer">
                    <button className="mt-10 gap-5 flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded">
                        <BsFillPlayCircleFill/> Play
                    </button>
                </Link>

            </div>
        </div>

        </>

    )
}

export default MovieInner;