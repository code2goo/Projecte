REM Skript: ausleihe_ausgeben.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM Ausgabe aller Ausleihe
REM

CL SCR

PROMPT Bibliothek-Datenbank
PROMPT
PROMPT Menue - Ausleihe ausgeben
PROMPT =============================
PROMPT

SELECT ausleihen_ID, datum_ausleihen, datum_rockgabe
  FROM tab_Ausleihen;

PAUSE ENTER drücken

@C:\app\oracle\project\scripte\menue\lesen\menue_lesen.sql

