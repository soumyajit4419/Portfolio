import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineFork } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';



export default function SpeedDialTooltipOpen({ info }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const actions = [
    { icon: <BsGithub />, name: "Repo URL", onClick: openPage(info.url) },
    { icon:  <AiOutlineFork />, name: 'Copy', onClick: () => { window.open("https://saahild.com", "_blank")} },
    { icon: <SaveIcon />, name: 'Save' },
    { icon:  <CgWebsite />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  return (
    <Box sx={{ height: 60, transform: 'translateZ(0px)', flexGrow: -1, textAlign: 'center', alignContent: 'center' }}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 0, left: 0  }}
        icon={<BsGithub />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={'right'}
        FabProps={{
            sx: {
                bgcolor: "#623686",
                '&:hover': {
                    bgcolor: '#6d20c5d7',
                  }
            }
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            // tooltipTitle={action.name}
            // tooltipOpen
            sx={{ backgroundColor: "#6d20c5d7", color: "#fff"}}
            onClick={() => {
                action.onClick ? action.onClick() : null;
                handleClose();
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}