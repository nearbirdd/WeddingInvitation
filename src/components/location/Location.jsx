import "./location.scss"

function Location() {

    return (

        <div className="locationWrapper">
            <h2 className="location">Локация</h2>
            <p className="restaurant cityStreet">Ресторан LasVegas</p>
            <p className="cityStreet">г.Ставрополь ул.Черниговская 2</p>
            <img src="./public/images/locationFirstPhoto.webp" alt="" className="locationFirstPhoto" />
            <button className="showLocationMap">показать на карте</button>
        </div>
    )
}

export default Location