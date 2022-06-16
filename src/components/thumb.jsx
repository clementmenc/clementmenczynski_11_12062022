import PropTypes from 'prop-types';

const Thumb = ({label, imgSrc}) => {
    return (
        <a href="/" className={'thumb'}>
            <img className={'thumb-illustration'} src={imgSrc} alt=""/>
            <p className={'thumb-title'}>{label}</p>
        </a>
    )
}

Thumb.propTypes = {
    label: PropTypes.string,
    imgSrc: PropTypes.string
}

export default Thumb;