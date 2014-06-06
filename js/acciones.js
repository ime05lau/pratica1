// JavaScript Document
/*$(document).ready(fuction(){
	 var fechaH=new Date();
	 alert(fechaH );
	 var fechaC=new Date("2014/04/04");
	 alert(fechaC);
	 resul=fechaH-fechaC;
	 alert(resul);
	 dia=((((resul/1000)/60)/60)/24);
	 alert(dia);*/
	 $(document).ready(function(e){
	 var nombre;
	 $('#datos1').click(function(e){
		 nombre=$('#txdatos').val();
		 //alert(nombre);
	 });//click siguiente nombre
	 $('#fecha1').click(function(e){
     fecha=new date();
	 //alert(fecha.getDate());		 
	 //alert(fecha.getMonth());
	 //alert(fecha.getFullYaer());
	 var fechaA=new Date(fecha.getFullYear() + '/' + (fecha.getMonth()+ 1) + '/' +fecha.getDate());
	 var DiaC=$('#Diacumple').val();
	 var MesC=$('#Mescumple').val();
	 var YearC=$('#anocumple').val();
	 fechaC=new Date(fecha.getFullYear() + '/' + MesC + '/' + DiaC);
	 if (fechaC<fechaA)
	 {
		 fechaC=new Date((fecha.getFullYear()+1) + '/' +MesC+ '/' + DiaC);
	 }
	          //alert(fechaA);
	          //alert(fechaC);
	          result=fehaC-fechaA;
	          seg=Math.ceil((((result/1000)/60)/60)/24);
	          // alert(seg);
	 $('#Mnombre').text(nombre + 'faltan');
	 $('#Mdias').text(seg);
	 if(seg>1)
	 {
		   $('#Mcumple').text('dias para tu cumple')
	 }
	 else
	 {
		   $('#Mcumple').text('dia para tu cumple');
	 }
	 edad=fecha.getFullYear()-YearC
	 if(fechaC> fechaA)
	 {
		 edad=edad-1
	 }
	 //alert(edad);
	    $('#Medad').text(edad);
	 });//click siguiente fecha 
	 });//realy