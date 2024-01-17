

adresse1 = "Brunnenstr .13,13355 Berlin Deutschland"
adresse2 ="Berlinerstrasse.131A,1405 Postdam England"
# ziel: Strasse , HausNr , Plz , Ort auseinander zu trennen
#Vorgehensweise: Punktposition ermitteln und unter pp speichern
#                kommaposition ermitteln und unter kp speichern
#                Leerzeichenpos ermitteln und unter lzp1 speichern
#                Leerzeichenpos ermitteln und unter lzp2 speichern

pp = adresse1.find(".")
kp = adresse1.find(",")
lzp1 = adresse1.find(" ")
lzp2 = adresse1.find("", lzp1+1)

strasse = adresse1[0:pp]
#print(strasse)

# wir brachen Text von Punktposition +1 bis Kommaposition-1
hnr = adresse1[pp+1:kp]
#print(hnr)

# wir brauchen Text von Kommaposition +1 bis erste LZP -1
plz = adresse1[kp+1:lzp1]
#print(plz)

# wir brauchen Text  LZP1 +1 bis LZP2-1
ort = adresse1[lzp1+1:lzp2]
#print(ort)

# wir brauchen Text von LZP2 +1 bis Ende
land = adresse1[lzp2+1:]
print(land)

# Übung
#adresse1 = "Brunnenstr .13,13355 Berlin Deutschland"


#Email von Musab
#musab.muneer.bsaiso@gmail.com

