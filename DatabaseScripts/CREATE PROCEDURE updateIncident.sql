CREATE PROCEDURE [dbo].[updateIncident] 
	@report_id INT,
	@category_id INT,
	@description TEXT,
	@executive_summary TEXT,
	@closed BIT,
	@location_id INT,
	@person_id INT,
	@staff_id INT
AS
BEGIN
	UPDATE Incident
	SET CATEGORY_ID = @category_id, DESCRIPTION = @description, EXECUTIVE_SUMMARY = @executive_summary, CLOSED = @closed
	WHERE REPORT_ID = @report_id;
		
	IF EXISTS ( SELECT LOCATION_ID
		FROM Location
		WHERE LOCATION_ID = @location_id
	)
	BEGIN
		DELETE FROM HappensAt
		WHERE REPORT_ID = @report_id;
		INSERT INTO HappensAt (
			REPORT_ID,
			LOCATION_ID
		) VALUES (
			@report_id,
			@location_id
		);
	END

	IF EXISTS ( SELECT PERSON_ID
		FROM Involves
		WHERE PERSON_ID = @person_id
	)
	BEGIN
		DELETE FROM Involves
		WHERE REPORT_ID = @report_id;
		INSERT INTO Involves (
			REPORT_ID,
			PERSON_ID
		) VALUES (
			@report_id,
			@person_id
		);
	END

	IF EXISTS ( SELECT ACCOUNT_ID
		FROM Staff
		WHERE ACCOUNT_ID = @staff_id
	)
	BEGIN
		DELETE FROM AssignedTo
		WHERE REPORT_ID = @report_id;
		INSERT INTO AssignedTo (
			REPORT_ID,
			ACCOUNT_ID
		) VALUES (
			@report_id,
			@staff_id
		);
	END
END;