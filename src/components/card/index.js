import './index.css';

function Card(props) {
    return (
        <div className='card'>
            <p>{props.title}</p>
            <img src={props.image} />
        </div>
    );
}

export default Card;
