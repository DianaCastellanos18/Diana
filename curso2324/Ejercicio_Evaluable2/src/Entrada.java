import model.Carrera;
import model.Coche;

import java.util.ArrayList;
import java.util.Scanner;

import static model.Coche.*;

public class Entrada {

    public static void main(String[] args) {


        Coche coche = new Coche("Renault","Captur",89, 3000,"1234HYK", 90, 12000);
        Coche participante1 = new Coche("Renault","Clio",120, 6000,"5678JPL", 50, 10);
        Coche participante2 = new Coche("kia","Ceed",110, 500,"9876LOM", 120, 15);


        Scanner scanner=new Scanner(System.in);

        System.out.println("Que ejercicio quieres hacer 1 o 2");
        int ejercicioRealizar= scanner.nextInt();

        if (ejercicioRealizar == 1)
        {
            System.out.println("Introduce una velocidad");
            int velocidadIntroducida= scanner.nextInt();

            coche.mostrarDatos();
            System.out.println();
            coche.acelerar(velocidadIntroducida);

        } else if (ejercicioRealizar == 2) {

            System.out.println("¡¡COMIENZA LA CARRERA!!");
            System.out.println();
            //Mostramos Datos de los coches antes de la carrera
            System.out.println("DATOS DE LOS COCHES QUE PARTICIPAN:");
            System.out.println();
            participante1.mostrarDatos();
            System.out.println();
            participante2.mostrarDatos();

            //aceleraciones como vueltas indique el circuito
            Carrera carrera= new Carrera(20, 10, "");

            carrera.ganador(new Coche());

            //metodo iniciar carrera
            carrera.iniciarCarrera(participante1,participante2);
        }
        else
        {
            System.out.println("No hay mas ejercicios");
        }
    }
}
