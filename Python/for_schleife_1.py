    # for i in range(1,5) :
    #     print(i) # 1 .. 4
    # for i in range(1,10,2):
    #     print(i) #1 3 5 7 9

# mit Variablen
anfang = 1
ende = 10
    # for i in range(anfang,ende+1) :
    #     print(i) 
    
schrittweite = 3 
    # for i in range(anfang,ende,schrittweite) :
    #     print(i) #1 4 7


liste = [1,2,3,4,5]
    # for i in liste :
    #     print(i)

name = "Ahmad"
    # for i in name:
    #     print(i) # A h m a d
        
# Übung 1.
#eine Zahl von Anwender über input aufnehmen Z.B 10
#mit print ausgeben, ob die zahl eine gerade zahl ist oder nicht
    # zahl = int(input("zahl eingeben: "))
    # if zahl % 2 == 0 :
    #     print("gerade Zahl!")
    # else :
    #     print("keine gerade Zahl!")
    # print("end")


# Übung 2.
#eine Zahl von Anwender über input aufnehmen Z.B 10
#mit print sämtlich teiler ausgeben (Teiler in string speichern)
    # zahl = int(input("zahl eingeben: "))
    # ausgabe = ""
    # for i in range(1,zahl+1) :
    #     if zahl % i == 0 :
    #         #ausgabe = ausgabe + str(i)+ " "
    #         ausgabe += str(i) +" " # alte Bestand mit einbeziehen
    # print(ausgabe )    
#mit print sämtlich teiler ausgeben (Teiler in Liste speichern)

zahl = int(input("zahl eingeben: "))
liste = []
for i in range(1,zahl+1) :
    if zahl % i == 0 :
        liste.append(i)
#1)
print(liste)    

#2)
for i in liste:
    print(i)

