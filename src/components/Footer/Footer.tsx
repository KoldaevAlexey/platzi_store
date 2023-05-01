import React from "react";

import styles from "../../styles/Footer.module.css";

import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="logo" />
                </Link>
            </div>

            <div className={styles.rights}>Developed by ЛЁXA</div>
            <div className={styles.socials}>Соц сети</div>
        </section>
    );
};

export default Footer;
