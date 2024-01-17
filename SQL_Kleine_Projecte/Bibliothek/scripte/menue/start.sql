REM Skript: start.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM interaktive Anmeldung an die Datenbank,
REM interaktive Eingabe des Projektpfades und
REM Aufrufen des Hauptmenüs: hauptmenue.sql
REM 

SET ECHO OFF
CL SCR


REM Anmelden

ACCEPT benutzername PROMPT "Eingabe des Benutzernamens (Default: HR1): " DEFAULT HR1

ACCEPT passwort PROMPT "Eingabe des Passwortes (Default: oracle_4U): " DEFAULT oracle_4U HIDE

ACCEPT identify PROMPT "Eingabe der Datenbank (Default: DESKTOP-49SRBSN): " DEFAULT DESKTOP-49SRBSN
 
ACCEPT datenbank PROMPT "Eingabe der Datenbank (Default: XEPDB1): " DEFAULT XEPDB1

CONNECT &benutzername/&passwort@&identify/&datenbank

REM hr1/oracle_4U@DESKTOP-49SRBSN/xepdb1


REM Eingabe des Projektpfades

ACCEPT pfad PROMPT "Eingabe des Projektpfades (Default: C:\app\oracle\project\scripte\menue): " DEFAULT C:\app\oracle\project\scripte\menue


REM Menü aufrufen

@C:\app\oracle\project\scripte\menue\hauptmenue.sql
