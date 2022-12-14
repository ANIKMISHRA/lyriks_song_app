
// component
import SongBar from './SongBar';

const RelatedSongs = ({ isPlaying, handlePauseClick, handlePlayClick, data, activeSong, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-white text-3xl">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      { data?.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId} `}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
