import turtle as t # wir importieren sämtliche fkt aus turtle
from time import sleep # von Modul time importieren wir die fkt sleep

def flagge_rechteck_circle (breite, hohe, c, pause, c_color,l_farben, land, x_start, y_start,p_color, ba_color):
    
    t.title("Flagge von : " + land)
    t.shape("turtle")
    t.setpos(x_start,y_start)
    for ii in range(len(l_farben)):
        t.begin_fill()
        t.color(l_farben[ii])
        t.bgcolor(ba_color)
        for i in range(2) :
            t.forward(breite) 
            t.left(90)
            t.forward(hohe)
            t.left(90)
        t.end_fill()
        
        # circle
        t.penup()
        t.left(90)
        t.forward(hohe/2)
        t.right(90)
        t.color("yellow")
        t.forward(breite/3*2)
        t.left(90)
        t.pendown()
        t.color(c_color)
        t.begin_fill()
        t.circle(70)
        t.end_fill()
        
        t.hideturtle()
        t.exitonclick()
#japan
flagge_rechteck_circle(400,200,50,0,"red",["white"],"japan",-250,0,"red","black")

    