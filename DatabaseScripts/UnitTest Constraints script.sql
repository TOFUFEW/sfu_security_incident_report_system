IF ( dbo.CheckConstraints ( 'Account' , 'Primary Key' , 'ACCOUNT_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Account primary key (ACCOUNT_ID)';
END

IF ( dbo.CheckConstraints ( 'Account' , 'Unique' , 'USERNAME' ) ) = 0
BEGIN
	PRINT N'Failed checking Account unique key (USERNAME)';
END

IF ( dbo.CheckConstraints ( 'Staff' , 'Primary Key' , 'ACCOUNT_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Staff primary key (ACCOUNT_ID)';
END

IF ( dbo.CheckConstraints ( 'IncidentCategory' , 'Primary Key' , 'CATEGORY_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking IncidentCategory primary key (CATEGORY_ID)';
END

IF ( dbo.CheckConstraints ( 'Location' , 'Primary Key' , 'LOCATION_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Location primary key (LOCATION_ID)';
END

IF ( dbo.CheckConstraints ( 'Person' , 'Primary Key' , 'PERSON_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Person primary key (PERSON_ID)';
END

IF ( dbo.CheckConstraints ( 'Person' , 'Primary Key' , 'PERSON_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Person primary key (PERSON_ID)';
END

IF ( dbo.CheckConstraints ( 'Incident' , 'Primary Key' , 'REPORT_NUMBER' ) ) = 0
BEGIN
	PRINT N'Failed checking Incident primary key (REPORT_NUMBER)';
END