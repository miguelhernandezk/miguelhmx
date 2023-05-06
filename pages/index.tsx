import Head from "next/head";
import { Box, Container } from "@mui/material";

import NavBar from "@/components/NavBar";
import HeaderSection from "@/components/pagesSections/index/HeaderSection";
import AboutMe from "@/components/pagesSections/index/AboutMe";
import MainTopics from "@/components/pagesSections/index/MainTopics";
import BlogAndArticles from "@/components/pagesSections/index/BlogAndArticles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Miguel Hernández</title>
        <meta name="description" content="Miguel Hernández description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main">
        <NavBar />
        <Container>
          <HeaderSection />
          <Box id="about-me">
            <AboutMe />
          </Box>
          <MainTopics />
          <BlogAndArticles />
          <Footer />
        </Container>
      </Box>
    </>
  );
}
