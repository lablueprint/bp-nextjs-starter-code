'use client';

import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResourcesPage() {
    const [resources, setResources] = useState([]);

    const getResources = async () => {
        const response = await fetch("api/resources");
        const fetchData = await response.json();
        setResources(fetchData.resources);
    }

    useEffect(() => {
        getResources();
    }, []);

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