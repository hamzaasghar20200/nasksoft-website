import React, { useEffect, useState } from 'react';
import { useData } from '../Context/Context_Provider';
import { useParams } from 'react-router-dom';


function Development_quote() {
    const params = useParams();
    const { individualService } = useData();
    const [quote1Opacity, setQuote1Opacity] = useState(1);

    useEffect(() => {
        // Function to handle the scroll event
        function handleScroll() {
            // Get the current scroll position
            const scrollY = window.scrollY;

            // Check if scrollY is greater than or equal to 3100
            if (scrollY >= 2300) {
                // Set opacity to 0 when scrollY reaches 3100
                setQuote1Opacity(0);
            } else {
                // Set opacity back to 1 if scrollY is less than 3100
                setQuote1Opacity(1);
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
        <div className='development_quote' style={{ opacity: quote1Opacity }}>
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

export default Development_quote;
