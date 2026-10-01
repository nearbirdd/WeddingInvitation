import "./location.scss"

function Location() {

    const showMapClick = () => {
        window.open(`https://yandex.ru/maps/org/las_vegas/1072212452/?ll=41.921401%2C44.992142&source=serp_navig&z=17.08`, 
            `_blank`,
        `noopener,noreferrer`
    )
    }

    return (

        <div className="locationWrapper">
            <h2 className="location">Локация</h2>
            <p className="restaurant cityStreetAndAdress">Ресторан LasVegas</p>
            <p className="cityStreet cityStreetAndAdress">г.Ставрополь ул.Черниговская 2</p>
            <img src="./public/images/locationFirstPhoto.webp" alt="" className="locationFirstPhoto" />
            <a
                className="showLocationMap"
                onClick={showMapClick}
            >
                показать на карте
            </a>
        </div>
    )
}

export default Location