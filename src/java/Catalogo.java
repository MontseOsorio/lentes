/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author cecio
 */
public class Catalogo {
    private String img;
    private String nombreProducto;
    private float precio;
    private String descripcion;
    private String calificacion;
   
    public Catalogo (String img, String nombreProducto, float precio,String descripcion, String calificacion){
       this.img=img;
        this.nombreProducto=nombreProducto;
        this.precio=precio;
        this.descripcion=descripcion;
        this.calificacion=calificacion;
    }
    public void setImg(String img){
           this.img=img;
    }
       public String getImg(){
           return img;
    }
       public void setNombreProducto(String nombreProducto){
           this.nombreProducto=nombreProducto;
    }
       public String getNombreProducto(){
           return nombreProducto;
    }
       public void setPrecio(float precio){
           this.precio=precio;
    }
       public float getPrecio(){
           return precio;
    }
       public void setDescripcion(String descripcion){
           this.descripcion=descripcion;
    }
       public String getDescripcion(){
           return descripcion;
    }
       public void setCalificacion(String calificacion){
           this.calificacion=calificacion;
    }
       public String getCalificacion(){
           return calificacion;
    }
}
