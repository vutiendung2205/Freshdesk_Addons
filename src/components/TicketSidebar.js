// window global
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Box from "@mui/material/Box";
import DashCirclePreloader from "./../assets/Dash-Circle-Preloader.svg";
import illustration_404 from "./../assets/illustration_404.svg";
import * as _ from "lodash";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//
// import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Accordion from "react-bootstrap/Accordion";
const TicketSidebar = (props) => {
    const [name, setName] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [informationOrder, setInformationOrder] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [key, setKey] = useState("");
    const [expanded, setExpanded] = useState(false);

    const handleExpand = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    useEffect(async function () {
        props.client.data.get("contact").then(async (data) => {
            let { name, email } = data.contact;
            setEmailUser(email);
            setName(name);
            await axios.post("https://example.com/api/v1/freshdesk/search", { key: email }).then(function (res) {
                if (!res.data.message) {
                    let data = [...res.data];
                    setInformationOrder(data);
                    setExpanded(data[0].TrackingNumber);
                    setErrorMessage(false);
                } else {
                    setInformationOrder([]);
                    setErrorMessage(true);
                }
            });
            setIsLoading(false);
        });
    }, []);
    function handleOpenLink(link = "https://www.google.com/") {
        window.open(link, "_blank", "");
    }
    if (isLoading) {
        return (
            <Box
                component="img"
                alt="img"
                data-sizes="auto"
                src={DashCirclePreloader}
                className="lazyload blur-up"
                sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "fill",
                    overflow: "hidden",
                }}
            />
        );
    }
    console.log("informationOrder:", informationOrder);
    const handleSearch = async (e) => {
        e.preventDefault();
        if (key != "") {
            await axios.post("https://example.com/api/v1/freshdesk/search", { key: key }).then(function (res) {
                if (!res.data.message || res.data.length > 0) {
                    let data = [...res.data];
                    setErrorMessage(false);
                    setInformationOrder(data);
                    setKey("");
                } else {
                    setInformationOrder([]);
                    setErrorMessage(true);
                }
            });
        }
    };
    const handleChange = (e) => {
        setKey(e.target.value);
    };
    return (
        <React.Fragment>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSearch}
            >
                <TextField label="Search..." variant="standard" value={key} onChange={handleChange} />
            </Box>

            {informationOrder.map((info, index) => {
                return (
                    <Accordion key={index} style={{ padding: 0 }} expanded={expanded === info.TrackingNumber} onChange={handleExpand(info.TrackingNumber)}>
                        /*{" "}
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={info.TrackingNumber} id={"category" + info.TrackingNumber} style={{ padding: 0 }}>
                            <Typography>
                                <span style={{ paddingRight: "10px" }}>{info.OrderName}</span>
                                <span>{info.PaymentGateway}</span>
                            </Typography>
                        </AccordionSummary>{" "}
                        */
                        <AccordionDetails style={{ padding: 0 }}>
                            <div>
                                <div style={{ fontSize: "12px", color: "#6f7c87" }}>Order Link:</div>
                                <div style={{ fontWeight: 500, paddingBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                                    {/* <p style={{ overflowWrap: "anywhere", fontSize: "14px" }}>{info.orderLink}</p> */}
                                    <Button onClick={() => handleOpenLink(info.orderLink)}>Click</Button>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: "12px", color: "#6f7c87" }}>Customer:</div>
                                <div style={{ fontWeight: 500, paddingBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ overflowWrap: "anywhere", fontSize: "14px" }}>{info.Name}</p>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: "12px", color: "#6f7c87" }}>Email:</div>
                                <div style={{ fontWeight: 500, paddingBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ overflowWrap: "anywhere", fontSize: "14px" }}>{info.Email}</p>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: "12px", color: "#6f7c87" }}>Date of Order:</div>
                                <div style={{ fontWeight: 500, paddingBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ overflowWrap: "anywhere", fontSize: "14px" }}>{new Date(info.dateOfOrder.slice(0, info.dateOfOrder.lastIndexOf("-"))).toLocaleString()}</p>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: "12px", color: "#6f7c87" }}>VietNam time:</div>
                                <div style={{ fontWeight: 500, paddingBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ overflowWrap: "anywhere", fontSize: "14px" }}>{new Date(new Date(info.dateOfOrder).valueOf() + 7 * 60 * 60 * 1000).toLocaleString()}</p>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: "12px", color: "#6f7c87" }}>Nepal time:</div>
                                <div style={{ fontWeight: 500, paddingBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ overflowWrap: "anywhere", fontSize: "14px" }}>{new Date(new Date(info.dateOfOrder).valueOf() + 5.45 * 60 * 60 * 1000).toLocaleString("ne-NP")}</p>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: "12px", color: "#6f7c87" }}>Tracking/TrackingLink:</div>
                                <div style={{ fontWeight: 500, paddingBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ overflowWrap: "anywhere", fontSize: "14px" }}>{info.TrackingLink}</p>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: "12px", color: "#6f7c87" }}>Status:</div>
                                <div style={{ fontWeight: 500, paddingBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ overflowWrap: "anywhere", fontSize: "14px" }}>{info.TrackingStatus}</p>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: "12px", color: "#6f7c87" }}>Address:</div>
                                <div style={{ fontWeight: 500, paddingBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <p style={{ overflowWrap: "anywhere", fontSize: "14px" }}>{info.Address}</p>
                                </div>
                            </div>
                            <div style={{ marginBottom: 30 }}>
                                <div style={{ fontSize: "12px", color: "#6f7c87" }}>TransactionId:</div>
                                <div style={{ fontWeight: 500, paddingBottom: "10px" }}>
                                    {info.transaction_id.map((transId, i) => {
                                        return (
                                            <p key={i} style={{ overflowWrap: "anywhere", fontSize: "14px", overflowWrap: "anywhere" }}>
                                                {transId}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </React.Fragment>
    );
};

TicketSidebar.propTypes = {
    client: PropTypes.object,
};
export default TicketSidebar;
