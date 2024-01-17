REM Skript: hauptmenue.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM Hauptmenü zur Benutzung der Datenbank
REM

CL SCR

PROMPT Bibliothek-Datenbank
PROMPT
PROMPT Hauptmenue
PROMPT =============================
PROMPT
PROMPT
PROMPT (1) Datenbank-Struktur (erstellen)
PROMPT
PROMPT (2) Daten (manipulieren)
PROMPT
PROMPT (3) Daten (lesen)
PROMPT
PROMPT (0) Programm (beenden)
PROMPT
PROMPT
ACCEPT eingabe PROMPT "Ihre Eingabe: "

@C:\app\oracle\project\scripte\menue\&eingabe..sql

