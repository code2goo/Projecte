REM Skript: einfuegen.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM Löschen und Einfügen von Test-Datensätzen
REM 

SET ECHO off
CL SCR

REM Tabellen leeren
REM ================


DELETE FROM tab_Bibliothek;

DELETE FROM tab_Ausleihen;

DELETE FROM tab_Mitglied;

DELETE FROM tab_Buch;

COMMIT;



REM Test-Datensätze einfügen
REM ========================

REM Buch

INSERT INTO tab_Buch(buch_ID, titel, autor, verlag, genre, sprache, isbn_ID, erscheinungsjahr, seitenzahl, buch_status)
   VALUES          	 (1,'Der dunkle Turm', 'Stephen King','Heyne Verlag','Fantasy','Deutsch','3453878067',1990,848,'unverfuegbar');

INSERT INTO tab_Buch (buch_ID, titel, autor, verlag, genre, sprache, isbn_ID, erscheinungsjahr, seitenzahl, buch_status)
   VALUES          	 (2, '1984', 'George Orwell','Ullstein Verlag','Dystopie','Deutsch','9783548267453', 1949, 400, 'verfügbar');
   
INSERT INTO tab_Buch (buch_ID, titel, autor, verlag, genre, sprache, isbn_ID, erscheinungsjahr, seitenzahl, buch_status)
   VALUES          	 (3,'Harry Potter', ' J.K. Rowling', 'Carlsen Verlag GmbH', 'Fantasy', 'Deutsch', '3551354015', 1998, 336, 'unverfügbar');

INSERT INTO tab_Buch (buch_ID, titel, autor, verlag, genre, sprache, isbn_ID, erscheinungsjahr, seitenzahl, buch_status)
   VALUES          	 (4, 'Die Verwandlung', ' Franz Kafka',' Fischer Verlag','Klassiker, Philosophie','Deutsch','9783596901909', 1915, 88, 'verfügbar');

REM Mitglied

INSERT INTO tab_Mitglied (mitglied_ID, anrede, vorname, nachname, m_Alter ,strasse, Haus_nr , plz, stadt, telefon, email)
   VALUES              	 (1, 'Herr', 'Ahmad','abdul Hamid',33, 'Kampstrasse',22, 44369,'Dortmund',01234567898,'ahmad@gmail.com');
 
INSERT INTO tab_Mitglied (mitglied_ID, anrede, vorname, nachname, m_Alter, strasse, Haus_nr, plz, stadt, telefon, email)
   VALUES              	 (2, 'Herr', 'Omar', 'abdul Hamid', 12, 'Kampstrasse', 22, 44369, 'Dortmund', 01234567898, 'omar@gmail.com');

REM Ausleihen

INSERT INTO tab_Ausleihen (ausleihen_ID,a_mitglied_ID, datum_ausleihen, datum_rockgabe)
   VALUES                 (1, 2,'03.05.2023', '05.05.2023');

INSERT INTO tab_Ausleihen (ausleihen_ID,a_mitglied_ID, datum_ausleihen, datum_rockgabe )
   VALUES                 (5, 1, '01,05,2023', '08.05.2023');

   




COMMIT;

@C:\app\oracle\project\scripte\menue\struktur\menue_struktur.sql

