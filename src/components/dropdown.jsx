import {useState} from "react";
import PropTypes from 'prop-types';
import arrowDownIcon from '../assets/images/icons/arrow-down.svg';

const Dropdown = ({title, infos}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className={isOpen ? "dropdown-header open" : "dropdown-header"} onClick={() => setIsOpen(!isOpen)}>
                <p className="dropdown-header-title">{ title }</p>
                <img className="dropdown-header-icon" src={arrowDownIcon} alt="Icon flèche vers le bas"/>
            </div>
            <div className="dropdown-content">
                { infos instanceof Object
                    ? <ul>{infos.map((info, i) => <li key={info + '-' + i}>{info}</li>)}</ul>
                    : <p>{infos}</p>
                }
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    infos: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
}

export default Dropdown;