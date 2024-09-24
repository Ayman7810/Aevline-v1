import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DeleteAddress } from '../../redux/action/addressAction';
import notify from '../NotifcationHook';
const UserDeleteAddressHook = (id) => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const showModel = () => {
      setShow(true);
    };
  
    const onDelete = async () => {
      await dispatch(DeleteAddress(id));
      setShow(false);
      notify("تم حذف العنوان بنجاح", "success");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    };
  
    return [onDelete, showModel, show, handleClose];
}

export default UserDeleteAddressHook
