import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDriversDetail } from "../../Redux/action";
import { useEffect } from "react";

const Detail =  () => {

    const dispatch = useDispatch()
    const {id} = useParams()

    const characterDetail = useSelector(state=> state.characterDetail)
    

    useEffect(() => {
        dispatch(getDriversDetail(id))
  },[id])
    return(
    <div>
        <h1>Este es el detalle</h1>
        
    </div>
 )
}
export default Detail;