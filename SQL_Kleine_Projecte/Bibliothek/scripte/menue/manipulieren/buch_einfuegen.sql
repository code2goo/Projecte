REM Skript: glas_einfuegen.sql
REM
REM Autor: Ahmad, abdul Hamid
REM Erstellungsdatum: 03.05.2023
REM
REM Inhalt:
REM interaktive Abfrage der Werte für ein neues Buch,
REM wobei der Primärschlüssel automatisiert vergeben wird.
REM

REM set echo on
REM cl scr

ACCEPT titel PROMPT "Name des Buches: "
ACCEPT autor PROMPT "Autor: "
ACCEPT verlag PROMPT "Verlag: "
ACCEPT genre PROMPT "Genre: "
ACCEPT sprache PROMPT "Sprache: "
ACCEPT isbn_ID PROMPT "ISBN_ID: "
ACCEPT erscheinungsjahr PROMPT "Erscheinungsjahr: "
ACCEPT seitenzahl PROMPT "Seitenzahl: "
ACCEPT buch_status PROMPT "Buch_status: "


INSERT INTO tab_Buch (buch_ID, titel, autor, verlag, genre, sprache, isbn_ID, erscheinungsjahr, seitenzahl, buch_status)
   VALUES          	 ((SELECT nvl(max(buch_ID) +  1, 1) FROM tab_Buch),'&titel','&autor', '&verlag', '&genre', '&sprache', '&isbn_ID', &erscheinungsjahr, &seitenzahl,'&buch_status');

COMMIT;

@C:\app\oracle\project\scripte\menue\manipulieren\menue_manipulation.sql
