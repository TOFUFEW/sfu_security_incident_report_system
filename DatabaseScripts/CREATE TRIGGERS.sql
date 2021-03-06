CREATE OR ALTER TRIGGER dbo.addStaff ON Account
AFTER INSERT
AS
BEGIN
	INSERT INTO Staff ( ACCOUNT_ID ) 
		SELECT ACCOUNT_ID
		FROM inserted;
END

CREATE OR ALTER TRIGGER dbo.updateChangeLog ON Incident
AFTER UPDATE
AS
BEGIN
	INSERT INTO ChangeLog ( REPORT_ID, DATE_UPDATED ) 
		SELECT REPORT_ID, GETDATE()
		FROM inserted;
END