import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';


const MoviePlayer = () => {


    const controllerRef = useRef(null);

    useEffect(() => {
        const {
            /** @type {shaka.Player} */ player,
            /** @type {shaka.ui.Overlay} */ ui,
            /** @type {HTMLVideoElement} */ videoElement
        } = controllerRef.current;

        async function loadAsset() {
            // Load an asset.
            await player.load('https://raw.githubusercontent.com/bbc/exoplayer-testing-samples/master/app/src/androidTest/assets/streams/files/bigbuckbunny/bigbuckbunny.mpd');

            // Trigger play.
            await videoElement.play();
        }

        loadAsset();
    }, []);


    const videoStop = () => {
        console.log('aaa')
    }

    return (
        <>

            <header className="fixed left-0 top-0 z-50 bg-black p-5 min-w-full">
                <nav>
                    <ul>
                        <li><Link to="/movie"><i className="fa fa-undo" aria-hidden="true"></i> Return to Title</Link></li>
                    </ul>
                </nav>
            </header>

            <ShakaPlayer src='https://raw.githubusercontent.com/bbc/exoplayer-testing-samples/master/app/src/androidTest/assets/streams/files/bigbuckbunny/bigbuckbunny.mpd' autoPlay ref={controllerRef} />

            <div className="customControls">
                <button onClick={videoStop()}>stop!</button>
            </div>
        </>
    )
}

export default MoviePlayer;