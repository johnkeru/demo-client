import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { indigo } from '@mui/material/colors';

const ListOfUsers = ({ users }) => {
    return (
        <Box xs={12} md={6} padding={2} sx={{ background: indigo[500], color: 'white' }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Contacts
            </Typography>
            <Box>
                <List dense={true}>
                    {
                        users.map(user => (
                            <ListItem key={user.id}>
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary={user.username} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Box>
    )
}

export default ListOfUsers
