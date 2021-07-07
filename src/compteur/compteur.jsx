import PropTypes from 'prop-types';
import { useState } from 'react';

const Compteur = (props) => {
    const {incr} = props;
    const [valeur, setValeur] = useState(0);

    const incrementCpt = () => {
        setValeur(previous => previous + incr)
    };

    const resetCpt = () => {
        setValeur(0);
    }

    return (
        <div>
            <h2>Valeur du compteur : {valeur}</h2>
            <button onClick={incrementCpt}>Incrémenter</button>
            {(valeur > 0) && (
                <button onClick={resetCpt}>Remise à Zero</button>
            )}            
        </div>
    );
}

Compteur.defaultProps = {
    incr: 1
}

Compteur.propTypes  = {
    incr: PropTypes.number
}

export default Compteur;