var table = $('#table');
var table_row = $('#table tr').length;
var table_coll = $('#table tr:last td').length;
var tr_index;
let tds_mod;

$('.save_r').on('click',function () {
    console.log('Guardar registro')
    let name = $('#name').val();
    let last_name = $('#last-name').val();
    let edge = $('#edge').val();

    console.log('Valore a guradar: ' + name + ' ' + last_name + ' ' + edge)
    $('#name').focus();

    let tr_new = '<tr><td>' + name + '</td>' +
        '<td>' + last_name + '</td>' + '<td>' + edge + '</td>' +
        '<td> <input type="button" value="Editar" class="edit" /> </td>' +
        '<td> <input type="button" value="Eliminar" class="delete" /> </td> </tr>';
    $(table).append(tr_new);
    console.log($('#table tbody tr').length)

});

$('#table').on('click', '.edit' , function () {
    console.log('Editar datos')

    let tr = $(this).parent().parent();
    let tds = $(tr).children();
    // fila que se modificara
    tds_mod = tds;
    console.log(tds_mod)

    var datos = new Array();
    let i = 0;
    for (text of tds) {
        datos[i] = $(text).text();
        tds = $(tds).next();
        i++;

    }
    console.log('datos en datos: ' + datos)
    //Datos a modificar
    $('#name').val(datos[0]);
    $('#last-name').val(datos[1]);
    $('#edge').val(datos[2]);
    $('#name').focus();
    $('#save').removeClass('save_r');
    $('#save').addClass('save_e');

});
$('#table').on('click','.save_e',function () {

    $('#save').removeClass('save_e');
    $('#save').addClass('save_r');
    console.log('Se gurdara las modificaciones en el registro')

    let datos_mod = new Array();
    datos_mod[0] = $('#name').val();
    datos_mod[1] = $('#last-name').val();
    datos_mod[2] = $('#edge').val();
    console.log($(tds_mod))
    for (let i = 0; i < datos_mod.length; i++) {

        console.log(datos_mod[i])

    }
    console.log($(tds_mod))

});
$('#table').on('click','.delete', function () {
    console.log('Eliminar datos')
    alert('Se eliminara un registro')
});