import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetDataUser } from "../../redux/action/userDataAction"


const GetDataForUserHook = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        const run = async ()=>{
            await dispatch(GetDataUser())
        }
        run()
    },[dispatch])

    const user = useSelector(state => state.user?.user?.data) || {}
    return [user]
}

export default GetDataForUserHook
