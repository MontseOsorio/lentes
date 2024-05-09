/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author cecio
 */
public class registroDto {
    private String nombre;
    private String correo;
    private String password;
    private boolean sesionActiva;
    
    
    public registroDto(String nombre,String correo, String password, boolean sesionActiva){
        this.nombre=nombre;
        this.correo=correo;
        this.password=password;
        this.sesionActiva=sesionActiva;
    }
       public void setNombre(String nombre){
           this.nombre=nombre;
    }
       public String getNombre(){
           return nombre;
    }
        public void setCorreo(String correo){
           this.correo=correo;
    }
       public String getCorreo(){
           return correo;
    }
        public void setPassword(String password){
           this.password=password;
    }
       public String getPassword(){
           return password;
    }
        public void setSesionActiva(Boolean sesionActiva){
           this.sesionActiva=sesionActiva;
    }
       public boolean getSesionActiva(){
           return sesionActiva;
    }
}

