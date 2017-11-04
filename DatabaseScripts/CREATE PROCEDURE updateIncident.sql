--DROP PROCEDURE [dbo].[updateIncident]
CREATE PROCEDURE [dbo].updateIncident 
	@report_id INT,
	@category_id INT,
	@description TEXT,
	@executive_summary TEXT,
	@status INT,
	@end_time DATETIME,
	@result BIT = 0 OUTPUT
AS
BEGIN
	IF @status = 4
	BEGIN
		UPDATE Incident
		SET CATEGORY_ID = @category_id, DESCRIPTION = @description, 
			EXECUTIVE_SUMMARY = @executive_summary, STATUS = @status, END_TIME = @end_time
		WHERE REPORT_ID = @report_id;
		SELECT @result = 1;
	END
	ELSE
	BEGIN
		UPDATE Incident
		SET CATEGORY_ID = @category_id, DESCRIPTION = @description, 
			EXECUTIVE_SUMMARY = @executive_summary, STATUS = @status
		WHERE REPORT_ID = @report_id;
		SELECT @result = 1;
	END
END;