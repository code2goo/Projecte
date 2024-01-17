import turtle as t # wir importieren sämtliche fkt aus turtle
from time import sleep # von Modul time importieren wir die fkt sleep


def colored_star(breite, hohe,bg_Color, pColor):
    t.color(pColor)
    t.width(2)
    t.fillcolor(bg_Color)
    t.begin_fill()
    for star in range(7):
        t.forward(breite)
        # sleep(5)
        t.right(hohe)
        # sleep(5)
        t.forward(breite)
        # sleep(5)
        t.right(51.5 - hohe)  
        # sleep(5)
    t.end_fill()
    t.exitonclick()
colored_star(60,90,"white","red" )


# def drawStar(n, l):
#     """Get turtle t to draw a star with n sides at l length"""
#     for i in range(n):
#         t.forward(l)
#         t.left(36)
#         t.forward(l)
#         t.left(36)

# drawStar(5, 100)

# t.exitonclick()