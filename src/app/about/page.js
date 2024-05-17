'use client';

import { Box, Button, Container, Typography } from "@mui/material";
import { usePathname, useRouter } from 'next/navigation';

export default function AboutPage() {
    const router = useRouter();
    const pathName = usePathname();

    const navToContact = (e) => {
        e.preventDefault();
        router.push(`${pathName}/contact`);
    };

    return (
        <Container>
            <Box>
                <Typography variant="h1">About Page</Typography>
            </Box>
            <Box>
                <Typography>Find more about our contacts here</Typography>
                <Box>
                    <Button onClick={navToContact} variant="contained" color="primary">
                        Go to contact
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
