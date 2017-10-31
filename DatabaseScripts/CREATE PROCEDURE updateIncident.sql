--DROP PROCEDURE [dbo].[updateIncident]
CREATE PROCEDURE [dbo].updateIncident 
	@report_id INT,
	@category_id INT,
	@description TEXT,
	@executive_summary TEXT,
	@closed BIT,
	@result BIT = 0 OUTPUT
AS
BEGIN
	UPDATE Incident
	SET CATEGORY_ID = @category_id, DESCRIPTION = @description, EXECUTIVE_SUMMARY = @executive_summary, CLOSED = @closed
	WHERE REPORT_ID = @report_id;
	SELECT @result = 1;
END;