import React from "react";

import styles from "./ProjectsPage.module.scss";
import { Project } from "./Project/Project";

import GyminoImage from "../../assets/images/projects/gymino-app.png";
import GyminoDashboardImage from "../../assets/images/projects/gymino-dashboard.png";
import InstagramImage from "../../assets/images/projects/instagram_clone.png";
import SortingImage from "../../assets/images/projects/sorting-visualizer.png";
import ScudettoImage from "../../assets/images/projects/scudetto.png";
import PolskaImage from "../../assets/images/projects/polskalokalna.png";
import BallinImage from "../../assets/images/projects/ballin.png";

import HtmlIcon from "../../assets/images/icons/html5_icon.svg";
import CssIcon from "../../assets/images/icons/css3.svg";
import SassIcon from "../../assets/images/icons/sass.svg";
import MaterializeIcon from "../../assets/images/icons/materialize.svg";
import FirebaseIcon from "../../assets/images/icons/firebase.svg";
import JavascriptIcon from "../../assets/images/icons/javascript-1.svg";
import ReactIcon from "../../assets/images/icons/react-brands.svg";
import ReduxIcon from "../../assets/images/icons/redux_logo.svg";
import FlutterIcon from "../../assets/images/icons/flutter.svg";
import VueIcon from "../../assets/images/icons/vue.svg";
import LaravelIcon from "../../assets/images/icons/laravel-brands.svg";
import WordpressIcon from "../../assets/images/icons/wordpress-blue.svg";
import WooIcon from "../../assets/images/icons/woocommerce.svg";
import BootstrapIcon from "../../assets/images/icons/bootstrap.svg";

export const ProjectsPage = () => {
  const projects = [
    {
      name: "Instagram clone",
      image: InstagramImage,
      technologies: [JavascriptIcon, ReactIcon, ReduxIcon, SassIcon],
      codeUrl: "https://github.com/maciekz1996/instagram-clone",
      liveUrl: "https://maciekz1996.github.io/instagram-clone",
      isLive: false,
    },
    {
      name: "Sorting visualizer",
      image: SortingImage,
      technologies: [JavascriptIcon, ReactIcon, SassIcon],
      codeUrl: "https://github.com/maciekz1996/sorting-visualizer",
      liveUrl: "https://maciekz1996.github.io/sorting-visualizer",
      isLive: false,
    },
    {
      name: "Gymino dashboard",
      image: GyminoDashboardImage,
      technologies: [JavascriptIcon, ReactIcon, ReduxIcon, FirebaseIcon, MaterializeIcon],
      codeUrl: "https://github.com/maciekz1996/gymino-dashboard",
      liveUrl: "https://gymino.pl",
      isLive: false,
    },
    {
      name: "Gymino mobile app",
      image: GyminoImage,
      technologies: [FlutterIcon, FirebaseIcon],
      codeUrl: "https://github.com/maciekz1996/gymino",
      liveUrl: "",
      isLive: false,
    },
    {
      name: "Scudetto store",
      image: ScudettoImage,
      technologies: [LaravelIcon, VueIcon],
      codeUrl: "https://github.com/maciekz1996/scudetto",
      liveUrl: "https://scudetto.store",
      isLive: false,
    },
    {
      name: "Polsa lokalna",
      image: PolskaImage,
      technologies: [HtmlIcon, CssIcon, BootstrapIcon],
      codeUrl: "",
      liveUrl: "http://polskalokalna.org.pl/",
      isLive: true,
    },
    {
      name: "Ballin store",
      image: BallinImage,
      technologies: [WordpressIcon, WooIcon],
      codeUrl: "",
      liveUrl: "http://ballin.com.pl/",
      isLive: true,
    },
  ];

  const renderedProjects = projects.map((project, idx) => <Project project={project} key={idx} />);

  return (
    <section className={styles.page} name="projects">
      <div className={`${styles.pageContent} container`}>
        <p className={styles.title}>Recent projects</p>

        <section className={styles.projects}>{renderedProjects}</section>
      </div>
    </section>
  );
};
