# range einsetzen
# for i in range(0,5):
#     # print(i) #0 1 2 3 4 ohne die letzte Zahl
#     # horizontale Ausgabe :
#     print (i, end= " ")
    
# range mit andere Zahlen
# for i in range(5,0,-1) : #5 4 3 2 1
#     print(i)
    
# range mit einem Parameter
# for i in range(4): # wird mit 0 begonnen bis 4-1 , also 0 1 2 3
#     print(i)


# list comprehension
# l = [1,2,3,4,5]
# print(l) #[1, 2, 3, 4, 5]

# l = [i for i in range(5)] 
# print(l) #[0, 1, 2, 3, 4]
# l =[i*2 for i in range(5)]
# print(l) #[0, 2, 4, 6, 8]

# zahlen ous range(10) übernehmen, falls sie gerade Zahlen sind # [0,2,4,6,8]
# l = [i for i in range(10) if i% 2== 0]
# print(l) #[0, 2, 4, 6, 8]

# werte mit externe Liste vergleichen und übernehmen, falls gerade Zahlen sind
# l1 = [1,2,3,4,5,6,7]
# l2 = [i for i in l1 if i%2 == 0]
# print(l2) #[2, 4, 6]

# werte mit String vergleichen und kleinbuchstaben übernehmen
# name = "AHMAD"
# l = [name.lower() for i in name]
# print(l) #['ahmad', 'ahmad', 'ahmad', 'ahmad', 'ahmad']

name = "Ahmad123."
l = [i.lower() for i in name if i.isalpha()]
print(l) #['a', 'h', 'm', 'a', 'd']



