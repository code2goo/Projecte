l_orte =["Berlin", "München"]
# Listen nicht anderes wie objekten
# eine Liste ist ein Objekt
# ein Objekt verfügt über Methoden, um Aktionen auszuführen

l_orte.insert(2, "Ulm")
print(l_orte) #['Berlin' , 'Ulm', 'München']

#l_orte.sort()
#print(l_orte) #['Berlin', 'München', 'Ulm']
l_orte.sort(key=lambda x:len(x))
print(l_orte) #['Ulm', 'Berlin', 'München']




