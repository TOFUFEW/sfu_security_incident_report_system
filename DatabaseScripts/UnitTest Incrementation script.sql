--Check ACCOUNT_ID auto incrementation
INSERT INTO Account ( 
	USERNAME, 
	PASSWORD
) VALUES (
	'nhan',
	'nhan'
);

INSERT INTO Account ( 
	USERNAME, 
	PASSWORD
) VALUES (
	'nhann',
	'nhan'
);


IF (
	SELECT ACCOUNT_ID
	FROM Account
	WHERE USERNAME = 'nhann' ) <> 2 
BEGIN
	PRINT N'ACCOUNT_ID incrementation failure';
END

IF (
	SELECT COUNT(*)
	FROM Account ) <> 2
BEGIN
	PRINT N'Account insertion failure';
END

DELETE FROM Account;

INSERT INTO Account ( 
	USERNAME, 
	PASSWORD
) VALUES (
	'nhan',
	'nhan'
);

IF (
	SELECT ACCOUNT_ID
	FROM Account
	WHERE USERNAME = 'nhan' ) <> 3 
BEGIN
	PRINT N'ACCOUNT_ID incrementation failure';
END


--Check CATEGORY_ID auto incrementation
INSERT INTO IncidentCategory ( 
	MAIN_CATEGORY, 
	SUB_CATEGORY,
	INCIDENT_TYPE
) VALUES (
	'ALARM',
	'FALSE',
	null
);

INSERT INTO IncidentCategory ( 
	MAIN_CATEGORY, 
	SUB_CATEGORY,
	INCIDENT_TYPE
) VALUES (
	'ALARM',
	'FIRE',
	'COOKING'
);


IF (
	SELECT CATEGORY_ID
	FROM IncidentCategory
	WHERE INCIDENT_TYPE = 'COOKING' ) <> 2 
BEGIN
	PRINT N'CATEGORY_ID incrementation failure';
END

IF (
	SELECT COUNT(*)
	FROM IncidentCategory ) <> 2
BEGIN
	PRINT N'IncidentCategory insertion failure';
END

DELETE FROM IncidentCategory;

INSERT INTO IncidentCategory ( 
	MAIN_CATEGORY, 
	SUB_CATEGORY,
	INCIDENT_TYPE
) VALUES (
	'ALARM',
	'FIRE',
	'COOKING'
);


IF (
	SELECT CATEGORY_ID
	FROM IncidentCategory
	WHERE INCIDENT_TYPE = 'COOKING' ) <> 3
BEGIN
	PRINT N'CATEGORY_ID incrementation failure';
END

--Checks LOCATION_ID auto incrementation
INSERT INTO Location ( 
	CAMPUS_NAME, 
	BUILDING_NUMBER,
	ROOM_NUMBER,
	DEPARTMENT
) VALUES (
	'Surrey',
	4,
	4080,
	'Software Systems'
);

INSERT INTO Location ( 
	CAMPUS_NAME, 
	BUILDING_NUMBER,
	ROOM_NUMBER,
	DEPARTMENT
) VALUES (
	'Surrey',
	4,
	4050,
	'Software Systems'
);


IF (
	SELECT LOCATION_ID
	FROM Location
	WHERE ROOM_NUMBER = 4050 ) <> 2 
BEGIN
	PRINT N'LOCATION_ID incrementation failure';
END

IF (
	SELECT COUNT(*)
	FROM Location ) <> 2
BEGIN
	PRINT N'Location insertion failure';
END

DELETE FROM Location;

INSERT INTO Location ( 
	CAMPUS_NAME, 
	BUILDING_NUMBER,
	ROOM_NUMBER,
	DEPARTMENT
) VALUES (
	'Surrey',
	4,
	4050,
	'Software Systems'
);

IF (
	SELECT LOCATION_ID
	FROM Location
	WHERE ROOM_NUMBER = 4050 ) <> 3 
BEGIN
	PRINT N'LOCATION_ID incrementation failure';
END

--Checks PERSON_ID auto incrementation
INSERT INTO Person (
	FIRST_NAME,
	LAST_NAME,
	PHONE_NUMBER
) VALUES (
	'Nhan',
	'Nguyen',
	'6042223333'
);

INSERT INTO Person (
	FIRST_NAME,
	LAST_NAME,
	PHONE_NUMBER
) VALUES (
	'Nhan',
	'Nguyen',
	'6042224444'
);

IF (
	SELECT PERSON_ID
	FROM Person
	WHERE PHONE_NUMBER = '6042224444' ) <> 2 
BEGIN
	PRINT N'PERSON_ID incrementation failure';
END

IF (
	SELECT COUNT(*)
	FROM Person ) <> 2
BEGIN
	PRINT N'Person insertion failure';
END

DELETE FROM Person;

INSERT INTO Person (
	FIRST_NAME,
	LAST_NAME,
	PHONE_NUMBER
) VALUES (
	'Nhan',
	'Nguyen',
	'6042224444'
);

IF (
	SELECT PERSON_ID
	FROM Person
	WHERE PHONE_NUMBER = '6042224444' ) <> 3
BEGIN
	PRINT N'PERSON_ID incrementation failure';
END

--Checks REPORT_ID auto incrementation
INSERT INTO Incident (
	ACCOUNT_ID,
	CATEGORY_ID,
	DESCRIPTION,
	EXECUTIVE_SUMMARY
) VALUES (
	3,
	3,
	null,
	null
);

INSERT INTO Incident (
	ACCOUNT_ID,
	CATEGORY_ID,
	DESCRIPTION,
	EXECUTIVE_SUMMARY
) VALUES (
	3,
	3,
	'dead',
	null
);

IF (
	SELECT REPORT_ID
	FROM Incident
	WHERE DESCRIPTION LIKE 'dead' ) <> 2 
BEGIN
	PRINT N'REPORT_ID incrementation failure';
END

IF (
	SELECT COUNT(*)
	FROM Incident ) <> 2
BEGIN
	PRINT N'Incident insertion failure';
END

DELETE FROM Incident;

INSERT INTO Incident (
	ACCOUNT_ID,
	CATEGORY_ID,
	DESCRIPTION,
	EXECUTIVE_SUMMARY
) VALUES (
	3,
	3,
	'dead',
	null
);

IF (
	SELECT REPORT_ID
	FROM Incident
	WHERE DESCRIPTION LIKE 'dead' ) <> 3
BEGIN
	PRINT N'REPORT_ID incrementation failure';
END