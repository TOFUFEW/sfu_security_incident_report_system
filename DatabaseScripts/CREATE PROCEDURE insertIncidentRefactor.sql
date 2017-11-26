--DROP PROCEDURE [dbo].[insertIncidentRefactor]
CREATE PROCEDURE [dbo].[insertIncidentRefactor] 
	@creator_id INT,
	@category_id INT,
	@description TEXT,
	@executive_summary TEXT,
<<<<<<< HEAD
	@temporary_report INT,
=======
	@result BIT = 1 OUTPUT
>>>>>>> master
AS
BEGIN
	IF EXISTS ( SELECT CATEGORY_ID
		FROM IncidentCategory
		WHERE CATEGORY_ID = @category_id
	)
	BEGIN
<<<<<<< HEAD
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
=======
		IF EXISTS ( SELECT ACCOUNT_ID
			FROM Account
			WHERE ACCOUNT_ID = @creator_id AND
				ACCOUNT_TYPE = 1 
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
				1,
				GETDATE()
			);
			SELECT @result = 1;
		END
		ELSE
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
				0,
				GETDATE()
			);
			SELECT @result = 1;
		END
	END
	ELSE
	BEGIN
		SELECT @result = 0;
>>>>>>> master
	END
END;
