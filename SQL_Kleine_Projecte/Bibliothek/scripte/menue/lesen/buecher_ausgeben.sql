REM Skript: b�cher_ausgeben.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM Ausgabe aller B�cher
REM

set echo on
cl scr


PROMPT Bibliothek-Datenbank
PROMPT
PROMPT Menue - B�cher ausgeben
PROMPT =============================
PROMPT

SELECT buch_ID, titel, autor, verlag, genre, sprache, isbn_ID, erscheinungsjahr, seitenzahl, buch_status
  FROM tab_Buch;

PAUSE ENTER dr�cken

@C:\app\oracle\project\scripte\menue\lesen\menue_lesen.sql

