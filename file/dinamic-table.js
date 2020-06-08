var table = $('#table');
var table_row = $('#table tr').length;
var table_coll = $('#table tr:last td').length;
var tr_index;
let tds_mod;

$('#save').click(function () {

    if ($(this).val() === 'Save new') {
        saveRegistro();
    } else {
        saveEdit();
    }


});

$('#table').on('click', '.edit', function () {

    console.log('Editar datos')
    $('#save').val('Save edit');
    tr_index = $(this).parent().parent();
    $(tr_index).addClass('remove_row');
    let tds = $(tr_index).children();
    // fila que se modificara
    console.log(tr_index)

    var datos = new Array();
    let i = 0;
    for (text of tds) {
        datos[i] = $(text).text();
        tds = $(tds).next();
        i++;

    }
    console.log('Datos en datos: ' + datos)
    //Datos a modificar
    $('#name').val(datos[0]);
    $('#last-name').val(datos[1]);
    $('#edge').val(datos[2]);
    $('#save').val('Save edit');
    $('#name').focus();

});

$('#table').on('click', '.delete', function () {
    
    console.log('Eliminar datos')

    let tr_delete = $(this).parent().parent();
    $(tr_delete).addClass('remove_row');
    $('#table tbody tr').remove('.remove_row')
    console.log($('#table tbody tr').length);

});
function saveRegistro() {

    console.log('Guardar registro')
    let name = $('#name').val();
    let last_name = $('#last-name').val();
    let edge = $('#edge').val();
    $('#name').focus();
    $(table).append(addRow(name, last_name, edge));

}
function saveEdit() {

    console.log('Se gurdaran las modificaciones en el registro')
    let name = $('#name').val();
    let last_name = $('#last-name').val();
    let edge = $('#edge').val();

    $(tr_index).remove('td');
    let new_cel = addRow(name, last_name, edge);
    addCells(new_cel);
    $('#save').val('Save new');

}
function addRow(name, last_name, edge) {

    let tr_new = '<tr><td>' + name + '</td>' +
        '<td>' + last_name + '</td>' + '<td>' + edge + '</td>' +
        '<td> <input type="button" value="Editar" class="edit" /> </td>' +
        '<td> <input type="button" value="Eliminar" class="delete" /> </td> </tr>';

    return tr_new;
}
function addCells(new_tr) {
    $(tr_index).html(new_tr.slice(3, (new_tr).length - 5));
}
//limpiar inpust