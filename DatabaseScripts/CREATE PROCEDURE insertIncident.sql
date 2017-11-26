--DROP PROCEDURE [dbo].[insertIncident]
CREATE PROCEDURE [dbo].[insertIncident] 
	@creator_id INT,
	@category_id INT,
	@description TEXT,
	@executive_summary TEXT,
	@search_text TEXT,
	@result BIT = 1 OUTPUT
AS
BEGIN
	IF EXISTS ( SELECT CATEGORY_ID
		FROM IncidentCategory
		WHERE CATEGORY_ID = @category_id
	)
	BEGIN
		DECLARE @report_id INT = IDENT_CURRENT('Incident') + 1;
		@search_text = @search_text + @report_id;
		INSERT INTO Incident (
			ACCOUNT_ID,
			CATEGORY_ID,
			DESCRIPTION,
			EXECUTIVE_SUMMARY,
			SEARCH_TEXT
		) VALUES (
			@creator_id,
			@category_id,
			@description,
			@executive_summary,
			@search_text
		);
		SELECT @result = 1;
	END
	ELSE
	BEGIN
		SELECT @result = 0;
	END
END;
