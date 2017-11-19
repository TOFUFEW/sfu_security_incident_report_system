--DROP PROCEDURE [dbo].[updateIncidentRefactor]
CREATE PROCEDURE [dbo].updateIncidentRefactor
	@report_id INT,
	@category_id INT,
	@description TEXT,
	@executive_summary TEXT,
	@status INT,
	@temporary_report INT,
	@timer_start INT,
	@timer_end INT,
	@result BIT = 0 OUTPUT
AS
BEGIN
	IF @status = 4
	BEGIN
		UPDATE Incident
		SET CATEGORY_ID = @category_id, DESCRIPTION = @description, 
			EXECUTIVE_SUMMARY = @executive_summary, STATUS = @status, END_TIME = GETDATE(),
			TEMPORARY_REPORT = @temporary_report, TIMER_END = @timer_end, TIMER_START = @timer_start
		WHERE REPORT_ID = @report_id;
		SELECT @result = 1;
	END
	ELSE
	BEGIN
		UPDATE Incident
		SET CATEGORY_ID = @category_id, DESCRIPTION = @description, 
			EXECUTIVE_SUMMARY = @executive_summary, STATUS = @status,
			TEMPORARY_REPORT = @temporary_report, TIMER_END = @timer_end, TIMER_START = @timer_start
		WHERE REPORT_ID = @report_id;
		SELECT @result = 1;
	END
END;