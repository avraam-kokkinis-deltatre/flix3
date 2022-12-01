import MovieThumb from "../../components/MovieThumb/MovieThumb";
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";


const Home = () => {

    const keyLeft = 37
    const keyUp = 38
    const keyRight = 39
    const keyDown = 40

    useEffect(() => {
        // Update the document title using the browser API
        document.getElementById('1').querySelectorAll('a')[0].focus();



        document.addEventListener("keydown", function(event) {
            // console.log(event.which);

            const currentCategoryID = document.activeElement.closest('div').id;
            const currentIDNumbered = Number(currentCategoryID)

            const nextCategory = (currentIDNumbered+1).toString()

            const prevCategory = (currentIDNumbered-1).toString()


            const currentActiveElement = document.activeElement;



            const checkKey = (e) => {

                e = e || window.event;

                if (e.keyCode == keyUp) {
                    // up arrow
                    if (prevCategory > 0) {
                        document.getElementById(prevCategory).querySelectorAll('a')[0].focus();
                    }

                }
                else if (e.keyCode == keyDown) {
                    // down arrow
                        document.getElementById(nextCategory).querySelectorAll('a')[0].focus();


                }
                else if (e.keyCode == keyLeft) {
                    // left arrow
                    document.activeElement.previousSibling.focus();

                }
                else if (e.keyCode == keyRight) {
                    // right arrow
                    document.activeElement.nextSibling.focus();

                }

            }

            document.onkeydown = checkKey;


        })


    });







    return (

        <>

        <header className="fixed left-0 top-0 z-50 bg-black p-5 min-w-full">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>


        <div className="mt-20 row categories">
            <h2 className="text-4xl font-bold">Category 1:</h2>

            <div id="1" className="category row__inner">
                <MovieThumb title="Title1" src="https://picsum.photos/300/500"/>
                <MovieThumb title="Title2" src="https://picsum.photos/300/501"/>
                <MovieThumb title="Title3" src="https://picsum.photos/300/502"/>
                <MovieThumb title="Title4" src="https://picsum.photos/300/503"/>
                <MovieThumb title="Title5" src="https://picsum.photos/300/504"/>
                <MovieThumb title="Title6" src="https://picsum.photos/300/505"/>
                <MovieThumb title="Title7" src="https://picsum.photos/300/506"/>
                <MovieThumb title="Title8" src="https://picsum.photos/300/507"/>
            </div>

            <hr className="mb-10"/>

            <h2 className="text-4xl font-bold">Category 2:</h2>

            <div id="2" className="category row__inner">
                <MovieThumb title="Title9" src="https://picsum.photos/300/508"/>
                <MovieThumb title="Title10" src="https://picsum.photos/300/509"/>
                <MovieThumb title="Title11" src="https://picsum.photos/300/512"/>
                <MovieThumb title="Title12" src="https://picsum.photos/300/513"/>
                <MovieThumb title="Title13" src="https://picsum.photos/300/514"/>
                <MovieThumb title="Title14" src="https://picsum.photos/300/515"/>
                <MovieThumb title="Title15" src="https://picsum.photos/300/516"/>
                <MovieThumb title="Title16" src="https://picsum.photos/300/517"/>
            </div>

            <hr className="mb-10"/>

            <h2 className="text-4xl font-bold">Category 3:</h2>

            <div id="3" className="category row__inner">
                <MovieThumb title="Title17" src="https://picsum.photos/300/518"/>
                <MovieThumb title="Title18" src="https://picsum.photos/300/519"/>
                <MovieThumb title="Title19" src="https://picsum.photos/300/522"/>
                <MovieThumb title="Title20" src="https://picsum.photos/300/523"/>
                <MovieThumb title="Title21" src="https://picsum.photos/300/524"/>
                <MovieThumb title="Title22" src="https://picsum.photos/300/525"/>
                <MovieThumb title="Title23" src="https://picsum.photos/300/526"/>
                <MovieThumb title="Title24" src="https://picsum.photos/300/527"/>
            </div>
        </div>

            </>
    )
}

export default Home;