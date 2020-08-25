import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {titlePhoto, rating, firstName, lastName, handle, friendOfCount, rank} = props.user;
    const handleAdd = props.handleAdd;
    const handleFirstChar = handle[0];
    const handleRest = handle.slice(1, handle.lenght);
    const firstCharstyle = {
        color: 'red'
    }
    if(rank === "legendary grandmaster") firstCharstyle.color = 'black';
    return (
        <div className="card">
            <div className="image">
                <img src={titlePhoto} alt=""/>
            </div>
            <div className="description">
                <table>
                    <tbody>
                        <tr>
                            <td><h2>Name:</h2></td>
                            <td><h2>{firstName} {lastName}</h2></td>
                        </tr>
                        <tr>
                            <td><h3>Handle:</h3></td>
                            <td><h3 className="handle">
                                <span style={firstCharstyle}>{handleFirstChar}</span>
                                {handleRest}
                                </h3></td>
                        </tr>
                        <tr>
                            <td><h3>Rating:</h3></td>
                            <td><h3>{rating}</h3></td>
                        </tr>
                        <tr>
                            <td><h4>Number of friends:</h4></td>
                            <td><h4>{friendOfCount}</h4></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => handleAdd(props.user)}>
                    <FontAwesomeIcon icon={faPlus} /> Add
                </button>
            </div>
        </div>
    );
};

export default Card;