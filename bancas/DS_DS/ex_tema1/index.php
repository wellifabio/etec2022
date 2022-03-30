<?php
//Classe
class Animal{
    
    //Atributos
    var $especie;
    var $raca;
    var $som;

    //Método
    public function emitirSom(){
        echo $this->som."<br/>";
    }

    public function mostrarAtributos(){
        echo $this->especie."<br/>";
        echo $this->raca."<br/>";
        echo $this->som."<br/>";
    }
}

//Declaração dos Objetos que serão utilizados
$toto = null;
$mimi = null;

//Iniciar o objeto (instanciação)
$toto = new Animal();
$toto->especie = "Cachorro";
$toto->raca = "Vira Latas";
$toto->som = "Au Au";
$toto->mostrarAtributos();
//Iniciar o outro objeto (instanciação)
$mimi = new Animal();
$mimi->som = "Miau";
$mimi->emitirSom();

?>