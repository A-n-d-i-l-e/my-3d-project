// pages/index.tsx
import Content from "@/components/Content";
import Navbar from "@/components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Section from "@/components/layout/sections/Section";
import { sectionContent } from '../components/layout/sections/sectionContent';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My 3D Model</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      <Content />
      <main>
        <Section
          id="project-overview"
          title="Project Overview"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />
        
        <Section
          id="the-collection"
          title="The Collection"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />
          
        <Section
          id="the-wine"
          title="The Wine"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="the-cellar"
          title="The Cellar"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="tokenomics"
          title="Tokenomics"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="media"
          title="Media"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="about-us"
          title="About Us"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="the-team"
          title="The Team"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="stats"
          title="Stats"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="alpha"
          title="Alpha"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="kyc"
          title="KYC"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="ts-and-cs"
          title="T's & C's"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="partners-and-suppliers"
          title="Partners & Suppliers"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />

        <Section
          id="holders-contact-form"
          title="Holders Contact Form"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
        />
       
      </main>
    </div>
  );
};

export default Home;
