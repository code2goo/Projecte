REM Skript: mitglieder_ausgeben.sql
REM
REM Autor: Steffen Wenck
REM Erstellungsdatum: 25.05.2019
REM
REM Inhalt:
REM Ausgabe aller Mitglieder
REM

CL SCR

PROMPT Bibliothek-Datenbank
PROMPT
PROMPT Menue - Mitglieder ausgeben
PROMPT =============================
PROMPT

SELECT mitglied_ID, anrede, vorname, nachname, m_Alter, strasse, Haus_nr, plz, stadt, telefon, email
  FROM tab_Mitglied;

PAUSE ENTER drücken

@C:\app\oracle\project\scripte\menue\lesen\menue_lesen.sql

