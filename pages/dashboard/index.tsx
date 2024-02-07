import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from 'next/image';

function IndexPage() {
  return (
    <Box sx={{
      m: 0,
      p: 0,
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#0f0c29',
    }}>
      <Box sx={{
        display: 'block',
        width: '740px',
        maxHeight: '500px',
        overflow: 'hidden'
      }}
      >
        <Box sx={{ display: 'flex' }}>
          <Box width='50%'>
            <Box sx={{
              display: 'block',
              width: '100%',
              height: '500px',
              backgroundColor: 'white'
            }}>
              <Box mx={3}>
                <Stack textAlign='center' pt={5}>
                  <Typography variant="h6">
                    Bienvenido a Shortify
                  </Typography>
                </Stack>
                <Box
                  textAlign='center'
                  mt={2}
                >
                  <Typography variant="caption" letterSpacing={0.2}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eveniet officia. Vero alias officia exercitationem,
                  </Typography>
                </Box>
                <Box mt={3} textAlign='center'>
                  <Image
                    src='/img/gorrion.jpeg'
                    alt='img-gorrion'
                    width={200}
                    height={200}
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8B297F" fill-opacity="1" d="M0,256L26.7,250.7C53.3,245,107,235,160,213.3C213.3,192,267,160,320,154.7C373.3,149,427,171,480,186.7C533.3,203,587,213,640,229.3C693.3,245,747,267,800,245.3C853.3,224,907,160,960,154.7C1013.3,149,1067,203,1120,197.3C1173.3,192,1227,128,1280,112C1333.3,96,1387,128,1413,144L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width='50%'>
            <Box sx={{
              width: '100%',
              height: '500px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderLeft: '1px solid grey'
            }}
            >
              <Box
                textAlign='center'
                sx={{
                  width: '300px',
                }}
              >
                <Stack>
                  <Typography variant="h6">
                    Inicio de sesión
                  </Typography>
                </Stack>
                <Box mt={3}>
                  <Stack direction='row' alignItems='center' spacing={1}>
                    <AccountCircleIcon />
                    <TextField fullWidth size="small" id="outlined-basic" label="Outlined" variant="outlined" />
                  </Stack>
                </Box>
                <Box mt={2}>
                  <Stack direction='row' alignItems='center' spacing={1}>
                    <HttpsIcon />
                    <TextField fullWidth size="small" id="outlined-basic" label="Outlined" variant="outlined" />
                  </Stack>
                </Box>
                <Box sx={{
                  display: 'flex',
                  mt: 1,
                  justifyContent: 'space-between'
                }}
                >
                  <Box sx={{ ml: 4 }}>
                    <Stack direction='row' alignItems='center' spacing={1}>
                      <RadioButtonCheckedIcon />
                      <Typography variant="caption">Recordar</Typography>
                    </Stack>
                  </Box>
                  <Box>
                    <Typography variant="caption">Olvide mi contraseña</Typography>
                  </Box>
                </Box>
                <Box mt={2}>
                  <Button variant="contained" size="small">
                    Iniciar sesión
                  </Button>
                </Box>
                <Box mt={3}>
                  <Typography variant="body2">Registrarse</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default IndexPage