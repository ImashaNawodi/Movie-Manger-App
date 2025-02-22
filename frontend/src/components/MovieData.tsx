import MovieDataFormRow from "./MovieDataFormRow";
import MovieSection from "./MovieSection";

const MetaData = () => {
  return (
    <MovieSection title="Movie Data">
      <div className="h-64">
        <form>
          <fieldset>
            <MovieDataFormRow title="Name">
              <input type="text" className=" movie-data-input" />
            </MovieDataFormRow>

            <MovieDataFormRow title="Studio">
              <select>
                <option>Option1</option>
                <option>Option1</option>
                <option>Option1</option>
                <option>Option1</option>
                <option>Option1</option>
              </select>
            </MovieDataFormRow>

            <MovieDataFormRow title="Series">
              <select>
                <option>Option1</option>
                <option>Option1</option>
                <option>Option1</option>
                <option>Option1</option>
                <option>Option1</option>
              </select>
            </MovieDataFormRow>

            <MovieDataFormRow title="Series #">
              <input className="movie-data-input" type="text" />
            </MovieDataFormRow>

            <div className="flex my-2">
              <button type="submit" className="movie-data-button bg-red-700">Update</button>
              <button type="submit" className="movie-data-button bg-green-700">Remove</button>
            </div>
          </fieldset>
        </form>
      </div>
    </MovieSection>
  );
};

export default MetaData;
