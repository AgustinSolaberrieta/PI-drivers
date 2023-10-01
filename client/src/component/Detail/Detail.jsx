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
import { getDriversDetail } from "../../Redux/action";
import { useEffect } from "react";

const Detail =  () => {

    const dispatch = useDispatch()
   const characterDetail = useSelector(state=> state.driversDetail) 
    const {id} = useParams()

    console.log(characterDetail);
    

    useEffect(() => {
        dispatch(getDriversDetail(id))
  },[id])
    return(
    <div>
        <h1>Este es el detalle</h1>
        <p className="p">{characterDetail.name}</p>
        <img src={image}  alt={name} style={{ width: '250px', height: '200px' }}>holl</img> // Cambia '100px' a la dimensión deseada/>
              <h2 >{characterDetail?.id}</h2>
        
    </div>
 )
}


export default Detail;