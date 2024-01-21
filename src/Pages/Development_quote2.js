import React, { useEffect, useState } from 'react';
import { useData } from '../Context/Context_Provider';
import { useParams } from 'react-router-dom';


function Development_quote2() {
    const params = useParams();
    const { imag_url, developmentData, getDevelopmentData, getIndividualService, individualService, singleService } = useData()
    const [quote2Opacity, setQuote2Opacity] = useState(0);

    useEffect(() => {
        // Function to handle the scroll event
        function handleScroll() {
            // Get the current scroll position
            const scrollY = window.scrollY;

            // Check if scrollY is greater than or equal to 3100
            if (scrollY >= 2300) {
                // Set opacity to 1 when scrollY reaches 3100
                setQuote2Opacity(1);
            } else {
                // Set opacity back to 0 if scrollY is less than 3100
                setQuote2Opacity(0);
            }
        }

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className='development_quote2' style={{ opacity: quote2Opacity }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='detailContainer'>
                            <h1 style={{ wordWrap: 'break-word' }} dangerouslySetInnerHTML={{ __html: individualService?.secfive_image_desc }}></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Development_quote2;
