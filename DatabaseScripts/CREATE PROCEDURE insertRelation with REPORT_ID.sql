CREATE PROCEDURE dbo.insertRelationWithTableName
	@report_id INT,
	@table_name NVARCHAR (30),
	@table_id INT,
	@result BIT = 0 OUTPUT
AS
BEGIN
	IF EXISTS ( SELECT tc.TABLE_NAME
		FROM INFORMATION_SCHEMA.TABLES tc
		WHERE tc.TABLE_NAME = @table_name AND tc.TABLE_NAME = 'Account' )
	BEGIN
		INSERT INTO AssignedTo (REPORT_ID, ACCOUNT_ID) VALUES (@report_id, @table_id);
		SELECT @result = 1;
	END
	ELSE IF EXISTS ( SELECT tc.TABLE_NAME
		FROM INFORMATION_SCHEMA.TABLES tc
		WHERE tc.TABLE_NAME = @table_name AND tc.TABLE_NAME = 'Location' )
	BEGIN
		INSERT INTO HappensAt (REPORT_ID, LOCATION_ID) VALUES (@report_id, @table_id);
		SELECT @result = 1;
	END
	ELSE IF EXISTS ( SELECT tc.TABLE_NAME
		FROM INFORMATION_SCHEMA.TABLES tc
<<<<<<< HEAD
		WHERE tc.TABLE_NAME = @table_name AND tc.TABLE_NAME = 'Person' )
=======
		WHERE tc.TABLE_NAME = @table_name AND tc.TABLE_NAME = 'Involves' )
>>>>>>> 7fb8869fef9082f529c3a3716b38cce6c51b41a3
	BEGIN
		INSERT INTO Involves (REPORT_ID, PERSON_ID) VALUES (@report_id, @table_id);
		SELECT @result = 1;
	END
	ELSE
	BEGIN
		SELECT @result = 0;
	END
END;
