import my_modules

l = float(input("Enter the length of the House: "))
w = float(input("Enter the width of the house: "))
rad = float(input("Enter the radius of the circle: "))

area= my_modules.house_area(l,w)
print(f"The area of the rectangle is: {area}")
circum= my_modules.circ_circum(rad)
print(f"The circumference of the circle is: {circum}")