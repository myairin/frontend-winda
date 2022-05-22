import './button.css';

export default function ButtonText({tes, tesClick}) {
    return (
        <button onClick={tesClick}>{tes}</button>
    )
};