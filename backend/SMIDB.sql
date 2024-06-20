IF OBJECT_ID('SMI_Lookup', 'u') IS NOT NULL 
   DROP TABLE dbo.[SMI_Lookup];  
GO
IF OBJECT_ID('SMI_Request_Attachment_Doc', 'u') IS NOT NULL 
   DROP TABLE dbo.[SMI_Request_Attachment_Doc];  
GO
IF OBJECT_ID('SMI_Request_Attachment_Image', 'u') IS NOT NULL 
   DROP TABLE dbo.[SMI_Request_Attachment_Image];  
GO
IF OBJECT_ID('SMI_Request', 'u') IS NOT NULL 
   DROP TABLE dbo.[SMI_Request];  
GO
create table dbo.SMI_Request(
pRequestID int identity (1,1) NOT NULL,
[Stage] nvarchar(100)  NOT NULL,
RequestNo int  NOT NULL,
[Originator] nvarchar(100) NOT NULL,
[Division] nvarchar(20) NOT NULL,
[Department] nvarchar(200) NOT NULL,
[Title] nvarchar(300),
Additional_Originators nvarchar(1000),
Improvement_Area nvarchar(100),
Cost_Saving_Amnt money,
Cost_Saving_Dsc nvarchar(300),
CreatedDate smalldatetime,
CreatedBy nvarchar(100),
ModifiedDate smalldatetime,
ModifiedBy nvarchar(100),
Deleted bit,
PRIMARY KEY (pRequestID))

create table dbo.SMI_Request_Attachment_Image(
pAttachmentID  int identity (1,1) NOT NULL, 
fRequestID int not null,
[Name] nvarchar(300),
[ContentType] nvarchar(150),
[Size] int,
CreatedDate smalldatetime,
CreatedBy nvarchar(100),
Data varbinary(max),
PRIMARY KEY (pAttachmentID),
CONSTRAINT FK_RqstAttachment_Img FOREIGN KEY (fRequestID) REFERENCES SMI_Request(pRequestID))

create table dbo.SMI_Request_Attachment_Doc(
pAttachmentID  int identity (1,1) NOT NULL,
fRequestID int not null,
[Name] nvarchar(300),
[ContentType] nvarchar(150),
[Size] int,
CreatedDate smalldatetime,
CreatedBy nvarchar(100),
Data varbinary(max),
PRIMARY KEY (pAttachmentID),
CONSTRAINT FK_RqstAttachment_Doc FOREIGN KEY (fRequestID) REFERENCES SMI_Request(pRequestID))

create table [dbo].[SMI_Lookup](
	[pLookupID] [int] IDENTITY(1,1) NOT NULL,
	LookupKey nvarchar(100),
	[Value] [nvarchar](100) NULL,
	[Text] [nvarchar](100) NULL,
	[Seq] [smallint] NULL,
	[CreatedDate] [smalldatetime],
	[CreatedBy] [nvarchar](100),
	[ModifiedDt] [smalldatetime] NULL,
	[ModifiedBy] [nvarchar](100) NULL,
	PRIMARY KEY (pLookupID)
)

insert into SMI_Lookup(LookupKey,Value,Text,Seq,CreatedDate,CreatedBy)
select 'ImprovementArea','Automation','Automation',1,getdate(),'OLEGR' union
select 'ImprovementArea','Energy Savings','Energy Savings',2,getdate(),'OLEGR' union
select 'ImprovementArea','Ergonomics','Ergonomics',3,getdate(),'OLEGR' union
select 'ImprovementArea','Error Proofing','Error Proofing',4,getdate(),'OLEGR' union
select 'ImprovementArea','Material Cost Savings','Material Cost Savings',5,getdate(),'OLEGR' union
select 'ImprovementArea','Material Handling Improvement','Material Handling Improvement',6,getdate(),'OLEGR' union
select 'ImprovementArea','New Materials','New Materials',7,getdate(),'OLEGR' union
select 'ImprovementArea','Process Change','Process Change',8,getdate(),'OLEGR' union
select 'ImprovementArea','Quality Improvement','Quality Improvement',9,getdate(),'OLEGR' union
select 'ImprovementArea','Safety','Safety',10,getdate(),'OLEGR' union
select 'ImprovementArea','Software Improvement','Software Improvement',11,getdate(),'OLEGR' union
select 'Division','BED','BED',1,getdate(),'OLEGR' union
select 'Division','BGD','BGD',2,getdate(),'OLEGR' union
select 'Division','BLA','BLA',3,getdate(),'OLEGR' union
select 'Division','BMC','BMC',4,getdate(),'OLEGR' union
select 'Division','BWC','BWC',5,getdate(),'OLEGR' union
select 'Division','KKP','KKP',6,getdate(),'OLEGR' union
select 'Division','LON','LON',7,getdate(),'OLEGR' union
select 'Division','THS','THS',8,getdate(),'OLEGR' union
select 'Division','UAE','UAE',9,getdate(),'OLEGR' union
select 'Stage','Draft','Draft',1,getdate(),'OLEGR' union
select 'Srage','Owner Review','Owner Review',2,getdate(),'OLEGR' union
select 'Stage','Feasibility Assessment','Feasibility Assessment',3,getdate(),'OLEGR' union
select 'Stage','Development','Development',4,getdate(),'OLEGR' union
select 'Stage','Requires More Information','Requires More Information',5,getdate(),'OLEGR' union
select 'Stage','Implemented','Implemented',6,getdate(),'OLEGR' union
select 'Stage','Not Feasible','Not Feasible',7,getdate(),'OLEGR' 

Go



