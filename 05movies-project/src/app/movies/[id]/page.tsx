interface IMovieParams {
  params: {
    id: string;
  };
}

const MovieDetails = ({ params }: IMovieParams) => {
  return <div>MovieDetails</div>;
};

export default MovieDetails;
