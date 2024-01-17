# split Methode

name = "ahmad abdul Hamid"
print(name.split()) #['ahmad', 'abdul', 'Hamid']

name = "ahmad-abdul-Hamid"
print(name.split("-")) #['ahmad', 'abdul', 'Hamid']

name = "ahmad,abdul,Hamid"
print(name.split(",")) #['ahmad', 'abdul', 'Hamid']

name = "ahmad- abdul-Hamid"
print(name.split("-")) #['ahmad', ' abdul', 'Hamid']

# join für string-Ausdruck

name= "ahmad"
print("-".join(name)) # a-h-m-a-d

# ein Teil-Ausdruck innerhalb eines string vorhanden ?
strasse = "Brunnerstr.13 13355 Berlin"
print("B" in strasse) # True
print("13" in strasse) # True
print("14" not in strasse) # True

# find liefert die position des Suchbegriffes innerhalb der Zeichenkette
print(strasse.find("B")) # 0
print(strasse.find("Berlin")) # 20
print(strasse.find(" ")) # 13
print(strasse.find("x")) # -1

# mit count zählt man wieoft ein Suchbegriff innerhalb einer Zk gefunden wird.
# wieoft ist Berlin in der Strasse vorhanden
print(strasse.count("Berlin")) #1
print(strasse.count("13")) #2

# replace 2 varianten
# eine Änderung
name = "Ahmad"
name = name.replace("a","@",1)
print(name) #Ahm@d

# jede Änderung
name = "ahmad"
name = name.replace("a","A")
print(name) #AhmAd

# strip-Methode
name = "     Ahmad abdul Hamid   "
print (len(name)) #25
name = name.strip()
print (len(name)) #17

# Übung 
name = "Ahmad#abdul#Hamid"
Adresse = "berlinerstrasse 14 14105 Berlin"
# Aufgabe vorname, Vatername, Familiename zu trennen
name_getrennt = name.split("#")
print (name_getrennt)
vor_name =name_getrennt[0]
vater_name = name_getrennt[1]
nach_name = name_getrennt[2]
#print ("Vorname: ",vor_name,"vatername: ", vater_name,"Nachname: ", nach_name)
print(f" Vorname: {vor_name} vatername: {vater_name} Nachname: {nach_name}")

# strasse, HNr, pls, Ort zu trennen
# musab.muneer.bsaiso@gmail.com


