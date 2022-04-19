/** @format */
import React from "react";
import styles from "../styles/Services.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesh3btn, cards, card } from "../components/Animations";

const services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <motion.h3
          variants={servicesh3btn}
          initial="hidden"
          animate="show"
          exit="hide">
          our services
        </motion.h3>
        <Link href="/">
          <motion.div
            className={styles.navback}
            variants={servicesh3btn}
            initial="hidden"
            animate="show"
            exit="hide">
            <button>{"<"}</button>
            <p>back home</p>
          </motion.div>
        </Link>
      </div>
      <motion.div
        className={styles.cards}
        variants={cards}
        initial="hidden"
        animate="show"
        exit="hide">
        <motion.div variants={card} className={styles.card}>
          <h4>service one</h4>
          <p>this is service one</p>
        </motion.div>
        <motion.div variants={card} className={styles.card}>
          <h4>service two</h4>
          <p>this is service two</p>
        </motion.div>
        <motion.div variants={card} className={styles.card}>
          <h4>service three</h4>
          <p>this is service three</p>
        </motion.div>
        <motion.div variants={card} className={styles.card}>
          <h4>service four</h4>
          <p>this is service four</p>
        </motion.div>
        <motion.div variants={card} className={styles.card}>
          <h4>service five</h4>
          <p>this is service five</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default services;
