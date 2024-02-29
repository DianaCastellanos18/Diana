package model;

import javax.swing.plaf.synth.SynthOptionPaneUI;



public class Carrera {
    private int kmTotales;
    private int numVueltas;
    private String ganador;


    public Carrera() {

    }

    public Carrera(int kmTotales, int numVueltas, String ganador) {
        this.kmTotales = kmTotales;
        this.numVueltas = numVueltas;
        this.ganador = ganador;
    }

    public int getKmTotales() {
        return kmTotales;
    }

    public void setKmTotales(int kmTotales) {
        this.kmTotales = kmTotales;
    }

    public int getNumVueltas() {
        return numVueltas;
    }

    public void setNumVueltas(int numVueltas) {
        this.numVueltas = numVueltas;
    }


    public void ganador(Coche coche) {}
    public void iniciarCarrera(Coche participante1,Coche participante2){

        //Calculo de km por vuelta
        int kmVuelta = kmTotales / numVueltas;

        int vueltasRecorridas = 0;
        int kmRecorridos = 0;


        System.out.println("kmVuelta" + kmVuelta);
        System.out.println("kmTotales" + kmTotales);

        //Vueltas al circuito
        for (int i = 0; i < numVueltas; i++) {

            //Km recorridos por interacción del bucle
            kmRecorridos += kmVuelta;
            System.out.println("kmRecorridos:" + kmRecorridos);

            //Se comparan los dos coches con los km recorridos y aparte los km totales
            if (participante1.getKmRecorridos() == kmRecorridos && participante1.getKmRecorridos() == kmTotales )//Participante 1 ganador
            {
                System.out.println("La carrera ha finalizado: " + vueltasRecorridas);
                System.out.println("Ha ganado participante 1: Vueltas Recorridas" + vueltasRecorridas + " Matricula: " + participante1.getMatricula());
                break;
            }else if (participante2.getKmRecorridos() == kmRecorridos && participante2.getKmRecorridos() == kmTotales )//Participante 2 ganador
            {
                System.out.println("La carrera ha finalizado: " + vueltasRecorridas);
                System.out.println("Ha ganado participante 2: Vueltas Recorridas" + vueltasRecorridas + " Matricula: " + participante2.getMatricula());
                break;
            }

            //Vueltas de la carrera normal recorridas
            vueltasRecorridas++;
            System.out.println("Vueltas recorridas realizadas:" + vueltasRecorridas);
            System.out.println();
            System.out.println();

            //Caso para saber cuantas vueltas extra deben de dar cuando superan los km totales del circuito
            if ((participante1.getKmRecorridos()<kmTotales || participante2.getKmRecorridos()<kmTotales) && kmTotales == kmRecorridos)
            {
                int vueltasRestantes= 0;
                int kmGanador=0;
                String cocheGanador = "";

                if(participante1.getKmRecorridos()> participante1.getKmRecorridos()){
                    kmGanador=participante1.getKmRecorridos();
                    cocheGanador = participante1.getMatricula();
                }else{
                    kmGanador= participante2.getKmRecorridos();
                    cocheGanador = participante2.getMatricula();
                }

                vueltasRestantes = (kmTotales - kmGanador)/kmVuelta;
                //Sacamos la matricula y las vueltas extras que ha realizado el coche ganador.
                System.out.println("El Ganador ha sido: " + cocheGanador + " -  vueltas extra: " + vueltasRestantes);
            }
        }
    }
}


