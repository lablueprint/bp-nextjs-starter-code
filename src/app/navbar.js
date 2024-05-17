import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
	return(
		<Stack direction='row' spacing={2} sx={{justifyContent: "center", alignContent: "center"}}>
			<Link href='/'>
				<Box>
					<Typography>Home</Typography>
				</Box>
			</Link>
            <Link href='/about'>
				<Box>
					<Typography>About</Typography>
				</Box>
			</Link>
            <Link href='/resources'>
				<Box>
					<Typography>Resources</Typography>
				</Box>
			</Link>
		</Stack>
	)
}