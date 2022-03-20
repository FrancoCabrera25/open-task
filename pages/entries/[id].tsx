import { Card, Grid, CardHeader, CardContent, TextField, CardActions, Button } from '@mui/material';
import { FC } from "react"
import Layout from '../../components/layouts/Layout';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const EntryPage: FC = () => {
  return (
    <Layout>
        <Grid container justifyContent='center'
         sx = {{ marginTop: 3 }}
        >
            <Grid item xs={ 12 } sm={ 8 } md={ 6 } lg= { 4 }>
                <Card>
                    <CardHeader 
                    title= "Tarea: "
                    subheader = { `Creada hace`}
                    />
                <CardContent>
                    <TextField  sx= {{ marginTop: 2 , marginBottom: 1 }}
                     fullWidth
                     placeholder='Descripción'
                     autoFocus
                     multiline
                     label= "Descripción"
                    />
                </CardContent>

                <CardActions>
                    <Button
                    startIcon = { <SaveOutlinedIcon />}
                    variant = "contained"
                    fullWidth
                    >
                    Guardar        
                    </Button>
                </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Layout>
  )
}

export default EntryPage