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

export const AddChannel = () => {
    const [showModal,setShowModal]=useState(false)
    const [channel,setChannel]=useState('')
    const addChannel=()=>{
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
                    margin="dense"
                    id="name"
                    label="Channel Name"
                    type="email"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={addChannel} color="primary">
                        Create
                    </Button>
                    </DialogActions>
            </Dialog>
        </div>
    )
}
