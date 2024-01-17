name = "ahmad#abdul#hamid"
# ziel: in vorname, vatername, familiename zu trennen

# dazu die split-Fkt
l_name = name.split("#")
print(l_name) #['ahmad', 'abdul', 'hamid']

print(f"dein Vorname: {l_name[0]} Vatername: {l_name[1]} und dein Familiename: {l_name[2]}")
