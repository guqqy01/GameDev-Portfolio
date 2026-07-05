import {useState } from 'react';

type VideoItem = {
  videoID: string;
  title: string;
  caption?: string;
};

function VideoGrid({ videos }: { videos: VideoItem[] }){
    const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

    const handleOpenVideo = (video: VideoItem) => {
        setActiveVideo(video);
    };

    const handleCloseVideo = () => {
        setActiveVideo(null);
    };

    return (
        <>
            <div className = "section-media-grid">
                {
                    videos.map(
                        (video) => 
                        (
                            <figure className = "section-image-card" key = {video.videoID}>
                                <button 
                                    type = "button"
                                    className = "section-image-button video-thumb-button"
                                    onClick = {() => handleOpenVideo(video)}
                                >
                                    <img
                                        src = {`https://img.youtube.com/vi/${video.videoID}/hqdefault.jpg`}
                                        alt = {video.title}
                                    />
                                    <span className = "video-play-icon" aria-hidden = "true">▶</span>
                                </button>
                                {video.caption && <figcaption>{video.caption}</figcaption>}
                            </figure>
                        )
                    )
                }
            </div>

            {
                activeVideo && (
                    <div className = "image-lightbox" onClick = {handleCloseVideo}>
                        <div className = "image-lightbox-inner" onClick = {(event) => event.stopPropagation()}>
                            <button className = "image-lightbox-close" onClick = {handleCloseVideo} aria-label = "Close video preview">
                                x
                            </button>
                            <div className = "video-lightbox-frame-wrapper">
                                <iframe
                                    src={`https://www.youtube.com/embed/${activeVideo.videoID}?autoplay=1`}
                                    title={activeVideo.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            {activeVideo.caption && (
                                <div className = "video-lightbox-caption">{activeVideo.caption}</div>
                            )}
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default VideoGrid;