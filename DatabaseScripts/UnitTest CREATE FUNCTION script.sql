--DROP FUNCTION CheckConstraints;

CREATE FUNCTION dbo.CheckConstraints (
	@TableName VARCHAR(30),
	@ConstraintType VARCHAR(30),
	@ExpectedColumnName VARCHAR(30)
)
RETURNS BIT
AS
BEGIN 
	DECLARE @ResultingColumnName VARCHAR(30);
	SELECT @ResultingColumnName = ccu.COLUMN_NAME
    FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
        JOIN INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE ccu ON tc.CONSTRAINT_NAME = ccu.Constraint_name
    WHERE tc.CONSTRAINT_TYPE = @ConstraintType AND tc.TABLE_NAME = @TableName
	IF ( @ResultingColumnName <> @ExpectedColumnName) 
	BEGIN
		RETURN 0
	END
	RETURN 1;
END;