import * as React from 'react';
import Modal from '@mui/material/Modal';
import {SummaryDetails} from '../components/inputs/SummaryDetails';

interface ContainerProps {
    open: boolean;
    setOpen: (open: boolean) => void
}

export const DetailsModal: React.FC<ContainerProps> = ({open, setOpen}) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <SummaryDetails maxHeight={false} isModal={true} handleClose={handleClose}/>
                </div>
            </Modal>
        </div>
    );
}
