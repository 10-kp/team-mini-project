$('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  $( function() {
    $( "#dueDate" ).datepicker();
  } );