CREATE PROCEDURE dbo.deleteAllRelations
	@report_id INT
AS
BEGIN
	DELETE FROM AssignedTo
	WHERE REPORT_ID = @report_id;

	DELETE FROM HappensAt
	WHERE REPORT_ID = @report_id;

	DELETE FROM Involves
	WHERE REPORT_ID = @report_id;
END;