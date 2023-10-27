import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Por favor introduce tu nombre");
        String nombre= scanner.next();
        System.out.println("Introduce numero 1");
        int numero1= scanner.nextInt();
        System.out.println("Introduce numero 2");
        int numero2= scanner.nextInt();
        System.out.println("Introduce numero 3");
        int numero3= scanner.nextInt();
        System.out.println("Introduce numero 4");
        int numero4= scanner.nextInt();
        System.out.println("Introduce numero 5");
        int numero5= scanner.nextInt();

        System.out.println("Me has dicho que te llamas:"+ nombre);
        System.out.println(numero1+" "+numero2+" "+numero3+" "+numero4+" "+numero5);

        int aux= numero1;
        numero1=numero2;
        numero2=numero3;
        numero3=numero4;
        numero4=numero5;
        numero5= aux;

        System.out.println(numero1+" "+numero2+" "+numero3+" "+numero4+" "+numero5);

        aux =numero5;
        numero5=numero4;
        numero4=numero3;
        numero3=numero2;
        numero2=numero1;
        numero1=aux;

        System.out.println(numero1+" "+numero2+" "+numero3+" "+numero4+" "+numero5);



    }

    }



