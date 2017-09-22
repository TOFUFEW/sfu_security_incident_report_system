/*
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
	PRINT N'Account incrementation failure';
END

IF (
	SELECT COUNT(*)
	FROM Account ) <> 2
BEGIN
	PRINT N'Account insertion failure';
END

INSERT INTO Staff (ACCOUNT_ID, FIRST_NAME, LAST_NAME) VALUES (1, 'nhan', 'nguyen');
GO
INSERT INTO Staff (ACCOUNT_ID, FIRST_NAME, LAST_NAME) VALUES (3, 'nhan', 'nguyen');
GO
IF (SELECT COUNT (*)
	FROM STAFF ) <> 1
BEGIN
	PRINT N'Staff ACCOUNT_ID Foreign key failure';
END
GO
*/