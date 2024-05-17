'use client';

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react";

export default function AboutPage() {
    const router = useRouter();
    const pathName = usePathname();

    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");

    const checkPassword = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/about", {
            method: "POST",
            body: JSON.stringify({secret: input})
        });
        const fetchData = await response.json();
        setMessage(fetchData.message);
    }

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
                <TextField label="Password" variant="outlined" value={input} onChange={(e) => {setInput(e.target.value);}}/>
                <Button onClick={checkPassword}>Submit</Button>
                <Typography>{message}</Typography>
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
