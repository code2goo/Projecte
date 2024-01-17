import math


def verdopplen(zahl):
    return zahl*2

def halbieren_mit_abrunden(zahl):
    return math.floor(zahl/2) 

def ägypt_mult(zahlr, zahll):
    erg = 0
    while(zahll > 0):
        if not zahll % 2 == 0 :
            erg += zahlr
        zahlr = verdopplen(zahlr)
        zahll = halbieren_mit_abrunden(zahll)
    return erg  
#testen
print(ägypt_mult(7,5)) 



def teiler(zahl):
    erg=""
    for i in range(1,zahl): 
        if zahl%i == 0 :
            erg+= str(i) + " , "
    # am ende die Ergebnis kommt keine komma"," 
    erg = erg[:len(erg)-2] 
    return erg

#testen
# print(teiler(24))



