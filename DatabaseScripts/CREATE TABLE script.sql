CREATE TABLE dbo.Account (
	ACCOUNT_ID INT NOT NULL IDENTITY (1,1),
	USERNAME VARCHAR( 30 ) NOT NULL UNIQUE,
	PASSWORD VARCHAR( 30 ) NOT NULL,
	ACCOUNT_TYPE INT NOT NULL,
	PRIMARY KEY ( ACCOUNT_ID )	
);

CREATE TABLE dbo.Campus (
	CAMPUS_ID INT NOT NULL IDENTITY (1,1),
	CITY VARCHAR( 20 ),
	ADDRESS VARCHAR ( 30 ),
	PRIMARY KEY ( CAMPUS_ID)
);

CREATE TABLE dbo.Staff (
	ACCOUNT_ID INT NOT NULL,
	CAMPUS_ID INT,
	FIRST_NAME VARCHAR( 30 ),
	LAST_NAME VARCHAR( 30 ),
	FOREIGN KEY ( CAMPUS_ID ) REFERENCES Campus ( CAMPUS_ID),
	FOREIGN KEY ( ACCOUNT_ID ) REFERENCES Account ( ACCOUNT_ID ) ON DELETE CASCADE,
	PRIMARY KEY ( ACCOUNT_ID )
);

CREATE TABLE dbo.Person (
	PERSON_ID INT NOT NULL IDENTITY (1,1),
	FIRST_NAME VARCHAR ( 30 ),
	LAST_NAME VARCHAR ( 30 ),
	PHONE_NUMBER VARCHAR( 10 ),
	PRIMARY KEY ( PERSON_ID )
);

CREATE TABLE dbo.IncidentCategory (
	CATEGORY_ID INT NOT NULL IDENTITY (1,1),
	MAIN_CATEGORY VARCHAR ( 20 ) NOT NULL,
	SUB_CATEGORY VARCHAR ( 20 ) NOT NULL,
	INCIDENT_TYPE VARCHAR ( 20 ),
	PERMISSION_LEVEL INT NOT NULL,
	PRIMARY KEY ( CATEGORY_ID )
);

CREATE TABLE dbo.Location (
	LOCATION_ID INT IDENTITY (1,1),
	CAMPUS_ID INT,
	BUILDING_NUMBER INT,
	ROOM_NUMBER INT,
	DEPARTMENT VARCHAR ( 30 ),
	FOREIGN KEY ( CAMPUS_ID ) REFERENCES Campus ( CAMPUS_ID ),
	PRIMARY KEY ( LOCATION_ID )
);

CREATE TABLE dbo.Incident (
	REPORT_ID INT IDENTITY (1,1),
	ACCOUNT_ID INT NOT NULL,
	CATEGORY_ID INT NOT NULL,
	DESCRIPTION TEXT,
	EXECUTIVE_SUMMARY TEXT,
	STATUS INT NOT NULL DEFAULT 0,
	START_TIME DATETIME NOT NULL DEFAULT GETDATE(),
	END_TIME DATETIME,
	TEMPORARY_REPORT BIT NOT NULL DEFAULT 1,
	TIMER_START INT,
	TIMER_END INT,
	FOREIGN KEY ( ACCOUNT_ID ) REFERENCES Account ( ACCOUNT_ID ),
	FOREIGN KEY ( CATEGORY_ID ) REFERENCES IncidentCategory ( CATEGORY_ID ),
	PRIMARY KEY ( REPORT_ID )
);

CREATE TABLE dbo.AssignedTo (
	REPORT_ID INT,
	ACCOUNT_ID INT,
	FOREIGN KEY ( REPORT_ID ) REFERENCES Incident ( REPORT_ID ),
	FOREIGN KEY ( ACCOUNT_ID ) REFERENCES Account ( ACCOUNT_ID ),
	PRIMARY KEY (
		REPORT_ID,
		ACCOUNT_ID 
	)
);

CREATE TABLE dbo.Involves (
	REPORT_ID INT,
	PERSON_ID INT,
	FOREIGN KEY ( REPORT_ID ) REFERENCES Incident ( REPORT_ID ),
	FOREIGN KEY ( PERSON_ID ) REFERENCES Person ( PERSON_ID ),
	PRIMARY KEY (
		REPORT_ID,
		PERSON_ID 
	)
);

CREATE TABLE dbo.HappensAt (
	REPORT_ID INT,
	LOCATION_ID INT,
	LOCATION_TYPE VARCHAR ( 30 ),
	FOREIGN KEY ( REPORT_ID ) REFERENCES Incident ( REPORT_ID ),
	FOREIGN KEY ( LOCATION_ID ) REFERENCES Location ( LOCATION_ID ),
	PRIMARY KEY (
		REPORT_ID,
		LOCATION_ID
	)
);

CREATE TABLE dbo.Attachment (
	REPORT_ID INT,
	FILE_NAME VARCHAR ( 120 ),
	FOREIGN KEY ( REPORT_ID ) REFERENCES Incident ( REPORT_ID ),
	PRIMARY KEY (
		REPORT_ID,
		FILE_NAME
	)
);