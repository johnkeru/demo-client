import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useUser } from '../../contexts/UserContext';

const ListOfUsers = ({ users, setSelectedUser }) => {
    const { logout } = useUser()
    return (
        <Box width='30%' padding={2} sx={{ background: blue[700], color: 'white' }}>

            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Contacts
            </Typography>
            <Box sx={{ overflowY: 'auto', height: '80%' }}>
                <List  >
                    {
                        users.map(user => (
                            <ListItem onClick={() => setSelectedUser(user)} key={user._id} sx={{ background: 'white', color: 'black', mb: 1, borderRadius: 2, cursor: 'pointer' }}>
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary={user.username} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>

            <Button onClick={logout} variant='contained' fullWidth color='warning'>Logout</Button>
        </Box>
    )
}

export default ListOfUsers
