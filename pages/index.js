/** @format */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { homecontainer, homeh2, homebtn } from "../components/Animations";

export default function Home() {
  return (
    <motion.div
      className={styles.container}
      variants={homecontainer}
      initial="hidden"
      animate="show"
      exit="hide">
      <motion.h2 variants={homeh2}>welcome to age services</motion.h2>
      <Link href="/services">
        <motion.button variants={homebtn}>our services</motion.button>
      </Link>
    </motion.div>
  );
}
