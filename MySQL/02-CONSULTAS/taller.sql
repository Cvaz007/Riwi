select * from cliente;

select * from medico 
where med_profesion  = "Veterinario";

SELECT * FROM medicamentos
where med_nombre LIKE "%M%";

SELECT * from medicamentos 
# med_valor > 40 and 1000
where med_valor between 40 and 1000;

# colocar alias con as
select med_nombre as nombre_medicamento from medicamentos
# char_length(med_nombre)
where length(med_nombre)  between 1  and 10 ;

# para contar todo es count(*)
select count(mas_id) as numero_mascotas from mascotas;
select * from mascotas;

select distinct esp_nombre from especializacion;

SELECT * from medicamentos
order by med_valor desc;


SELECT * from citas
where cit_fecha between '2024-04-01' and '2024-04-05';

select mascotas.mas_nombre , cliente.cli_nombre FROM mascotas
inner join cliente
on mascotas.cliente_cli_id  = cliente.cli_id;

#segunda forma 
select mascotas.mas_nombre , cliente.cli_nombre  from mascotas, cliente
where mascotas.cliente_cli_id = cliente.cli_id;

select * from mascotas
left join historias_clinicas
on mascotas.historias_clinicas_his_id = historias_clinicas.his_id;

insert into mascotas 
values (5,"Hercules",2,1,2,1,"hercules.jpg",null);

 select SUM(ser_costo) as costo_total_servicios from servicio;
 
 select * from citas;

SELECT cit_fecha,
CASE
    WHEN cit_estado = 0 THEN "Pendiente" ELSE "Realizada" END 
    as cit_estado
FROM citas; 

SELECT mas_nombre, med_nombre, ser_procedimiento from citas
inner join mascotas on citas.mascotas_mas_id = mascotas.mas_id
inner join medico on citas.medico_med_id = medico.med_id
inner join servicio on citas.servicio_ser_id = servicio.ser_id;


select avg(ser_costo) as costo_promedio_esp  from servicio
where ser_costo >= 100;