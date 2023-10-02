// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getDriversDetail } from "../../Redux/action";
// import { useEffect } from "react";

// const Detail =  () => {

//     const dispatch = useDispatch()
//     const {id} = useParams()

//     // const characterDetail = useSelector(state=> state.characterDetail.data)
    

//     useEffect(() => {
//         dispatch(getDriversDetail(id))
//   },[])
//     return(
//     <div>
//         <h1>Este es el detalle</h1>
//         {/* { characterDetail.map(({id, nombre,apellido,natinality, imagen, description, dob, teams})=>{
//             return(
//               <h1>{id}/</h1>
//             )
//         })

//         }
//          */}
//     </div>
//  )
// }
// export default Detail;




import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDriversDetail, cleanDetail } from "../../Redux/action";
import { useEffect } from "react";

const Detail = () => {
    console.log("Componente Detail se está renderizando");

    const dispatch = useDispatch();
    const characterDetail = useSelector(state => state.driversDetail);

    const { id } = useParams();

    console.log(characterDetail);

    useEffect(() => {
        dispatch(getDriversDetail(id))
        return dispatch(cleanDetail())
    }, [dispatch, id]);

    return (
        <div>
           
            {characterDetail ? (
                <>
                     
                    <h2>{characterDetail.name} {characterDetail.surname}</h2>
                    <p>{characterDetail.dob}</p>
                    <p>{characterDetail.nationality}</p>
                    
                    <img src={characterDetail.image} ></img>
                    <p>{characterDetail.teams}</p>
                    <p>{characterDetail.description}</p>
                    <p>{characterDetail.id}</p>
                </>
            ) : (
                <p>Cargando detalle...</p>
            )}
        </div>
    )
}

export default Detail;
