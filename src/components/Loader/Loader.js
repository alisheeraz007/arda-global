import './Loader.scss'

function Loader() {
    return (
        <div className='loaderMain'>
            <img src={require('../../assets/companiesimages/logo_transparent_background.png')} />
        </div>
    );
}

export default Loader;
