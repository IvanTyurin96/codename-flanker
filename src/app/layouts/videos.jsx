const Videos = () => {
  return (
    <>
      <div className="pt-3 pb-3">
        <div className="video-embedded">
          <iframe
            src="https://www.youtube.com/embed/ld5KpBovbpQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </div>
      </div>
    </>
  );
};

export default Videos;
