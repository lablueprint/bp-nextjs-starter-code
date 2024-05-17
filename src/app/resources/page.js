import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

// TODO: Remove global data
const resources = [
    {
        id: 1,
        title: "Building a website"
    },
    {
        id: 2,
        title: "Fixing a bug"
    },
    {
        id: 3,
        title: "Asking for help"
    }
]

export default function ResourcesPage() {
    return(
        <Container>
            <Box>
                <Typography variant="h1">Resources Page</Typography>
            </Box>
            <Box>
                {
                    resources.map((resource) => (
                        <Box key={resource.id}>
                            <Box>
                                <Typography>Resource: {resource.title}</Typography>
                                <Box>
                                    <Link href={`/resources/${resource.title}`}>Learn More</Link>
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Container>
    )   
}