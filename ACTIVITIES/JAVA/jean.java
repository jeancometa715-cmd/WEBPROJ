import java.util.Scanner;

public class BusFareCalculator {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("======================================");
        System.out.println("         BUS FARE CALCULATOR");
        System.out.println("======================================");

        System.out.print("Enter Passenger Name: ");
        String passenger = input.nextLine();

        System.out.print("Enter Destination: ");
        String destination = input.nextLine();

        System.out.print("Enter Passenger Type (Regular/Student/Senior/PWD): ");
        String passengerType = input.nextLine();

        double regularFare;

        if (destination.equalsIgnoreCase("calbayog")) {
            regularFare = 150;
        } else if (destination.equalsIgnoreCase("catbalogan")) {
            regularFare = 100;
        } else if (destination.equalsIgnoreCase("tacloban")) {
            regularFare = 250;
        } else {
            regularFare = 80;
        }

        double discountRate;

        if (passengerType.equalsIgnoreCase("student")) {
            discountRate = 0.20;
        } else if (passengerType.equalsIgnoreCase("senior")) {
            discountRate = 0.20;
        } else if (passengerType.equalsIgnoreCase("pwd")) {
            discountRate = 0.20;
        } else {
            discountRate = 0;
        }

        double discount = regularFare * discountRate;
        double finalFare = regularFare - discount;

        System.out.println("\n======================================");
        System.out.println("             FARE SUMMARY");
        System.out.println("======================================");
        System.out.println("Passenger: " + passenger);
        System.out.println("Destination: " + destination);
        System.out.println("Passenger Type: " + passengerType);
        System.out.println("--------------------------------------");
        System.out.printf("Regular Fare:     ₱%.2f%n", regularFare);
        System.out.printf("Discount:         ₱%.2f%n", discount);
        System.out.printf("Final Fare:       ₱%.2f%n", finalFare);
        System.out.println("======================================");

        input.close();
    }
}