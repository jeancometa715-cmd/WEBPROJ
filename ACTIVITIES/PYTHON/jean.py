print("======================================")
print("         BUS FARE CALCULATOR")
print("======================================")

passenger = input("Enter Passenger Name: ")
destination = input("Enter Destination: ")
passenger_type = input("Enter Passenger Type (Regular/Student/Senior/PWD): ")

if destination.lower() == "calbayog":
    regular_fare = 150
elif destination.lower() == "catbalogan":
    regular_fare = 100
elif destination.lower() == "tacloban":
    regular_fare = 250
else:
    regular_fare = 80

if passenger_type.lower() == "student":
    discount_rate = 0.20
elif passenger_type.lower() == "senior":
    discount_rate = 0.20
elif passenger_type.lower() == "pwd":
    discount_rate = 0.20
else:
    discount_rate = 0

discount = regular_fare * discount_rate
final_fare = regular_fare - discount

print("\n======================================")
print("             FARE SUMMARY")
print("======================================")
print("Passenger:", passenger)
print("Destination:", destination)
print("Passenger Type:", passenger_type)
print("--------------------------------------")
print("Regular Fare:     ₱{:.2f}".format(regular_fare))
print("Discount:         ₱{:.2f}".format(discount))
print("Final Fare:       ₱{:.2f}".format(final_fare))
print("======================================")