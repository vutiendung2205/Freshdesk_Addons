import React, { useState, useEffect } from "react";
import "./App.css";
import TicketSidebar from "./components/TicketSidebar";
import ModalOne from "./components/ModalOne";

const App = () => {
    const [loaded, setLoaded] = useState(false);
    const [child, setChild] = useState(<h3>App is loading</h3>);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.freshdev.io/fdk/2.0/assets/fresh_client.js";
        script.addEventListener("load", () => setLoaded(true));
        script.defer = true;
        document.head.appendChild(script);
    }, []);

    useEffect(() => {
        if (!loaded) return;
        app.initialized().then((client) => {
            client.instance.context().then(function (data) {
                let location = data.location;

                if (location === "ticket_sidebar") {
                    client.instance.resize({ height: "700px" });
                    setChild(<TicketSidebar client={client} />);
                }
                if (location === "full_page_app") {
                    setChild(<ModalOne client={client} />);
                }
            });
        });
    }, [loaded]);

    return <React.Fragment>{child}</React.Fragment>;
};

export default App;
