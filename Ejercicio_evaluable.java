
import java.util.Arrays;
import java.util.Scanner;



public class Ejercicio_evaluable {
    static int[] carton = new int[10];

    static int[] numero = new int[99];

    static int numeroLinea = 0;

    static int numeroBingo = 0;

    static int numeroIntentosLinea;

    static int numeroIntentosBingo;

    static int apuesta;

    static int numApuesta;

    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {

        System.out.println("BIENVENIDO AL BINGO");

        System.out.println("Se va a comenzar pulsa S/N si desea continuar");

        String _comienzo = scanner.nextLine();

        if (!_comienzo.equals("S"))
        {
            System.out.println("ADIOS");
        }
        else
        {
            juegoBinngo();
        }
    }

    public static void juegoBinngo()
    {
        //Preguntamos al empezar
        System.out.println("¡¡Empezamos!!");
        System.out.println();
        System.out.println("Introduce el dinero que apuesta");
        apuesta = scanner.nextInt();

        System.out.println("Introduce el numero de apuestas en la que prevés acertar");
        numApuesta = scanner.nextInt();

        System.out.println("Los numeros del carton son los siguientes:");

        //Generamos los numeros del carton
        cartonGenerar();

        //Una vez generados los numeros, mostramos
        String CadenaMostrarcarton = Mostrarcarton(carton);
        System.out.println(CadenaMostrarcarton);
        System.out.println();

        //Comenzamos los numeros para bingo
        generarNumeroAleatorio();

        System.out.println("Los numeros nombrados son los siguientes:");
        System.out.println();

        //Mostramos Resultados de los numeros nombrados del bingo
        String CadenaNumerosNombradosBingo = mostrarNumerosNombradosBingo(numero);
        System.out.println(CadenaNumerosNombradosBingo);

        System.out.println();

        //mostramos las apuestas premiadas del Bingo
        mostrarApuestaPremiada();

        System.out.println();

        System.out.println("Fin del Bingo");


    }

    public static void cartonGenerar() {

        for (int i = 0; i < carton.length; i++) {
            int numeroAleatorioCarton = 0;
            boolean duplicadoCarton;
            do {
                numeroAleatorioCarton = (int) (Math.random() * 99) + 1;

                duplicadoCarton = false;
                for (int j = 0; j < i; j++) {
                    if (carton[j] == numeroAleatorioCarton) {
                        duplicadoCarton = true;
                        break;
                    }
                }
            } while (duplicadoCarton);

            carton[i] = numeroAleatorioCarton;
        }
    }

    public static String Mostrarcarton(int[] array) {
        return Arrays.toString(array);
    }

    public static String mostrarNumerosNombradosBingo(int[] array) {
        return Arrays.toString(array);
    }

    public static void generarNumeroAleatorio() {

        if(numeroIntentosBingo == 0) {

            for (int i = 0; i < numero.length; i++) {
                int numeroAleatorioNombrado;
                boolean duplicadoNombrado;

                do {
                    numeroAleatorioNombrado = (int) (Math.random() * 99) + 1;
                    duplicadoNombrado = false;

                    for (int j = 0; j < i && !duplicadoNombrado; j++) {
                        if (numero[j] == numeroAleatorioNombrado) {
                            duplicadoNombrado = true;
                        }
                    }
                } while (duplicadoNombrado);

                numero[i] = numeroAleatorioNombrado;

                //Comprobaciones del cartón
                numerosComprobacionCarton(numeroAleatorioNombrado, i);
            }
        }
    }

    public static void numerosComprobacionCarton(int numeroAleatorioNombrado,int posicion){
        for (int j = 0; j < carton.length; j++) {

            if (carton[j] == numeroAleatorioNombrado) {
                numeroLinea++;
                if (numeroLinea==5){
                    numeroIntentosLinea=posicion;
                }
                numeroBingo++;
                if (numeroBingo==10){
                    numeroIntentosBingo=posicion;
                }

                System.out.println("Numero cantado acertado: " + numeroAleatorioNombrado
                                    + ", Numeros Linea: "+ numeroLinea
                                    + ", Numeros Bingo: "+ numeroBingo);

            }
        }
    }

    public static void mostrarApuestaPremiada()
    {
        System.out.println("Numero de intentos hechos para conseguir linea son: "+ numeroIntentosLinea);

        System.out.println("Numero de intentos hechos para conseguir bingo son: "+ numeroIntentosBingo);

        System.out.println();

        //Si has acertado en el numero de intentos dicho, se multiplica tu apuesta por 10
        if (numeroIntentosBingo == numApuesta) {
            System.out.println("Tu apuesta ha sido premiada, te llevas: "+ apuesta * 10 + "€");
        }else{
            System.out.println("La apuesta no ha sido premiada, te llevas: 0€");
        }
    }
}