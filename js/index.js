$(function() {
    // 首页顶部黑条开始
    var n = 0;
    $('#shop-car-div').hover(function() {
        if (n == 0) {
            $color = $("#shop-car-div .shop-car").css("color");
            $("#shop-car-div .shop-car").css("color", "#FF6700");
            // $("#shop-car-div .shop-car").css("bacground","#FF6700");
            $("#shop-car-div .cart-menu").slideDown(250, function() {
                n = 1;
            });
            // alert();
        }
        // alert();

    }, function() {
        if (n == 1) {
            $("#shop-car-div .shop-car").css("color", $color);
            $("#shop-car-div .cart-menu").slideUp(250, function() {
                n = 0;
            });

        }

    });
    // 首页顶部黑条结束
    $("#banner_menu_wrap").children().hover(function() {
        $(this).css("background", "#ff6700");
        $(this).children(".banner_menu_content").css("border", "1px solid #F0F0F0").show();
    }, function() {
        $(this).css("background", "none");
        $(this).children(".banner_menu_content").css("border", "0px solid #F0F0F0").hide();
    });

    $(".header-ul-li").hover(function() {
        $("#menu_content_bg").css("border", "1px solid #D0D0D0");
        $(this).css("color", "#ff6700");
        $("#" + $(this).attr("control")).show();
        $("#menu_content_bg").height(230);
    }, function() {
        $("#" + $(this).attr("control")).hide();
        $(this).css("color", " #424242");
        $("#menu_content_bg").height(0);
        $("#menu_content_bg").css("border", "0px solid #D0D0D0");
    })

    // 6个一起轮播
    var carousels = $('.carousel');
    carousels.each(function() {
        var $obj = $(this);
        var $inner = $obj.find('.carousel-inner');

        var id = 'uuid' + new Date().getTime();
        $obj.addClass(id);

        if ($obj.data('shift') === 1) {
            var items = $obj.find('.item > [class*="col-"]'),
                visibleCnt = $obj.find('.item:first [class*="col-"]').length,
                wrapper = "";

            // build styles
            var rule_base = '.carousel.' + id + ' .carousel-inner > .item',
                styles = $('<style></style>'),
                rules = [];
            rules[0] = rule_base + '.next {left: ' + (100 / visibleCnt) + '%; transform: none;}';
            rules[1] = rule_base + '.active {left: 0;}';
            rules[2] = rule_base + '.active.left {left: -' + (100 / visibleCnt) + '%; transform: none;}';
            rules[3] = rule_base + '.next.left {left: 0;}';
            rules[4] = rule_base + '.active.right {left: ' + (100 / visibleCnt) + '%; transform: none;}';
            rules[5] = rule_base + '.prev.right {left: 0;}';
            rules[6] = rule_base + '.prev {left: -' + (100 / visibleCnt) + '%; transform: none;}';
            for (var i = 0; i < rules.length; i++) {
                styles.append(rules[i]);
            }
            $obj.prepend(styles);

            // rebuild items
            for (var i = 0; i < $(items).length; i++) {
                var $item = $(items[i]);
                var parent = $item.parent();
                if (parent.hasClass('item')) {
                    if (!wrapper.length) {
                        wrapper = parent.clone().removeClass('active').html('');
                    }
                    $item.unwrap();
                }

                var itemGroup = [$item];
                for (var x = 1; x < visibleCnt; x++) {
                    var a = i + x;
                    var next = $(items[a]);
                    if (!next.length) {
                        next = $(items[(a - $(items).length)]);
                    }
                    itemGroup[x] = next.clone();
                }
                var newSet = wrapper.clone().html(itemGroup);
                if (i == 0) {
                    newSet.addClass('active');
                }
                newSet.appendTo($inner);
            }
        }
    });
    // 6个一起轮播结束


    $(".floor_goods_wrap_li div").hover(function() {
        $(this).css({
            "top": "-5px",
            "box-shadow": "0px 15px 30px rgba(0,0,0,0.2)"
        });
    }, function() {
        $(this).css({
            "top": "0px",
            "box-shadow": "none"
        });
    })

    $("#bbb img").css("margin-top", ($("#aaa").height() - $("#bbb").height() + 48) / 2.0 + "px");
    window.onresize = function() {
        $("#bbb img").css("margin-top", ($("#aaa").height() - $("#bbb").height() + 48) / 2.0 + "px");
    }

});