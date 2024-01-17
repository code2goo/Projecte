REM Skript: tabellen.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM Löschen und Erstellen der Tabellen
REM 

SET ECHO off
CL SCR


REM Tabellen löschen
REM ================

DROP TABLE tab_Bibliothek;
DROP TABLE tab_Ausleihen;
DROP TABLE tab_Mitglied;
DROP TABLE tab_Buch;


REM Tabellen erstellen
REM ==================


CREATE TABLE tab_Buch
(
	buch_ID				number,
	titel				varchar2(90)		CONSTRAINT nn_titel				NOT NULL,
	autor				varchar2(90)		CONSTRAINT nn_autor	 			NOT NULL,
	verlag				varchar2(90)		CONSTRAINT nn_verlag  			NOT NULL,
	genre				varchar2(40)		CONSTRAINT nn_genre  			NOT NULL,
	sprache				varchar2(40)		CONSTRAINT nn_sprache  			NOT NULL,
	isbn_ID				varchar2(100)		CONSTRAINT uni_isbn_ID 			UNIQUE
											CONSTRAINT nn_isbn_ID  			NOT NULL,
	erscheinungsjahr	number				CONSTRAINT nn_erscheinungsjahr 	NOT NULL,
	seitenzahl			number				CONSTRAINT nn_seitenanzahl  	NOT NULL,
	buch_status			varchar2(20)		CONSTRAINT nn_buch_status 		NOT NULL,
	CONSTRAINT  		pk_buch_ID PRIMARY KEY(buch_ID)
);
describe tab_Buch

CREATE TABLE tab_Mitglied
(
	mitglied_ID			number,
	anrede				varchar2(4)			CONSTRAINT nn_anrede  			NOT NULL,
	vorname				varchar2(20)		CONSTRAINT nn_vorname 			NOT NULL,
	nachname			varchar2(20)		CONSTRAINT nn_nachname			NOT NULL,
	m_Alter				number DEFAULT 18	CONSTRAINT chk_tab_Mitglied_m_Alter CHECK(m_Alter >= 12)
											CONSTRAINT nn_alter  			NOT NULL,
	strasse				varchar2(30)		CONSTRAINT nn_strasse  			NOT NULL,
	Haus_nr				varchar2(10)		CONSTRAINT nn_Haus_nr  			NOT NULL,
	plz					number				CONSTRAINT nn_plz				NOT NULL,
	stadt				varchar2(30)		CONSTRAINT nn_stadt  			NOT NULL,
	telefon				number				CONSTRAINT nn_telefon			NOT NULL,
	email				varchar2(100),
	CONSTRAINT			pk_mitglied_ID PRIMARY KEY(mitglied_ID)
);
describe tab_Mitglied

CREATE TABLE tab_Ausleihen
(
	ausleihen_ID		number,
	a_mitglied_ID		number				CONSTRAINT uni_a_mitglied_ID UNIQUE
											CONSTRAINT nn_a_mitglied_ID  NOT NULL,
	datum_ausleihen		date				CONSTRAINT nn_datum_ausleihen 	NOT NULL,
	datum_rockgabe		date				CONSTRAINT nn_datum_rockgabe    NOT NULL,
	CONSTRAINT			pk_ausleihen_ID PRIMARY KEY(ausleihen_ID),
	CONSTRAINT 			fk_a_mitglied_ID FOREIGN KEY(a_mitglied_ID) REFERENCES 	tab_Mitglied(mitglied_ID)
);
describe tab_Ausleihen


CREATE TABLE tab_Bibliothek
(
	bibliothek_Name		varchar2(100)		CONSTRAINT nn_bibliothek_Name 	NOT NULL,
	bibliothek_Ort		varchar2(40)		CONSTRAINT nn_bibliothek_Ort 	NOT NULL,
	b_buch_ID       	number,
	b_ausleihen_ID		number,
	CONSTRAINT 		fk_b_buch_ID FOREIGN KEY(b_buch_ID) REFERENCES tab_Buch(buch_ID),
	CONSTRAINT 		fk_b_ausleihen_ID FOREIGN KEY(b_ausleihen_ID) REFERENCES  tab_Ausleihen(ausleihen_ID),
	CONSTRAINT		pk_Bibliothek PRIMARY KEY(b_buch_ID, b_ausleihen_ID)
);
describe tab_Bibliothek

@C:\app\oracle\project\scripte\menue\struktur\menue_struktur.sql
