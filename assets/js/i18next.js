var options = { lng: "nb-no",
               resGetPath: 'locales/__ns__-__lng__.json',
               defaultValueFromContent: false,
               useDataAttrOptions: true,
               debug: true };



i18n.init(options).done(function() {
  $('.splash__title').i18n();
  $('.splash__text').i18n();
  $('#web').i18n();

  $('.intro__title').i18n();
  $('#intro_feature_simple_title').i18n();
  $('#intro_feature_simple_text').i18n();
  $('#intro_feature_secure_title').i18n();
  $('#intro_feature_secure_text').i18n();
  $('#intro_feature_multitoken_title').i18n();
  $('#intro_feature_multitoken_text').i18n();
  $('#intro_feature_waggle_title').i18n();
  $('#intro_feature_waggle_text').i18n();


  $('.tech__title').i18n();
  $('#tech_text_1').i18n();
  $('#tech_text_2').i18n();
  $('#tech_text_3').i18n();

  $('.team__title').i18n();

  $('.native__title').i18n();
  $('.native__text').i18n();
  $('#native_mac_title').i18n();
  $('#native_mac_text').i18n();
  $('#native_mac_download').i18n();
  $('#native_mac_version').i18n();
  $('#native_android_title').i18n();
  $('#native_android_text').i18n();
  $('#native_android_download').i18n();
  $('#native_android_version').i18n();

  $('.footer__title').i18n();
  $('.footer__text').i18n();
  $('.donate').i18n();
});
