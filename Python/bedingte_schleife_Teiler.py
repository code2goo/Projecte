    # zahl = 5
    # i = 0
    # while i <= zahl :
    #     print (i)
    #     i += 1
        
# Übung die Teiler-Aufgabe-Version1 mit Hilfe einer beringten Schleife lösen
zahl = int(input("eine zahl eingeben "))
i = 1
ausgabe =""
while i<=zahl :
    if zahl % i == 0 :
        ausgabe += str(i) + " "
    i += 1
print (ausgabe) #eine zahl eingeben:24 ----> 1 2 3 4 6 8 12 24 
