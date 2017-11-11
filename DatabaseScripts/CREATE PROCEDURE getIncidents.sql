--DROP PROCEDURE [dbo].[getIncidents]
CREATE PROCEDURE [dbo].[getIncidents]
	@user_id INT
AS
BEGIN
	IF (SELECT ACCOUNT_TYPE
		FROM Account
		WHERE ACCOUNT_ID = @user_id) = 1
	BEGIN
		SELECT * 
		FROM Incident 
		ORDER BY REPORT_ID
		DESC;
	END
	ELSE
	BEGIN
		SELECT Incident.*
		FROM Incident INNER JOIN AssignedTo ON Incident.REPORT_ID =	AssignedTo.REPORT_ID
		WHERE AssignedTo.ACCOUNT_ID = @user_id and Incident.STATUS != 4
		ORDER BY REPORT_ID
		DESC;
	END
END;