CREATE TABLE dbo.Account (
	ACCOUNT_ID INT NOT NULL IDENTITY (1,1),
	USERNAME VARCHAR( 30 ) NOT NULL,
	PASSWORD VARCHAR( 30 ) NOT NULL,
	PRIMARY KEY ( ACCOUNT_ID )	
);

CREATE TABLE dbo.Staff (
	ACCOUNT_ID INT NOT NULL,
	FIRST_NAME VARCHAR( 30 ),
	LAST_NAME VARCHAR( 30 ),
	FOREIGN KEY ( ACCOUNT_ID ) REFERENCES Account ( ACCOUNT_ID ),
	PRIMARY KEY ( ACCOUNT_ID )
);

CREATE TABLE dbo.Person (
	PERSON_ID INT NOT NULL IDENTITY (1,1),
	FIRST_NAME VARCHAR ( 30 ),
	LAST_NAME VARCHAR ( 30 ),
	PHONE_NUMBER VARCHAR( 10 ),
	PRIMARY KEY ( PERSON_ID )
);

CREATE TABLE IncidentCategory (
	CATEGORY_ID INT NOT NULL IDENTITY (1,1), --TODO subject to change
	MAIN_CATEGORY VARCHAR ( 20 ) NOT NULL,
	SUB_CATEGORY VARCHAR ( 20 ) NOT NULL,
	INCIDENT_TYPE VARCHAR ( 20 ),
	PRIMARY KEY ( CATEGORY_ID )
);

CREATE TABLE dbo.Location (
	LOCATION_ID INT IDENTITY (1,1),
	CAMPUS_NAME VARCHAR( 30 ),
	BUILDING_NUMBER INT,
	ROOM_NUMBER INT,
	DEPARTMENT VARCHAR ( 30 ),
	PRIMARY KEY ( LOCATION_ID )
);

CREATE TABLE dbo.Incident (
	REPORT_NUMBER INT IDENTITY (1,1),
	ACCOUNT_ID INT NOT NULL,
	CATEGORY_ID INT NOT NULL,
	DESCRIPTION TEXT,
	EXECUTIVE_SUMMARY TEXT,
	FOREIGN KEY ( ACCOUNT_ID ) REFERENCES Account ( ACCOUNT_ID ),
	FOREIGN KEY ( CATEGORY_ID ) REFERENCES IncidentCategory ( CATEGORY_ID ),
	PRIMARY KEY ( REPORT_NUMBER )
);

CREATE TABLE dbo.AssignedTo (
	REPORT_NUMBER INT,
	ACCOUNT_ID INT,
	PRIMARY KEY (
		REPORT_NUMBER,
		ACCOUNT_ID 
	)
);

CREATE TABLE dbo.Involves (
	REPORT_NUMBER INT,
	PERSON_ID INT,
	FOREIGN KEY ( REPORT_NUMBER ) REFERENCES Incident ( REPORT_NUMBER ),
	FOREIGN KEY ( PERSON_ID ) REFERENCES Person ( PERSON_ID ),
	PRIMARY KEY (
		REPORT_NUMBER,
		PERSON_ID 
	)
);

CREATE TABLE dbo.HappensAt (
	REPORT_NUMBER INT,
	LOCATION_ID INT,
	LOCATION_TYPE VARCHAR ( 30 ),
	FOREIGN KEY ( REPORT_NUMBER ) REFERENCES Incident ( REPORT_NUMBER ),
	FOREIGN KEY ( LOCATION_ID ) REFERENCES Location ( LOCATION_ID ),
	PRIMARY KEY (
		REPORT_NUMBER,
		LOCATION_ID
	)
);