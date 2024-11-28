package model;

public class Coche {
    private String marca;
    private String modelo;
    private int cv;
    private int cc;
    private String matricula;
    private int velocidad;
    private int kmRecorridos;
    private int velocidadIntroducida;




    public Coche() {
    }

    public Coche(String marca, String modelo, int cv, int cc, String matricula, int velocidad, int kmRecorridos) {
        this.marca = marca;
        this.modelo = modelo;
        this.cv = cv;
        this.cc = cc;
        this.matricula = matricula;
        this.velocidad = velocidad;
        this.kmRecorridos = kmRecorridos;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getCv() {
        return cv;
    }

    public void setCv(int cv) {
        this.cv = cv;
    }

    public int getCc() {
        return cc;
    }

    public void setCc(int cc) {
        this.cc = cc;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public int getVelocidad() {
        return velocidad;
    }

    public void setVelocidad(int velocidad) {
        this.velocidad = velocidad;
    }

    public int getKmRecorridos() {
        return kmRecorridos;
    }

    public void setKmRecorridos(int kmRecorridos) {
        this.kmRecorridos = kmRecorridos;
    }

    public void mostrarDatos(){
        System.out.println("DATOS DEL COCHE");
        System.out.println();
        System.out.println("Marca del coche:" + marca);
        System.out.println("Modelo del coche:" + modelo);
        System.out.println("Caballos (cv):" + cv);
        System.out.println("Cilindrada (cc): " + cc);
        System.out.println("Matricula:" + matricula);
        System.out.println("Velocidad:" + velocidad);
        System.out.println("km recorridos" + kmRecorridos);
        System.out.println();
    }
    public void acelerar(int velocidadIntroducida){

        System.out.println("KM antes: " + kmRecorridos);
        if(getCv()<100){
            velocidad += (Math.random() * velocidadIntroducida);
            System.out.println("velocidad  " + velocidad);
        } else if (getCv()>100) {
            velocidad += (Math.random() * velocidadIntroducida)+10;
            System.out.println("velocidad  " + velocidad);
        }
        else{
            System.out.println("No tiene suficientes cv");
        }

        kmRecorridos += velocidad /2;

        System.out.println("KM despues: " + kmRecorridos);
        System.out.println();
    }

}
