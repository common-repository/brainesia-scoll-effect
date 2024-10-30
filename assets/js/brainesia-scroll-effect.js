jQuery(document).ready(function($) {
(function() {
    tinymce.PluginManager.add('bse_mce_button', function( editor, url ) {
        editor.addButton('bse_mce_button', {
            icon: 'bse-mce-icon',
            title : 'Brainesia Scroll Effect Shortcode', // title of the button
            onclick: function() {
                editor.windowManager.open( {
                    title: 'Insert Scroll Effect',
                    body: [
                            {
                                type: 'textbox',
                                name: 'class',
                                label: 'class (optional)',
                                value: '30'
                            },
                            {
                                type: 'textbox',
                                name: 'content',
                                label: 'Content',
                                value: 'Content Here',
                                multiline: true,
                                minWidth: 300,
                                minHeight: 100
                            },
                            {
                                type: 'listbox',
                                name: 'effect',
                                label: 'effect',
                                'values': [
                                    {text : 'Fade In', value : 'fadeIn'},
                                    {text : 'Fade In Down', value : 'fadeInDown'},
                                    {text : 'Fade In Down Big', value : 'fadeInDownBig'},
                                    {text : 'Fade In Left', value : 'fadeInLeft'},
                                    {text : 'Fade In Left Big', value : 'fadeInLeftBig'},
                                    {text : 'Fade In Up', value: 'fadeInUp'},
                                    {text : 'Fade In Left', value: 'fadeInLeft'},
                                    {text : 'Fade In Left Big', value : 'fadeInLeftBig'},
                                    {text : 'Fade In Right', value : 'fadeInRight'},
                                    {text : 'Fade In Right Big', value : 'fadeInRightBig'},
                                    {text : 'Fade In Up', value : 'fadeInUp'},
                                    {text : 'Fade In Up Big', value : 'fadeInUpBig'},
                                    {text : 'Fade Out', value : 'fadeOut'},
                                    {text : 'Fade Out Down', value : 'fadeOutDown'},
                                    {text : 'Fade Out Down Big', value : 'fadeOutDownBig'},
                                    {text : 'Fade Out Left', value : 'fadeOutLeft'},
                                    {text : 'Fade Out Left Big', value : 'fadeOutLeftBig'},
                                    {text : 'Fade Out Right', value : 'fadeOutRight'},
                                    {text : 'Fade Out Right Big', value : 'fadeOutRightBig'},
                                    {text : 'Fade Out Up', value : 'fadeOutUp'},
                                    {text : 'Fade Out Up Big', value : 'fadeOutUpBig'},
                                    {text : 'Flip', value : 'flip'},
                                    {text : 'Flip In X', value : 'flipInX'},
                                    {text : 'Flip In Y', value : 'flipInY'},
                                    {text : 'Flip Out X', value : 'flipOutX'},
                                    {text : 'Flip Out Y', value : 'flipOutY'},
                                    {text : 'Light Speed In', value : 'lightSpeedIn'},
                                    {text : 'Light Speed Out', value : 'lightSpeedOut'},
                                    {text : 'Rotate In', value : 'rotateIn'},
                                    {text : 'Rotate In Down Left', value : 'rotateInDownLeft'},
                                    {text : 'Rotate In Down Right', value : 'rotateInDownRight'},
                                    {text : 'Rotate In Up Left', value: 'rotateInUpLeft'},
                                    {text : 'Rotate In Up Right', value : 'rotateInUpRight'},
                                    {text : 'Rotate Out', value : 'rotateOut'},
                                    {text : 'Rotate Out Down Left', value : 'rotateOutDownLeft'},
                                    {text : 'Rotate Out Down Right', value : 'rotateoutDownRight'},
                                    {text : 'Rotate Out Up Left', value: 'rotateOutUpLeft'},
                                    {text : 'Rotate Out Up Right', value : 'rotateOutUpRight'},
                                    {text : 'Bounce', value : 'bounce'},
                                    {text : 'Bounce In', value : 'bounceIn'},
                                    {text : 'Bounce In Down', value : 'bounceInDown'},
                                    {text : 'Bounce In Left', value : 'bounceInLeft'},
                                    {text : 'Bounce In Right', value : 'bounceInRight'},
                                    {text : 'Bounce In Up', value : ' bounceInUp'},
                                    {text : 'Bounce Out', value : 'bounceOut'},
                                    {text : 'Bounce Out Down', value : 'bounceOutDown'},
                                    {text : 'Bounce Out Left', value : 'bounceOutLeft'},
                                    {text : 'Bounce Out Right', value : 'bounceOutRight'},
                                    {text : 'Bounce Out Up', value : 'bounceOutUp'},
                                    {text : 'Flash', value : 'flash'},
                                    {text : 'Pulse', value : 'pulse'},
                                    {text : 'RubberBand', Value : 'rubberBand'},
                                    {text : 'Shake', value : 'shake'},
                                    {text : 'Swing', value : 'swing'},
                                    {text : 'Tada', value : 'tada'},
                                    {text : 'Wobble', value : 'wobble'},
                                    {text : 'Hinge', value : 'hinge'},
                                    {text : 'Roll In', value : 'rollIn'},
                                    {text : 'Roll Out', value : 'rollOut'}
                                        ]
                            }
                    ],
                    onsubmit: function( e ) {
                            editor.insertContent( '[bse  class="' + e.data.class + '" effect="' + e.data.effect + '"]'+ e.data.content +'[/bse]');
                    }
                });
            }
        });
    });
})();
});