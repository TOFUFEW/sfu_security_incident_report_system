The SFU Incident Reporting System is a system for reporting, communicating, and archiving security reports.

DEPENDENCIES:
    -Node.js 6.11.3
    -JDK 1.8
    -Maven

BUILD:
    Front End Server:
        -In the IRSClientAngular directory, run npm install
        -run npm start
    Back End Server:
        -Maven build
        -Maven run

DIRECTORY:
    -DatabaseScripts: scripts used to initialize the database (not necessary for running project)
    -Documentation: planning and design documents
    -IRSClientAngular: front end server (Angular 2/Typescript)
    -WebApiSpark: back end server (Java Spark/Java)