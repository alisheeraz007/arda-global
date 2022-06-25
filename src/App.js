import React, { useEffect, useState } from "react";

// Pages
import Index from "views/Index.js";
import About from "views/About.js";
import Success from "views/Success.js";
import Mission from "views/Pages/Mission.js";
import OurPartners from "views/Pages/OurPartners.js";
import Enqueries from "views/Pages/BusinessEnqueries.js";

// Sections
import Technology from "views/Pages/Technology.js";
import Consulting from "views/Pages/Consulting.js";
import Services from "views/Pages/Services.js";
import Hardware from "views/Pages/Hardware.js";
import ContactUsPage from "views/Pages/ContactUs";
import Careers from "views/Pages/Careers";
import Loader from "components/Loader/Loader";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";


export default function App() {
    let [loader, setLoader] = useState(true)

    useEffect(() => {
        document.body.classList.toggle("index-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("index-page");
        };
    }, []);


    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])

    return (
        <div>
            <Switch>
                {/* Index Page */}
                <Route exact path="/" render={() => <Index />} />

                {/* Technology Page */}
                <Route path="/technology" render={() => <Technology />} />
                {/* Consulting Page */}
                <Route path="/consulting" render={() => <Consulting />} />
                {/* Services Page */}
                <Route path="/services" render={() => <Services />} />
                {/* Hardware Page */}
                <Route path="/hardware" render={() => <Hardware />} />

                {/* Mission Page */}
                <Route path="/mission" render={() => <Mission />} />
                {/* Partners Page */}
                <Route path="/partners" render={() => <OurPartners />} />
                {/* Business Enqueries Page */}
                <Route path="/enqueries" render={() => <Enqueries />} />

                {/* Success Page */}
                <Route path="/success" render={() => <Success />} />

                {/* contact us */}
                <Route path="/contact-us" render={() => <ContactUsPage />} />

                {/* careers */}
                <Route path="/careers" render={() => <Careers />} />

                <Redirect from="/" to="/" />
            </Switch>

            {/* <a target="_blank" href="https://wa.me/923462749449">
                <img className="whatsappIcon" src={require('./assets/img/WhatsApp.png')} />
            </a> */}

            {loader &&
                <Loader />
            }

        </div>
    );
}
