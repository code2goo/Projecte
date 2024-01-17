REM Skript: bücher_ausgeben.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM Ausgabe aller Bücher
REM

set echo on
cl scr


PROMPT Bibliothek-Datenbank
PROMPT
PROMPT Menue - Bücher ausgeben
PROMPT =============================
PROMPT

SELECT buch_ID, titel, autor, verlag, genre, sprache, isbn_ID, erscheinungsjahr, seitenzahl, buch_status
  FROM tab_Buch;

PAUSE ENTER drücken

@C:\app\oracle\project\scripte\menue\lesen\menue_lesen.sql

