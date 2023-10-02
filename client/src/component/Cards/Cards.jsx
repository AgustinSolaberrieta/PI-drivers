import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from "../../Redux/action";
import Card from "../Card/Card";

const Cards = () => {
    const dispatch = useDispatch();
    const drivers = useSelector(state => state.drivers.data);

    useEffect(() => {
        dispatch(getDrivers());
    }, []);

    return (
        <div>
            <h1>Drivers</h1>
             {drivers ? (
            drivers.map((driver) => (
                <Card
                    key={driver.id}
                    id={driver.id}
                    name={driver.name}
                    surname={driver.surname}
                    image={driver.image}
                    teams={driver.teams}
                />
            ))
        ) : (
            <p>Cargando conductores...</p>
        )}
        </div>
    );
};

export default Cards;