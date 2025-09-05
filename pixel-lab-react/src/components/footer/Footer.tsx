    import React from "react";
import "./Footer.css";

    export function Footer() {
        let currentYear = new Date().getFullYear()
        console.log(currentYear)
        return(
        <footer>
            Copyright of pixel river finanical {currentYear} ©
        </footer>
        );
    }

    export default Footer;