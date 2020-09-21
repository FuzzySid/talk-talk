import React,{useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function Toast({setShowToast,message}) {
  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  useEffect(()=>{
    setTimeout(()=>{
      setState({...state,open:false})
      setShowToast(false)
    },3000)
  },[])

  return (
    <div>
      
      <Snackbar
        anchorOrigin={{ vertical:"bottom", horizontal:"right"}}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
}