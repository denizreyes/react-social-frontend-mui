import React, {useState} from 'react'
import {
  Fab, 
  Tooltip,
  styled,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Grid,
  MenuItem,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Add as AddIcon
} from '@mui/icons-material';

const ContentFab= styled('div')(({theme}) => ({
  position: 'fixed',
  bottom: 20,
  left: 'calc(100vw - 90px)',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    left: 'calc(100vw - 58px)',
    bottom: 10,
    '& .fab': {
      width: 42,
      height: 42
    }
  }
}));

const Form= styled('form')({

});

const Add = () => {
  const [open, setOpen]= useState(false);
  const [openAlert, setOpenAlert]= useState(false);
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
  const handleSubmit= () => {
    setOpen(false);
    setOpenAlert(true);
  }
  return (
    <>
      <ContentFab>
        <Tooltip title="Add" arial-label="add" placement="right" onClick={() => setOpen(true)}>
          <Fab color="secondary" className="fab">
            <AddIcon/>
          </Fab>
        </Tooltip>
      </ContentFab>
      <Dialog
        scroll="body"
        s
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>
          Titulo
        </DialogTitle>
        <DialogContent dividers>
          <Form autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth
                  id="titulo" 
                  label="Titulo" 
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline
                  id="descripcion"
                  label="Descripción"
                  variant="standard"
                  rows={4}            
                />
              </Grid>
              <Grid item xs={12}>
                <TextField select fullWidth
                  label="Visible" 
                  value="publico" 
                  variant="standard"
                >
                  <MenuItem value="publico">Público</MenuItem>
                  <MenuItem value="privado">Privado</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Quien puede comentar?</FormLabel>
                  <RadioGroup row defaultValue="todos" name="comentar">
                    <FormControlLabel value="todos" control={<Radio/>} size="small" label="Todos"/>
                    <FormControlLabel value="amigos" control={<Radio/>} size="small" label="Amigos"/>
                    <FormControlLabel value="nadie" control={<Radio/>} size="small" label="Nadie"/>
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Form>
        </DialogContent>
        <DialogActions sx={{justifyContent: 'space-between'}}>
          <Button onClick={() => setOpen(false)}>Cerrar</Button>
          <Button onClick={handleSubmit} color="secondary">Guardar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openAlert}
        onClose={handleCloseAlert}
        autoHideDuration={3000}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      >
        <Alert variant="filled" severity="success" onClose={handleCloseAlert}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Add
