--Checking all constraints in Account Table
IF ( dbo.CheckConstraints ( 'Account' , 'Primary Key' , 'ACCOUNT_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Account primary key (ACCOUNT_ID)';
END

IF ( dbo.CheckConstraints ( 'Account' , 'Unique' , 'USERNAME' ) ) = 0
BEGIN
	PRINT N'Failed checking Account unique key (USERNAME)';
END

--Checking all constraints in Staff Table
IF ( dbo.CheckConstraints ( 'Staff' , 'Primary Key' , 'ACCOUNT_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Staff primary key (ACCOUNT_ID)';
END

--Checking all constraints in IncidentCateogry Table
IF ( dbo.CheckConstraints ( 'IncidentCategory' , 'Primary Key' , 'CATEGORY_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking IncidentCategory primary key (CATEGORY_ID)';
END

--Checking all constraints in Location Table
IF ( dbo.CheckConstraints ( 'Location' , 'Primary Key' , 'LOCATION_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Location primary key (LOCATION_ID)';
END

--Checking all constraints in Person Table
IF ( dbo.CheckConstraints ( 'Person' , 'Primary Key' , 'PERSON_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Person primary key (PERSON_ID)';
END

--Checking all constraints in Incident Table
IF ( dbo.CheckConstraints ( 'Incident' , 'Primary Key' , 'REPORT_NUMBER' ) ) = 0
BEGIN
	PRINT N'Failed checking Incident primary key (REPORT_NUMBER)';
END

IF ( dbo.CheckConstraints ( 'Incident' , 'Foreign Key' , 'CATEGORY_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Incident foreign key (CATEGORY_ID)';
END

IF ( dbo.CheckConstraints ( 'Incident' , 'Foreign Key' , 'ACCOUNT_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking Incident foreign key (ACCOUNT_ID)';
END

--Checking all constraints in AssignedTo Table
IF ( dbo.CheckConstraints ( 'AssignedTo' , 'Primary Key' , 'REPORT_NUMBER' ) ) = 0
BEGIN
	PRINT N'Failed checking AssignedTo primary key (REPORT_NUMBER)';
END

IF ( dbo.CheckConstraints ( 'AssignedTo' , 'Primary Key' , 'ACCOUNT_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking AssignedTo primary key (ACCOUNT_ID)';
END

IF ( dbo.CheckConstraints ( 'AssignedTo' , 'Foreign Key' , 'REPORT_NUMBER' ) ) = 0
BEGIN
	PRINT N'Failed checking AssignedTo foreign key (REPORT_NUMBER)';
END

IF ( dbo.CheckConstraints ( 'AssignedTo' , 'Foreign Key' , 'ACCOUNT_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking AssignedTo foreign key (ACCOUNT_ID)';
END

--Checking all constraints in HappensAt Table
IF ( dbo.CheckConstraints ( 'HappensAt' , 'Primary Key' , 'REPORT_NUMBER' ) ) = 0
BEGIN
	PRINT N'Failed checking HappensAt primary key (REPORT_NUMBER)';
END

IF ( dbo.CheckConstraints ( 'HappensAt' , 'Primary Key' , 'LOCATION_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking HappensAt primary key (LOCATION_ID)';
END

IF ( dbo.CheckConstraints ( 'HappensAt' , 'Foreign Key' , 'REPORT_NUMBER' ) ) = 0
BEGIN
	PRINT N'Failed checking HappensAt foreign key (REPORT_NUMBER)';
END

IF ( dbo.CheckConstraints ( 'HappensAt' , 'Foreign Key' , 'LOCATION_ID' ) ) = 0
BEGIN
	PRINT N'Failed checking HappensAt foreign key (LOCATION_ID)';
END