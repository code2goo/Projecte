REM Skript: glas_einfuegen.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM interaktive Abfrage der Werte für eine neue Ausleihe,
REM wobei der Primärschlüssel automatisiert vergeben wird.
REM


ACCEPT titel PROMPT "Datum ausleihen des Buches: "
ACCEPT titel PROMPT "Datum rockgabe des Buches: "


INSERT INTO tab_Ausleihen (ausleihen_ID, datum_ausleihen, datum_rockgabe)
   VALUES          	 ((SELECT nvl(max(buch_ID) +  1, 1) FROM tab_Buch), '&datum_ausleihen', '&datum_rockgabe');

COMMIT;

@C:\app\oracle\project\scripte\menue\manipulieren\menue_manipulation.sql
