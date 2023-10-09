import React from 'react';

function CreatorVideoEmbed({ url }) {
    // Ensure url is a string and not empty
    if (typeof url !== 'string' || url.trim() === '') {
        return <p>Invalid video URL.</p>;
    }

    // Helper function to extract Instagram video ID from the URL
    function getInstagramVideoId(url) {
        const matches = url.match(/\/reel\/([A-Za-z0-9_-]+)/);

        if (matches && matches.length > 1) {
            return matches[1];
        } else {
            return null; // Invalid or unsupported URL format
        }
    }

    // Determine the video source and format
    const getSource = (url) => {
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            // YouTube video
            return 'youtube';
        } else if (url.includes('instagram.com')) {
            // Instagram video (Note: Instagram may change its embed methods)
            // return 'instagram';
            // Check if it's an Instagram video or Reel
            if (url.includes('/p/')) {
                return 'instagram';
            } else if (url.includes('/reel/')) {
                return 'instagram-reel';
            } else {
                return 'unsupported-instagram';
            }
        } else if (url.includes('facebook.com')) {
            // Facebook video (Note: Facebook may change its embed methods)
            return 'facebook';
        } else {
            // Unsupported source or direct video link
            return 'direct';
        }
    };

    // Render the video based on its source
    const renderVideo = () => {
        const source = getSource(url);

        switch (source) {
            case 'youtube':
                // Embed YouTube video
                const videoId = getYouTubeVideoId(url);
                return (
                    <iframe
                        width="260"
                        height="150"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allowFullScreen
                        title="YouTube Video"
                    ></iframe>
                );

            case 'instagram':
                // Embed Instagram video
                const instagramVideoId = getInstagramVideoId(url);
                if (instagramVideoId) {
                    return (
                        <iframe
                            src={`https://www.instagram.com/p/${instagramVideoId}/embed`}
                            frameBorder="0"
                            scrolling="no"
                            allowtransparency="true"
                            allowFullScreen
                            title="Instagram Video"
                        ></iframe>
                    );
                } else {
                    return <p>Invalid Instagram video URL.</p>;
                };

            case 'instagram-reel':
                // Embed Instagram Reel
                const instagramReelId = getInstagramVideoId(url);
                if (instagramReelId) {
                    return (
                        <iframe
                            src={`https://www.instagram.com/reel/${instagramReelId}/embed`}
                            frameBorder="0"
                            scrolling="no"
                            width="300"
                            height="250"
                            allowtransparency="true"
                            allowFullScreen
                            title="Instagram Reel"
                        ></iframe>
                    );
                } else {
                    return <p>Invalid Instagram Reel URL.</p>;
                }

            // Other source cases...

            default:
                return <p>Unsupported video source.</p>;
        }
    };

    return (
        <div className="video-embed-container">
            {renderVideo()}
        </div>
    );
}


function getYouTubeVideoId(url) {
    const match = url.match(/[?&]v=([^?&]+)/);
    return match ? match[1] : null;
}

// function getInstagramVideoId(url) {

//     const matches = url.match(/\/p\/([A-Za-z0-9_-]+)/);

//     if (matches && matches.length > 1) {
//         return matches[1];
//     } else {
//         return null;
//     }
// }


export default CreatorVideoEmbed;
