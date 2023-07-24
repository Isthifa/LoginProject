import React from "react";

export default function Foot() {
    const currentYear = new Date().getFullYear();
    return (<footer>
        <p>© {currentYear} Register</p>
    </footer>);
    }