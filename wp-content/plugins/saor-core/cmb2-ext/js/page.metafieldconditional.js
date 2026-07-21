(function($){
    "use strict";
    
    let $saor_page_breadcrumb_area      = $("#_saor_page_breadcrumb_area");
    let $saor_page_settings             = $("#_saor_page_breadcrumb_settings");
    let $saor_page_breadcrumb_image     = $("#_saor_breadcumb_image");
    let $saor_page_title                = $("#_saor_page_title");
    let $saor_page_title_settings       = $("#_saor_page_title_settings");

    if( $saor_page_breadcrumb_area.val() == '1' ) {
        $(".cmb2-id--saor-page-breadcrumb-settings").show();
        if( $saor_page_settings.val() == 'global' ) {
            $(".cmb2-id--saor-breadcumb-image").hide();
            $(".cmb2-id--saor-page-title").hide();
            $(".cmb2-id--saor-page-title-settings").hide();
            $(".cmb2-id--saor-custom-page-title").hide();
            $(".cmb2-id--saor-page-breadcrumb-trigger").hide();
        } else {
            $(".cmb2-id--saor-breadcumb-image").show();
            $(".cmb2-id--saor-page-title").show();
            $(".cmb2-id--saor-page-breadcrumb-trigger").show();
    
            if( $saor_page_title.val() == '1' ) {
                $(".cmb2-id--saor-page-title-settings").show();
                if( $saor_page_title_settings.val() == 'default' ) {
                    $(".cmb2-id--saor-custom-page-title").hide();
                } else {
                    $(".cmb2-id--saor-custom-page-title").show();
                }
            } else {
                $(".cmb2-id--saor-page-title-settings").hide();
                $(".cmb2-id--saor-custom-page-title").hide();
    
            }
        }
    } else {
        $saor_page_breadcrumb_area.parents('.cmb2-id--saor-page-breadcrumb-area').siblings().hide();
    }


    // breadcrumb area
    $saor_page_breadcrumb_area.on("change",function(){
        if( $(this).val() == '1' ) {
            $(".cmb2-id--saor-page-breadcrumb-settings").show();
            if( $saor_page_settings.val() == 'global' ) {
                $(".cmb2-id--saor-breadcumb-image").hide();
                $(".cmb2-id--saor-page-title").hide();
                $(".cmb2-id--saor-page-title-settings").hide();
                $(".cmb2-id--saor-custom-page-title").hide();
                $(".cmb2-id--saor-page-breadcrumb-trigger").hide();
            } else {
                $(".cmb2-id--saor-breadcumb-image").show();
                $(".cmb2-id--saor-page-title").show();
                $(".cmb2-id--saor-page-breadcrumb-trigger").show();
        
                if( $saor_page_title.val() == '1' ) {
                    $(".cmb2-id--saor-page-title-settings").show();
                    if( $saor_page_title_settings.val() == 'default' ) {
                        $(".cmb2-id--saor-custom-page-title").hide();
                    } else {
                        $(".cmb2-id--saor-custom-page-title").show();
                    }
                } else {
                    $(".cmb2-id--saor-page-title-settings").hide();
                    $(".cmb2-id--saor-custom-page-title").hide();
        
                }
            }
        } else {
            $(this).parents('.cmb2-id--saor-page-breadcrumb-area').siblings().hide();
        }
    });

    // page title
    $saor_page_title.on("change",function(){
        if( $(this).val() == '1' ) {
            $(".cmb2-id--saor-page-title-settings").show();
            if( $saor_page_title_settings.val() == 'default' ) {
                $(".cmb2-id--saor-custom-page-title").hide();
            } else {
                $(".cmb2-id--saor-custom-page-title").show();
            }
        } else {
            $(".cmb2-id--saor-page-title-settings").hide();
            $(".cmb2-id--saor-custom-page-title").hide();

        }
    });

    //page settings
    $saor_page_settings.on("change",function(){
        if( $(this).val() == 'global' ) {
            $(".cmb2-id--saor-breadcumb-image").hide();
            $(".cmb2-id--saor-page-title").hide();
            $(".cmb2-id--saor-page-title-settings").hide();
            $(".cmb2-id--saor-custom-page-title").hide();
            $(".cmb2-id--saor-page-breadcrumb-trigger").hide();
        } else {
            $(".cmb2-id--saor-breadcumb-image").show();
            $(".cmb2-id--saor-page-title").show();
            $(".cmb2-id--saor-page-breadcrumb-trigger").show();
    
            if( $saor_page_title.val() == '1' ) {
                $(".cmb2-id--saor-page-title-settings").show();
                if( $saor_page_title_settings.val() == 'default' ) {
                    $(".cmb2-id--saor-custom-page-title").hide();
                } else {
                    $(".cmb2-id--saor-custom-page-title").show();
                }
            } else {
                $(".cmb2-id--saor-page-title-settings").hide();
                $(".cmb2-id--saor-custom-page-title").hide();
    
            }
        }
    });

    // page title settings
    $saor_page_title_settings.on("change",function(){
        if( $(this).val() == 'default' ) {
            $(".cmb2-id--saor-custom-page-title").hide();
        } else {
            $(".cmb2-id--saor-custom-page-title").show();
        }
    });
    
})(jQuery);