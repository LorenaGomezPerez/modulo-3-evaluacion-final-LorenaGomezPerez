import {Link} from 'react-router-dom';

function MovieSceneItem (props) {
    return (
        <Link to={`/movie/${props.task.id}`}>
        <img width="100" height="100" 
            alt={props.task.movie} 
            src={props.task.poster}
            />
            <h4>{props.task.movie}</h4>
            <p>{props.task.quote}</p>
            <p>{props.task.year}</p>
        </Link>
    
    )
}

export default MovieSceneItem;