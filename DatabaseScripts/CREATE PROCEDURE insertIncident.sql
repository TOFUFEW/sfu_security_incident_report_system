--DROP PROCEDURE [dbo].[insertIncident]
CREATE PROCEDURE [dbo].[insertIncident] 
	@creator_id INT,
	@category_id INT,
	@description TEXT,
	@executive_summary TEXT,
	@result BIT = 1 OUTPUT
AS
BEGIN
	IF EXISTS ( SELECT CATEGORY_ID
		FROM IncidentCategory
		WHERE CATEGORY_ID = @category_id
	)
	BEGIN
		INSERT INTO Incident (
			ACCOUNT_ID,
			CATEGORY_ID,
			DESCRIPTION,
<<<<<<< HEAD
			EXECUTIVE_SUMMARY,
=======
			EXECUTIVE_SUMMARY
>>>>>>> 7fb8869fef9082f529c3a3716b38cce6c51b41a3
		) VALUES (
			@creator_id,
			@category_id,
			@description,
			@executive_summary
		);
		SELECT @result = 1;
	END
	SELECT @result = 0;
END;
