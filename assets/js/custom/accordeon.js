/* ===== Zeste de Savoir ====================================================
   Author: Alex-D
   ---------------------------------
   Accordeon for sidebar
   ========================================================================== */

$('.main .sidebar.accordeon, .main .sidebar .accordeon').each(function(){
    $that = this;

    $('h4 + ul', $that).each(function(){
        if($('.current', $(this)).length == 0)
            $(this).hide();
    })

    $('h4 a', $that).click(function(e){
        $('+ ul', $(this).parent()).slideToggle(100);

        e.preventDefault();
        e.stopPropagation();
    });
});