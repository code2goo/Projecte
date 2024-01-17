REM Skript: menue_lesen.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM Menü zur Ausgabe aller Bücher, Mitglieder und
REM Ausleihen
REM

CL SCR

PROMPT Cocktail-Datenbank
PROMPT
PROMPT Menue - Daten lesen
PROMPT =============================
PROMPT
PROMPT
PROMPT (1) Buecher (buecher_ausgeben)
PROMPT
PROMPT (2) Mitglieder (mitglieder_ausgeben)
PROMPT
PROMPT (3) Ausleihen (ausleihen_ausgeben)
PROMPT
PROMPT (0) Hauptmenü (zurueck)
PROMPT
PROMPT
ACCEPT eingabe PROMPT "Ihre Eingabe: "

@C:\app\oracle\project\scripte\menue\lesen\&eingabe..sql

