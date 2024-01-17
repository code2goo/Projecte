l = [10,20,30,40,50,60,70,80,90]

# 10 bis 40 ausgeben

#print(l[0:4]) #[10, 20, 30, 40]
#print(l[:4]) #
#print(l[:4:1]) #

#kompletter Liste mit 2er Schritt (sprung)
#print(l[::2]) # [10, 30, 50, 70, 90]

#kompletter Liste mit 3er Schritt (sprung)
#print(l[::3]) # [10, 40, 70]        

#komplette Liste von 90 bis 50 ausgeben in einzer Schritt (keine Sprünge)
#print(l[-1:-6:-1]) #[90, 80, 70, 60, 50]

#komplette Liste von 90 bis 50 ausgeben in 2er Schritt (keine Sprünge)
print(l[-1:-6:-2]) #[90, 70, 50]

