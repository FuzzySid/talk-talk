import React,{useState,useEffect} from 'react'
import './AddChannel.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {db} from './../firebase.config';
import Toast from './ui/Toast';

export const AddChannel = () => {
    const [showModal,setShowModal]=useState(false)
    const [channel,setChannel]=useState('')
    const [showToast,setShowToast]=useState(false)
    const addChannel=()=>{
        setShowToast(true)
        if(channel){
            db.collection('Rooms').add({
                name:channel
            })
            setChannel('')
            handleClose()
        }
    }
    const handleClose=()=>setShowModal(false);

    return (
        <div className="addChannel">
            { showToast && <Toast setShowToast={setShowToast} message={`Created nsew channel`} /> }
            <Button onClick={()=>setShowModal(true)} variant="contained"  color="secondary"><strong>Add Channel +</strong></Button>
            <Dialog  onClose={handleClose} open={showModal} aria-labelledby="simple-dialog-title" >
            <DialogTitle id="simple-dialog-title">Add a New Channel</DialogTitle>
            <DialogContent>
                <DialogContentText id="dialog-content">
                    This will create a new channel for talking to people. Enter the name of channel down below
                </DialogContentText>
                <TextField
                    onChange={(e)=>setChannel(e.target.value)}
                    autoFocus
                    color="secondary"
                    margin="dense"
                    id="name"
                    label="Channel Name"
                    color="secondary"
                    type="email"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={addChannel} color="secondary">
                        Create
                    </Button>
                    </DialogActions>
            </Dialog>
        </div>
    )
}
