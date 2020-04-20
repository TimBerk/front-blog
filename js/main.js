$( document ).ready(function () {
    const cardBodyEls = $('.card-body');

    if (cardBodyEls.length > 0) {

        cardBodyEls.each( function( index, element ){
            const cardTextEls = $(element).find('p');

            if(cardTextEls.length > 0) {

                cardTextEls.each( function( index, paragraph ){
                    if ( !$(paragraph).hasClass('card-text') ) {
                        $(paragraph).addClass('card-text');
                    }
                });
            }
        });
    }

    $('.toast').toast('show');
});