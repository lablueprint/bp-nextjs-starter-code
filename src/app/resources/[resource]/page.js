import { Box, Container, Typography } from "@mui/material";

export default function ResourcePage({params}) {
    const {resource} = params
    return(
        <Container>
            <Box>
                <Typography variant="h4">{resource}</Typography>
            </Box>
        </Container>
    )
}