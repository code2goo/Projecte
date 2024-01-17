


with open("personennnnnnnn.txt","w") as f : #im Schreibmodus öffnen
     f.write("ahmad\n")           
     f.write("bsaiso\n")
print("Auftrag erledigt")


# übung in der vorhandene Datei noch
#Eva
#Wintergarten
#eur Vorname
#eur Nachname schreiben
with open("person2.txt","w") as f : #im Schreibmodus öffnen
     f.write("Eva\n")           
     f.write("Wintergarten\n")
     f.write("Ahmad\n")           
     f.write("abdul Hamid\n")
print("Auftrag erledigt")

with open("person2.txt","a") as f : #im appendmodus öffnen
     f.write("hello")
     f.write("Eva\n")           
     f.write("Wintergarten\n")
     f.write("Ahmad\n")           
     f.write("abdul Hamid\n")
print("Auftrag erledigt")

