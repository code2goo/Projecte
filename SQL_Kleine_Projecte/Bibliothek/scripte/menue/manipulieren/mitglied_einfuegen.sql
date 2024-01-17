REM Skript: cocktail_einfuegen.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM interaktive Abfrage der Werte für einen neuen Mitglied,
REM wobei der Primärschlüssel automatisiert vergeben wird.
REM


ACCEPT anrede PROMPT "Anrede des Mitgliedes: "
ACCEPT vorname PROMPT "Vorname des Mitgliedes: "
ACCEPT nachname PROMPT "Nachname des Mitgliedes: "
ACCEPT m_Alter PROMPT "Alter des Mitgliedes (Default: 18): " DEFAULT 18
ACCEPT strasse PROMPT "Strasse, wo wohnt des Mitgliedes: "
ACCEPT Haus_nr PROMPT "Haus_nr , wo wohnt des Mitgliedes: "
ACCEPT plz PROMPT "Postleitzahl , wo wohnt des Mitgliedes: "
ACCEPT stadt PROMPT "Stadt , wo wohnt des Mitgliedes: "
ACCEPT telefon PROMPT "Telefon des Mitgliedes: "
ACCEPT email PROMPT "Email des Mitgliedes: "


INSERT INTO tab_Mitglied ( mitglied_ID, anrede, vorname, nachname, m_Alter, strasse, Haus_nr, plz, stadt, telefon, email)
   VALUES 				 ((SELECT nvl(max(mitglied_ID) +  1, 1) FROM tab_Mitglied),'&anrede','&vorname','&nachname',&m_Alter,'&strasse',&Haus_nr,&plz,'&stadt',&telefon,'&email');
   
COMMIT;

@C:\app\oracle\project\scripte\menue\manipulieren\menue_manipulation.sql
