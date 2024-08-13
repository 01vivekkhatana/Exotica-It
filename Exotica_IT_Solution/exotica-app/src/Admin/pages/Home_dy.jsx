import React, { useEffect, useRef, useState } from 'react';
import Sidebar from "../components/Sidebar";
import ListIcon from '@mui/icons-material/List';
import $ from 'jquery';

function Home_dynamic() {
    const navigationRef = useRef(null);
    const mainRef = useRef(null);
    const toggleRef = useRef(null);

    useEffect(() => {
        const listItems = $(navigationRef.current).find('li');
        listItems.on('mouseover', function () {
            listItems.removeClass('hovered');
            $(this).addClass('hovered');
        });

        $(toggleRef.current).on('click', () => {
            $(navigationRef.current).toggleClass('active');
            $(mainRef.current).toggleClass('active');
        });

        return () => {
            listItems.off('mouseover');
            $(toggleRef.current).off('click');
        };
    }, []);

    const [heroData, setHeroData] = useState({
        heading: '',
        subheading: '',
        buttonText: '',
        image: '',
    });

    const [imageFiles, setImageFiles] = useState(new Array(7).fill(null)); // Initialize with 7 slots
    const [removedImages, setRemovedImages] = useState([]);

    useEffect(() => {
        async function fetchHeroData() {
            try {
                const response = await fetch('http://localhost:5000/api/hero');
                const data = await response.json();

                setHeroData({
                    heading: data.heading || '',
                    subheading: data.subheading || '',
                    buttonText: data.buttonText || '',
                    image: data.image || '',
                });

                // Assume data.images is an array of URLs
                if (data.images) {
                    const initialImages = new Array(7).fill(null);
                    data.images.forEach((url, index) => {
                        if (index < 7) initialImages[index] = url;
                    });
                    setImageFiles(initialImages);
                }
            } catch (error) {
                console.error('Error fetching hero data:', error);
            }
        }
        fetchHeroData();
    }, []);

    const handleChange = (e) => {
        setHeroData({ ...heroData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (index, e) => {
        const newFiles = [...imageFiles];
        newFiles[index] = e.target.files[0];
        setImageFiles(newFiles);
    };

    const handleRemoveImage = (index) => {
        const newFiles = [...imageFiles];
        if (newFiles[index] && typeof newFiles[index] === 'string') {
            // Add to removedImages if it's an existing URL
            setRemovedImages([...removedImages, newFiles[index]]);
        }
        newFiles[index] = null; // Clear the slot
        setImageFiles(newFiles);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('heading', heroData.heading);
        formData.append('subheading', heroData.subheading);
        formData.append('buttonText', heroData.buttonText);
        formData.append('image', heroData.image);

        imageFiles.forEach((file) => {
            if (file) {
                if (typeof file === 'string') {
                    // Existing image URL
                    formData.append('images', file);
                } else {
                    // New image file
                    formData.append('images', file);
                }
            }
        });

        removedImages.forEach((image) => {
            formData.append('removedImages', image);
        });

        try {
            const response = await fetch('http://localhost:5000/api/hero', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                alert('Hero data saved successfully!');
                setHeroData({
                    heading: data.heading,
                    subheading: data.subheading,
                    buttonText: data.buttonText,
                    image: data.image,
                });
                setImageFiles(data.images.slice(0, 7)); // Update with latest images
                setRemovedImages([]); // Clear removed images list
            } else {
                console.error('Failed to save hero data');
            }
        } catch (error) {
            console.error('Error posting hero data:', error);
        }
    };

    return (
        <div className="container">
            <Sidebar />
            <div className="main" ref={mainRef}>
                <div className="topbar">
                    <div className="toggle" ref={toggleRef}>
                        <ListIcon />
                    </div>

                    <div className="search">
                        <label>
                            <input type="text" placeholder="Search here" />
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>

                    <div className="user">
                        <img src="techhnology.png" alt="" />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="heading"
                        value={heroData.heading}
                        onChange={handleChange}
                        placeholder="Heading"
                    />
                    <input
                        type="text"
                        name="subheading"
                        value={heroData.subheading}
                        onChange={handleChange}
                        placeholder="Subheading"
                    />
                    <input
                        type="text"
                        name="buttonText"
                        value={heroData.buttonText}
                        onChange={handleChange}
                        placeholder="Button Text"
                    />
                    <input
                        type="text"
                        name="image"
                        value={heroData.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                    />
                    <div>
                        {imageFiles.map((file, index) => (
                            <div key={index} style={{ marginTop: '10px' }}>
                                {file && (
                                    <img
                                        src={typeof file === 'string' ? file : URL.createObjectURL(file)}
                                        alt={`Image ${index}`}
                                        width="100"
                                    />
                                )}
                                <input
                                    type="file"
                                    onChange={(e) => handleImageChange(index, e)}
                                />
                                {file && (
                                    <button type="button" onClick={() => handleRemoveImage(index)}>Remove Image</button>
                                )}
                            </div>
                        ))}
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}

export default Home_dynamic;
