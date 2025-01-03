/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/eleazar.png";

const imageAltText = "background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Final-year Computer Science student, along with skills in teamwork, communication, and problem-solving. I am passionate about learning new technologies and tackling technical challenges in agile environments. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Full-stack web development",
  "Software development",
  "Machine learning",
  "Data analysis",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = (
  <>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        alt="typescript"
        width="40"
        height="40"
      />{" "}
    </a>
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      target="_blank"
      rel="noreferrer"
    >
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        alt="javascript"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        alt="react"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        alt="tailwind"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
        alt="bootstrap"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        alt="html5"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        alt="css3"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
        alt="figma"
        width="40"
        height="40"
      />{" "}
    </a>

    <a href="https://www.python.org" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
        alt="python"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
        alt="scikit_learn"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://seaborn.pydata.org/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"
        alt="seaborn"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg"
        alt="pandas"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://opencv.org/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg"
        alt="opencv"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://banner2.cleanpng.com/20180829/qut/kisspng-flask-python-web-framework-representational-state-flask-stickker-1713946811244.webp"
        alt="flask"
        width="40"
        height="40"
      />{" "}
    </a>

    <a href="https://expressjs.com" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp"
        alt="express"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://nodejs.org" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        alt="nodejs"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://postman.com" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        alt="postman"
        width="40"
        height="40"
      />{" "}
    </a>

    <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        alt="git"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://heroku.com" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
        alt="heroku"
        width="40"
        height="40"
      />{" "}
    </a>

    <a href="https://www.oracle.com/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
        alt="oracle"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
        alt="mysql"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://mariadb.org/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg"
        alt="mariadb"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
        alt="postgresql"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
        alt="mssql"
        width="40"
        height="40"
      />{" "}
    </a>

    <a href="https://www.java.com" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
        alt="java"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
        alt="csharp"
        width="40"
        height="40"
      />{" "}
    </a>

    <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
        alt="linux"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://www.nginx.com" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg"
        alt="nginx"
        width="40"
        height="40"
      />{" "}
    </a>

    <a href="https://www.php.net" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
        alt="php"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://laravel.com/" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://www.scorchsoft.com/public/capabilities/head/laravel-logo-square.webp"
        alt="laravel"
        width="40"
        height="40"
      />{" "}
    </a>
    <a href="https://codeigniter.com" target="_blank" rel="noreferrer">
      {" "}
      <img
        src="https://cdn.worldvectorlogo.com/logos/codeigniter.svg"
        alt="codeigniter"
        width="40"
        height="40"
      />{" "}
    </a>
  </>
);

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
