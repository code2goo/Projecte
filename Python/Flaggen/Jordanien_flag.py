import turtle as t # wir importieren sämtliche fkt aus turtle
from time import sleep # von Modul time importieren wir die fkt sleep



def beliebige_zacken(zacken,farbe_innen,schritt,farbe_aussen,start_x,start_y):
    t.penup()
    t.setpos(start_x,start_y)
    t.pencolor(farbe_aussen)
    t.fillcolor(farbe_innen)
    t.begin_fill()
    t.penup()
    for i in range(zacken):
        t.forward(schritt)
        t.pendown()
        t.right(2*360/zacken)
        t.forward(schritt)
        t.left(360/zacken)
    t.end_fill()
    t.hideturtle()
    t.exitonclick()

# beliebige_zacken(7,"white",10,"black",0,0)

def flagge_rechteck_dreiecke (hohe, color) :
    t.begin_fill()
    t.color(color)
    t.right(30)
    # sleep(1)
    t.forward(hohe*3)
    t.right(120)
    t.forward(hohe*3)
    # sleep(1)
    t.right(120)
    t.forward(hohe*3)
    # sleep(1)
    t.end_fill()
    beliebige_zacken(7,"white",9,"black",-140,120)
    t.hideturtle()
    t.exitonclick()
# flagge_rechteck_dreiecke(50,"red")

def flagge_rechteck_zeichnen_v2 (breite, hohe, l_farben,ausrichtung, land, x_start, y_start,p_color, ba_color):
    if ausrichtung == "v".lower() or ausrichtung =="h".lower():
        t.title("Flagge von : " + land)
        t.shape("turtle")
        t.setpos(x_start,y_start)
        for ii in range(len(l_farben)):
            t.begin_fill()
            t.color(l_farben[ii])
            t.bgcolor(ba_color)
            # t.title(land) 
            for i in range(2) :
                t.forward(breite) 
                t.left(90)
                # sleep(1)
                t.forward(hohe)
                # sleep(1)
                t.left(90)
                # sleep(1)
            t.end_fill()
            
            if ausrichtung == "v" :
                t.setpos(x_start+breite*(ii+1), y_start)
            if ausrichtung == "h" :
                t.setpos(x_start, y_start+hohe*(ii+1))
        if land == "Sudan" :
            flagge_rechteck_dreiecke(hohe,"green")
        if land == "jordan" :
            # beliebige_zacken(7,"white",5,"black",-140,120)
            flagge_rechteck_dreiecke(hohe,"red")
            
        t.hideturtle()
        t.exitonclick()
flagge_rechteck_zeichnen_v2(400,75,["green","white","black"],"h","jordan", -200, 0, "red", "#E5F0C6")


#italy
# flagge_rechteck_zeichnen_v2(50,100,0,["green","white","red"],"v","italy",0,0, "black", "gray")

#Österreich
# flagge_rechteck_zeichnen_v2(150,50,0,["red","white","red"],"h","Österreich",0,0, "red", "gray")

#ukraine
# flagge_rechteck_zeichnen_v2(300,100,0,["yellow","blue"],"h","ukraine", -150, 0, "red", "gray")

#palestine
# flagge_rechteck_zeichnen_v2(400,75,["green","white","black"],"h","palestine", -200, 0, "red", "#E5F0C6")
#Sudan
# flagge_rechteck_zeichnen_v2(400,75,0,["black","white","red"],"h","Sudan", -200, 0, "red", "#E5F0C6")
#Jordan
# flagge_rechteck_zeichnen_v2(400,75,0,["green","white","black"],"h","jordan", -200, 0, "red", "#E5F0C6")

