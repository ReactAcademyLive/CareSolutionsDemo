function YouTube({ videoID, width = 480, height = 270 }) {
  return (
    <iframe
      title="YouTube video"
      type="text/html"
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoID}`}
      frameBorder="0"
      allowFullScreen
      className="m-4"
    />
  );
}

export default YouTube;
