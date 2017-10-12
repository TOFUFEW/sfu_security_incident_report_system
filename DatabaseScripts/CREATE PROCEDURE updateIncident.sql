CREATE PROCEDURE [dbo].[updateIncident] 
	@report_id INT,
	@category_id INT,
	@account_id INT,
	@description TEXT,
	@executive_summary TEXT,
	@closed BIT
AS
BEGIN
	UPDATE Incident
	SET ACCOUNT_ID = @account_id, CATEGORY_ID = @category_id, DESCRIPTION = @description, EXECUTIVE_SUMMARY = @executive_summary, CLOSED = @closed
	WHERE REPORT_ID = @report_id
END;