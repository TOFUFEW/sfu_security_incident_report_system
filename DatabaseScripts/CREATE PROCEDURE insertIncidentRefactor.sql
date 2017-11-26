--DROP PROCEDURE [dbo].[insertIncidentRefactor]
CREATE PROCEDURE [dbo].[insertIncidentRefactor] 
	@creator_id INT,
	@category_id INT,
	@description TEXT,
	@executive_summary TEXT,
	@temporary_report INT,
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
			EXECUTIVE_SUMMARY,
			TEMPORARY_REPORT,
			START_TIME
		) VALUES (
			@creator_id,
			@category_id,
			@description,
			@executive_summary,
			@temporary_report,
			GETDATE()
		);
	END
END;
