import turtle as t
from time import sleep

# ein Rechteck zeichnen
def rechteck_zeichnen(breite,hoehe, farbe_innen, farbe_rahmen,start_x, start_y):
    t.penup()
    t.setpos(start_x,start_y)
    t.pendown()
    t.begin_fill()
    t.pencolor(farbe_rahmen)
    t.fillcolor(farbe_innen)
    
    for i in range(2) :
        t.forward(breite) 
        t.left(90)
        # sleep(1)
        t.forward(hoehe)
        # sleep(1)
        t.left(90)
        # sleep(1)
    t.end_fill()   

def   kreis_zeichnen(radius, innen_farbe,rahmen_farbe, start_x, start_y):
    t.penup()
    t.setpos(start_x,start_y) 
    t.pendown()    
    t.begin_fill()
    t.pencolor(rahmen_farbe)
    t.fillcolor(innen_farbe)
    #kreis zeichnen
    t.circle(radius)
    t.end_fill()
    sleep(3)

def beliebige_zacken(zacken,farbe_innen,schritt,farbe_aussen,start_x,start_y):
    t.penup()
    t.setpos(start_x,start_y)
    t.pencolor(farbe_aussen)
    t.fillcolor(farbe_innen)
    t.begin_fill()
    t.pendown()
    for i in range(zacken):
        t.forward(schritt)
        t.right(2*360/zacken)
        t.forward(schritt)
        t.left(360/zacken)
    t.end_fill()    

   
#test
#rechteck_zeichnen(250,150, "red", "black", -150,-100)  
#test 
#kreis_zeichnen(80,"red","white",-100,-100)
#kreis_zeichnen(60,"white","white",-75,-80)

def tuerkei_flagge(\
    radius, breite, hoehe,start_x_kr, start_y_kr, farbe_innen_rechteck,\
    farbe_rahemen_rechteck): 
 
    rechteck_zeichnen(breite,hoehe, "red", "black", \
                start_x_kr-(1/3*(breite-radius)),start_y_kr-(1/6)*(hoehe-radius)) 
    kreis_zeichnen( radius,  "white"  ,"red",start_x_kr,start_y_kr)
    kreis_zeichnen(radius-(radius*.2),"red","red",start_x_kr+ (radius/4),start_y_kr+(radius/5))
    beliebige_zacken(5,"white",(radius/4),"white",start_x_kr+radius,start_y_kr+1.2*radius)
    t.hideturtle()
    t.exitonclick()
#test Türkei-Flagge   
breite=250 #125 #500
hoehe=100 #50 #200
radius=breite/6     

tuerkei_flagge(radius,breite,hoehe,0,0, "red","black",)