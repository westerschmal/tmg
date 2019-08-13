
            const kaching = new KaChing();
            var site_name = 'Froot';
            
            function loadDFP() {
                if (dataLayer[0].show_banners == 1) { 
                    fillSlots();
                }
            }

        function fillSlots() {
            
            var sales_keywords = dataLayer[0].sales_keywords;
            if (sales_keywords != undefined) {
                sales_keywords = sales_keywords.replace(/_/g, '');
                sales_keywords = sales_keywords.replace(/&/g, '_');
                sales_keywords = sales_keywords.replace(/&amp;/g, '_');
                var sales_keywords_array = sales_keywords.split(',');
            } else {
                var sales_keywords_array = [];
            }

            var tags = dataLayer[0].Tags;
            if (tags != undefined) {
                tags = tags.replace(/_/g, '');
                tags = tags.replace(/&/g, '_');
                tags = tags.replace(/&amp;/g, '_');
                var tags_array = tags.split(',');
            } else {
                var tags_array = [];
            }

            if (document.getElementById('ad_leaderboard-t1')) {
                //if (window_width > 768) {
                kaching.defineSlot(
                    'leaderboard',
                    't1', {
                    isLazy: false,
                    }
                );
                //}
            }

            // Elastic native
            if (document.getElementById('ad_elasticnative-1')) {
                kaching.defineSlot(
                    'elasticnative',
                    '1', {
                    isLazy: true,
                    }
                );
            }

            var inlineBanners = document.querySelectorAll(".ad--inline");
            var i;
            var inlineSpot= [];
               
                for (i = 0; i < inlineBanners.length; i++) {
                    inlineSpot[i] = 'wpk_inline_' + i;
                   
                    //if (window_width > 768) {
                        /*if (i == 0) {
                            console.log('pos: ' + i + ' (large)' );
                            googletag.defineSlot('/92311002/wpk/' + site_name + '/desktop/inline', [728, 90], 'wpk_inline_'+i).defineSizeMapping(mappingInlineFluid).addService(googletag.pubads()).setTargeting('Slots', 'inline' + i);
                        
                        } else {
                            console.log('pos: ' + i + ' (fluid)' );
                            googletag.defineSlot('/92311002/wpk/' + site_name + '/desktop/inline', [728, 90], 'wpk_inline_'+i).defineSizeMapping(mappingInlineLarge).addService(googletag.pubads()).setTargeting('Slots', 'inline' + i);
                        
                        }*/

                    realcount = i + 1;

                    kaching.defineSlot(
                        'leaderboardrectangle',
                        'b'+realcount, {
                        isLazy: false,
                        }
                    );
                    // } else {
                    //     // First position on mobile should be named 'top'
                    //     if (i == 0) {
                    //          console.log('leaderboard t1');
                    //         kaching.defineSlot(
                    //             'leaderboard',
                    //              't1', {
                    //             isLazy: false,
                    //              alias: 'banner_top'
                    //              }
                    //          );
                    //      } else {
                    //         realcount = i;
                    //       console.log('leaderboardrectangle-b'+realcount);

                            
                    //         kaching.defineSlot(
                    //         'leaderboardrectangle',
                    //         'b'+realcount, {
                    //         isLazy: false,
                    //         alias: 'inline-banner-'+i
                    //         }
                    //     );
                            
                    //      } 
                    // }
                    
                }
                // Fill sidebar spots

                // Filling the spots : SIDEBAR
                var aside_h;
                if (document.querySelector('.aside-wrap')) {
                    aside_h = document.querySelector('.aside-wrap').offsetHeight - (inlineBanners.length * 90);
                }
                var banner_count = Math.floor(aside_h / 1200);
                var banner_container_height = Math.floor(100 / banner_count);
                var selection = document.querySelector('body .site-main') !== null;
                if (selection) {
                    document.querySelector('body .site-main').style.overflow = 'unset';
                }

                var selection = document.querySelector('body .wrap') !== null;
                if (selection) {
                    document.querySelector('body .wrap').style.overflow = 'unset';
                }
                var wpk_aside = document.querySelector('.aside .aside-wrap') !== null;
                if (wpk_aside) {
                    document.querySelector('aside .aside-wrap').style.position = 'static';
                }
                
                for (x = 1; x <= banner_count; x++) {
                    /*googletag.defineSlot('/92311002/wpk/' + site_name + '/desktop/sidebar', [
                        [300, 250],
                        [300, 600]
                    ], 'wpk_desktop_sidebar' + x).addService(googletag.pubads());*/

                    //document.querySelector('.aside-wrap').insertAdjacentHTML('beforeend', '<div class="sticky-banner-container "  style="position:relative;" id="sticky-banner-container' + x + '"><div class="sticky-banner" id="wpk_desktop_sidebar' + x + '" style="text-align:center;width:300px;position:sticky;top: 20px;"></div></div>');
                    document.querySelector('.aside-wrap').insertAdjacentHTML('beforeend', '<div class="sticky-banner-container "  style="position:relative;" id="sticky-banner-container' + x + '"><div class="ad ad--rectangle sticky-banner" id="ad_rectangle-'+x+'" style="text-align:center;width:300px;position:sticky;top: 20px;"></div></div>');
                    document.querySelector('#sticky-banner-container' + x).style.height = banner_container_height + '%';
                    document.querySelector('aside').style.height = aside_h + 'px';
                    document.querySelector('.aside-wrap').style.height = '100%';
                    kaching.defineSlot(
                        'rectangle',
                        x, {
                        isLazy: false,
                        }
                    );
                }

                if (document.getElementById('ad_leaderboard-b1') ) {
                    kaching.defineSlot(
                        'leaderboard',
                        'b1', {
                            isLazy: false,
                        }
                    );
                }
                
                kaching.init({
                    adunit: site_name+'/page',
                    page: {
                        paid: false,
                        taglist: tags_array,
                    },
                    personalAds: true,
                    Prebid:false,
                    targeting: {
                        article_taglist: tags_array,
                        sales_keywords: sales_keywords_array,
                        page_type: 'detail',
                        
                    },
                    })
                    .then(() => {
                    
                    });
            }
