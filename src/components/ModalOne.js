import React, { useEffect } from "react";
import { Box, Container, Typography } from "@material-ui/core";
export default function ModalOne() {
    // useEffect(() => {
    //     props.client.data.get("loggedInUser").then(function (data) {
    //         const agentName = data.loggedInUser.contact.name;
    //         props.client.interface.trigger("showNotify", {
    //             type: "success",
    //             message: `Hi ${agentName}, Welcome Back!`,
    //         });
    //     });
    // }, []);
    return (
        <Container>
            <Box sx={{ margin: "auto", textAlign: "center", padding: "50px" }}>
                <Typography variant="h3" gutterBottom>
                    Coming Soon!
                </Typography>
                <Typography color="textSecondary">We are currently working hard on this page!</Typography>
            </Box>
        </Container>
    );
}
